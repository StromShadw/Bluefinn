import logo from "../../assets/logo.jpg";
import grayLogo from "../../assets/gray-logo.jpg";
import { useTheme } from '../../Context/ThemeContext';

const Logo = () => {
  const { darkTheme,collapsed} = useTheme();
  return (
    <div
      className={`flex items-center justify-center transition-all ease-in-out duration-300 h-15 overflow-hidden cursor-pointer
        ${collapsed ? "w-0" : "w-auto"}`}
    >
      {!collapsed && (
        <img
          className={`h-auto w-15 transition-all ease-in-out duration-300 ${
            darkTheme ? "" : "bg-white rounded-sm"
          }`}
          src={`${darkTheme ? grayLogo : logo}`}
          alt="Logo"
        />
      )}
    </div>
  );
};

export default Logo;
