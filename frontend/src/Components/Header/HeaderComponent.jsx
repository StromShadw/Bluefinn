import { Layout, Dropdown, } from "antd";
import { IoSearch } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsQuestionLg } from "react-icons/bs";
import { useTheme } from "../../Context/ThemeContext";
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../Context/GlobalState";
import { PiMonitorFill } from "react-icons/pi";
import ToggleThemeButton from "../ToggleThemeButton";
// import Logo from "../../assets/Logo_Transparent1.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Cookies from "js-cookie";

const { Header } = Layout;

function HeaderComponent() {
  const { darkTheme, toggleTheme, collapsed, setCollapsed } = useTheme();
  const navigate = useNavigate();
  const { user, setIsAuthenticated, avatar } = useGlobalState();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/v1/users/logout",
        {},
        { withCredentials: true } // Send cookies with the request
      );
      localStorage.clear();
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      setIsAuthenticated(false); // Clear user state
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Profile menu items using 'items' prop (replacing deprecated 'children')
  const profileMenu = {
    items: [
      {
        key: '4',
        label: (
          <div className="flex items-center gap-1">
            <img src={avatar} alt="profile" width={25} />
            {user}
          </div>
        ),
        className: 'border-b',
      },
      {
        key: '1',
        icon: <CgProfile />,
        label: <NavLink to="/login">Profile Setting</NavLink>,
      },
      {
        key: '2',
        icon: <PiMonitorFill className="w-4 h-4" />,
        label: 'Background Jobs',
      },
      {
        key: '3',
        icon: <FaPowerOff />,
        label: <span onClick={handleLogout}>Log Out</span>,
      },
    ],
  };
  

  return (
    <Header
      className={`flex justify-between p-3 transition-colors duration-300 h-14 ${
        darkTheme ? "bg-white text-white" : "bg-[#FF914D] text-black"
      }`}
    >
      <div className="flex items-center">
        <Button
          type="text"
          className={`text-lg transition-all duration-100 rounded-full
          ${collapsed ? "" : "mt-3 mb-3"} 
          ${
            darkTheme
              ? "text-white bg-[#333] hover:!text-black hover:!bg-white border-dark"
              : "text-black hover:!bg-white bg-white border-[#3333]"
          }
          `}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>
      <div className="flex items-center space-x-3">
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        <button className="text-md rounded-full bg-white text-black p-2 hover:bg-gray-200 dark:bg-[#333] dark:text-white">
          <IoIosNotifications />
        </button>
        <button className="rounded-full bg-white text-black p-2 hover:bg-gray-200 dark:bg-[#333] dark:text-white">
          <IoSearch />
        </button>
        <button className="rounded-full bg-white text-black p-2 hover:bg-gray-200 dark:bg-[#333] dark:text-white">
          <BsQuestionLg />
        </button>
        {/* Dropdown for profile with updated 'menu' prop */}
        <Dropdown menu={profileMenu} trigger={["click"]}>
          <button className="rounded-full bg-white text-black hover:bg-gray-200 dark:bg-[#333] border-[#FF914D] dark:text-white w-8 h-8">
            <img
              src={avatar}
              alt="profile"
              className="rounded-full object-cover w-full h-full"
            />
          </button>
        </Dropdown>
      </div>
      {/* <div className="flex items-center space-x-3">
        <img src={`${darkTheme? darkLogo :Logo}`} alt="Logo" width={100} />
      </div>     */}
    </Header>
  );
}

export default HeaderComponent;
