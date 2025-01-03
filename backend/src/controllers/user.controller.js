import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";


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

    const { username, email, password } = req.body;
    console.log(username, email, password);

    if(
        [username, email, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fileds are required");
    }

    const existedUser = User.findOne({
        $or: [{ username }, { email }]
    })

    if(existedUser){
        throw new ApiError(400, "User with email or username already exists");
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar is required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    
    if(!avatar){
        throw new ApiError(500, "Avatar is required");
    }

    User.create({
        username,
        email,
        password,
        avatar: avatar?.url || "",
    })
});


export { registerUser }