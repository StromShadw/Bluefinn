import { Layout, Dropdown, Menu } from "antd";
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
import profile from "../../assets/a-1.png";
import Logo from "../../assets/Logo_Transparent1.png";

import { Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

function HeaderComponent() {
  const { darkTheme, toggleTheme, collapsed, setCollapsed } = useTheme();
  const { user, setIsAuthenticated, avatar } = useGlobalState();

  console.log(user);
  

  // Profile menu items
  const profileMenu = (
    <Menu>
      <Menu.Item key="4" className="border-b">
        <div className="flex items-center gap-1">
          <img src={avatar} alt="profile" width={25} />
          {user}
        </div>
      </Menu.Item>
      <Menu.Item key="1" icon={<CgProfile />}>
        <NavLink to="/login">Profile Setting</NavLink>
      </Menu.Item>
      <Menu.Item key="2" icon={<PiMonitorFill className="w-4 h-4" />}>
        Background Jobs
      </Menu.Item>
      <Menu.Item
        key="3"
        icon={<FaPowerOff />}
        onClick={() => setIsAuthenticated(false)}
      >
        Log Out
      </Menu.Item>
    </Menu>
  );
  // const appMenu = (
  //   <Menu>
  //     <Menu.Item key="4" icon={<IoSettingsSharp />}>
  //       <NavLink to="/login">App Settings</NavLink>
  //     </Menu.Item>
  //     <Menu.Item key="1" icon={<FaBinoculars />}>
  //       <NavLink to="/login">App Preview</NavLink>
  //     </Menu.Item>
  //     <Menu.Item key="2" icon={<FaHome />}>
  //       <NavLink to="/login">Setup Home</NavLink>
  //     </Menu.Item>
  //     <Menu.Item key="3">
  //       <NavLink to="/login">Site Administration</NavLink>
  //     </Menu.Item>
  //     <Menu.Item key="3" icon={<RiCheckboxCircleFill className="w-4 h-4" />}>
  //       <NavLink className="font-bold" to="/login">
  //         BC in the cloud
  //       </NavLink>
  //     </Menu.Item>
  //   </Menu>
  // );

  return (
    <Header
      className={`flex justify-between p-3 transition-colors duration-300 h-14 ${
        darkTheme ? "bg-white text-white" : "bg-[#8C52FF] text-black"
      }`}
    >
      <div className="flex items-center">
        <Button
          type="text"
          className={`text-lg transition-all duration-100 rounded-2xl
          ${collapsed ? "" : "mt-3 mb-3"} 
          ${
            darkTheme
              ? "text-white bg-[#333] hover:!text-black hover:!bg-white"
              : "text-black hover:!bg-white bg-white"
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
        {/* Dropdown for profile */}
        <Dropdown overlay={profileMenu} trigger={["click"]}>
          <button className="rounded-full bg-white text-black hover:bg-gray-200 dark:bg-[#333] dark:text-white w-8 h-8">
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
