import { createContext, useContext, useState } from "react";

// Create the context
const GlobalContext = createContext();

// Custom hook to use the global context
export const useGlobalContext = () => useContext(GlobalContext);

// Provider component
export const GlobalProvider = ({ children }) => {
  // Define your global states here
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Values to be provided to children
  const value = {
    loading,
    setLoading,
    user,
    setUser,
    error,
    setError,
    // Add more state and functions as needed
  };

  return (
    <GlobalContext.Provider value={value}>
      {children} {/* This allows nested components to access the context */}
    </GlobalContext.Provider>
  )
};