import { Menu } from "antd";
import { useTheme } from "../../Context/ThemeContext";
import menuItems from './MenuListData.jsx';
import './MenuList.css'

const MenuList = () => {
  const { darkTheme } = useTheme();

  return (
    <Menu
      className={`menu-bar overflow-y-auto overflow-x-hidden max-h-[calc(99.8vh-54px)] scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-primary-100 
        ${darkTheme ? "bg-[#FF914D] text-white" : "bg-[#8C52FF] text-black"}`}  // Dark mode background and text color
      mode="inline"
      items={menuItems}
    />
  );
};

export default MenuList;
