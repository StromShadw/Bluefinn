import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const registerUser = asyncHandler(async (req, res, _) => {
    // get user details from frontend
    // validation - not empty
    // check if user exists: username
    // check for images,check for avatr
    // upload them on cloudinary
    // create user object - create entry in db
    // remove possword and refresh token filed from response
    // check for creation
    // return response

    const { fullName,username, email, password } = req.body;
    console.log(fullName,username, email, password);

    if (
        [fullName, email, username, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fileds are required");
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser) {
        throw new ApiError(400, "User with email or username already exists");
    }

    console.log(req.files);

    // const avatarLocalPath = req.files?.avatar[0]?.path;
    let avatarLocalPath;
    if (req.files && Array.isArray(req.files.avatar) && req.files.avatar.length > 0) {
        avatarLocalPath = req.files.avatar[0].path;
    }

    // if (!avatarLocalPath) {
    //     throw new ApiError(400, "Avatar is required");
    // }

    const avatar = await uploadOnCloudinary(avatarLocalPath)

    // if (!avatar) {
    //     throw new ApiError(500, "Avatar is required");
    // }

    const user = await User.create({
        fullName,
        username: username.toLowerCase(),
        email,
        password,
        avatar: avatar?.url || "",
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );
    
    console.log(User.findById(user._id));
    
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registreing a user");
    }

    return res.status(201).json(new ApiResponse(200, createdUser,"User Registered Successfully!"));
});

const loginUser = asyncHandler(async(req,res,_)=>{

})


export {
    registerUser
}