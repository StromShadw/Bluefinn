import { useState, useEffect } from "react";
import axios from "axios";
// import { useGlobalState } from "../Context/GlobalState.jsx";

const UserAPI = (token) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    // const {setUser,setAvatar} = useGlobalState()
    useEffect(() => {
        if (token) {
            const getUser = async () => {
                try {
                    // console.log("Token received in UserAPI:", token);

                    const res = await axios.get(
                        "http://localhost:8000/api/v1/users/current-user",
                        {
                            headers: { 
                                accessToken: token, // You can include the token in the header as well.
                            },
                            withCredentials: true, // Include credentials (cookies) with the request
                        }
                    );

                    setIsLoggedIn(true);
                    setIsAdmin(res.data.role === "admin");
                    // console.log("User info fetched successfully:", res.data);
                    // setUser(res.data)
                    // console.log(user);
                    // setAvatar(res.data.avatar)
                    // console.log(avatar);                   
                } catch (err) {
                    console.error("Failed to fetch user information:", {
                        message: err.message,
                        response: err.response?.data,
                        config: err.config,
                    });
                }
            };
            // console.log(isLoggedIn); 
            getUser();
        }
    }, [token,isLoggedIn]);

    return {
        isLoggedIn: [isLoggedIn, setIsLoggedIn],
        isAdmin: [isAdmin, setIsAdmin],
    };
};

export default UserAPI;
