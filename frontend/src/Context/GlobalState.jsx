import { createContext, useContext, useState, useEffect } from "react";
import UserAPI from "../api/UserAPI";
// import Cookies from "js-cookie";
// import axios from "axios";

export const GlobalStateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [avatar, setAvatar] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  );
  const [token, setToken] = useState(localStorage.getItem("accessToken") || null);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

  useEffect(() => {
    // If the token doesn't exist, try to refresh it
    const firstLogin = localStorage.getItem("accessToken");
    console.log("First login cookie:", firstLogin);
    if (firstLogin) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  const value = {
    user,
    setUser,
    token: [token, setToken],
    userAPI: UserAPI(token),
    isAuthenticated,
    setIsAuthenticated,
    avatar,
    setAvatar,
    loading,
    setLoading,
    error,
    setError,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// import { createContext, useContext, useState } from "react";

// // Create the context
// const GlobalStateContext = createContext();

// // Custom hook to use the global context
// export const useGlobalState = () => useContext(GlobalStateContext);

// // Provider component
// export const GlobalStateProvider = ({ children }) => {
//   const [loading, setLoading] = useState(false);
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [avatar, setAvatar] = useState("https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png");

//   const value = {
//     loading,
//     setLoading,
//     user,
//     setUser,
//     error,
//     setError,
//     isAuthenticated,
//     setIsAuthenticated,
//     avatar,
//     setAvatar,
//   };

//   return (
//     <GlobalStateContext.Provider value={value}>
//       {children}
//     </GlobalStateContext.Provider>
//   );
// };
