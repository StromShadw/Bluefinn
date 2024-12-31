import { Layout, Dropdown, Menu } from "antd";
import { IoAppsSharp, IoSearch, IoSettingsSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaPowerOff, FaBinoculars, FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsQuestionLg } from "react-icons/bs";
import { useTheme } from "../../Context/ThemeContext";
import ToggleThemeButton from "../ToggleThemeButton";
import sideLogo from "../../assets/sidelogo.png";
import { NavLink } from "react-router-dom";
import { RiCheckboxCircleFill } from "react-icons/ri";
// import { useGlobalContext } from "../../Context/GlobalState";
import { PiMonitorFill } from "react-icons/pi";

const { Header } = Layout;

function HeaderComponent() {
  const { darkTheme, toggleTheme } = useTheme();
  // const {  } = useGlobalContext();

  // Profile menu items
  const profileMenu = (
    <Menu>
      <Menu.Item key="4">John Doe</Menu.Item>
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
      className={`flex justify-between p-3 transition-colors duration-300 h-14 ${
        darkTheme ? "bg-[#001F54] text-white" : "bg-[#004293] text-black"
      }`}
    >
      <div className="flex items-center space-x-2">
        <img src={sideLogo} alt="BC in the cloud" className="h-8" />
        <span className="font-semibold text-lg text-white">
          BC in the cloud
        </span>
        <Dropdown overlay={appMenu} trigger={["click"]}>
          <button className="flex items-center space-x-2">
            <span className="text-xl text-white">
              <IoAppsSharp />
            </span>
          </button>
        </Dropdown>
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
          <button className="rounded-full bg-white text-black p-2 hover:bg-gray-200 dark:bg-[#333] dark:text-white">
            <CgProfile />
          </button>
        </Dropdown>
      </div>
    </Header>
  );
}

export default HeaderComponent;
