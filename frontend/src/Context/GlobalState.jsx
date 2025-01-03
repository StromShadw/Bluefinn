import { createContext, useContext, useState } from "react";

// Create the context
const GlobalStateContext = createContext();

// Custom hook to use the global context
export const useGlobalState = () => useContext(GlobalStateContext);

// Provider component
export const GlobalStateProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [avatar, setAvatar] = useState("https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png");

  const value = {
    loading,
    setLoading,
    user,
    setUser,
    error,
    setError,
    isAuthenticated,
    setIsAuthenticated,
    avatar,
    setAvatar,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};
