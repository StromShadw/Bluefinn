import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useTheme } from "../Context/ThemeContext";

const ToggleThemeButton = () => {
  const { darkTheme, toggleTheme } = useTheme()
  return (
    <div className="toggle-theme-btn">
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-full transition duration-200 ease-in-out mt-4 dark:bg-[#333] ${
          darkTheme
            ? " text-white hover:bg-gray-300"
            : "text-black  bg-white"
        }`}
      >
        {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </button>
    </div>
  );
};

export default ToggleThemeButton;
