import logo from "../../assets/logo.png";
import { useTheme } from '../../Context/ThemeContext';

const Logo = () => {
  const { darkTheme,collapsed} = useTheme();
  return (
    <div
      className={`flex items-center justify-center transition-all ease-in-out duration-300 h-15 overflow-hidden cursor-pointer ml-9 
        ${collapsed ? "w-0" : "w-auto"}`}
    >
      {!collapsed && (
        <img
          className={`h-5 w-52 transition-all ease-in-out duration-300 ${
            darkTheme ? "" : "bg-white rounded-sm"
          }`}
          src={logo}
          alt="Logo"
        />
      )}
    </div>
  );
};

export default Logo;
