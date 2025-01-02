import { Layout, Dropdown, Menu } from "antd";
import { IoAppsSharp, IoSearch, IoSettingsSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaPowerOff, FaBinoculars, FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsQuestionLg } from "react-icons/bs";
import { useTheme } from "../../Context/ThemeContext";
import { NavLink } from "react-router-dom";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { useGlobalContext } from "../../Context/GlobalState";
import { PiMonitorFill } from "react-icons/pi";
import ToggleThemeButton from "../ToggleThemeButton";
import profile from "../../assets/a-1.png";
import sideLogo from "../../assets/sidelogo.png";  

const { Header } = Layout;

function HeaderComponent() {
  const { darkTheme, toggleTheme } = useTheme();
  const { user } = useGlobalContext();

  // Profile menu items
  const profileMenu = (
    <Menu>
      <Menu.Item key="4" className="border-b">
        <div className="flex items-center gap-1">
        <img src={profile} alt="profile" width={25}/>
        {user? user.name :"User Name"}
        </div>
      </Menu.Item>
      <Menu.Item key="1" icon={<CgProfile />}>
        <NavLink to="/login">Profile Setting</NavLink>
      </Menu.Item>
      <Menu.Item key="2" icon={<PiMonitorFill className="w-4 h-4" />}>
        Background Jobs
      </Menu.Item>
      <Menu.Item key="3" icon={<FaPowerOff />}>
        Log Out
      </Menu.Item>
    </Menu>
  );
  const appMenu = (
    <Menu>
      <Menu.Item key="4" icon={<IoSettingsSharp />}>
        <NavLink to="/login">App Settings</NavLink>
      </Menu.Item>
      <Menu.Item key="1" icon={<FaBinoculars />}>
        <NavLink to="/login">App Preview</NavLink>
      </Menu.Item>
      <Menu.Item key="2" icon={<FaHome />}>
        <NavLink to="/login">Setup Home</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to="/login">Site Administration</NavLink>
      </Menu.Item>
      <Menu.Item key="3" icon={<RiCheckboxCircleFill className="w-4 h-4" />}>
        <NavLink className="font-bold" to="/login">
          BC in the cloud
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header
      className={`flex justify-end p-3 transition-colors duration-300 h-14 ${
        darkTheme ? "bg-black text-white" : "bg-[#8C52FF] text-black"
      }`}
    >
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
          <button className="rounded-full bg-white text-black p-1 hover:bg-gray-200 dark:bg-[#333] dark:text-white">
            {/* <CgProfile /> */}
            <img src={sideLogo} alt="profile" width={20}/>
          </button>
        </Dropdown>
      </div>
    </Header>
  );
}

export default HeaderComponent;
