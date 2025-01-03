import logo from "../../assets/Logo_Transparent.png";
// import grayLogo from "../../assets/gray-logo.jpg";
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
          className={`h-auto  transition-all ease-in-out duration-300`}
          src={logo}
          alt="Logo"
        />
      )}
    </div>
  );
};

export default Logo;
