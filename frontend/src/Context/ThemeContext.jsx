import { createContext, useState, useContext, useEffect } from 'react';

// Create the ThemeContext
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true); // Dark theme state
  const [collapsed, setCollapsed] = useState(false); // Collapsed state for sidebar

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  // Sync the dark mode with the HTML class list
  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme, collapsed, setCollapsed }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
