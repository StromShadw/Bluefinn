import { Layout, Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import MenuList from "./MenuList";
import { useTheme } from "../../Context/ThemeContext";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;

function SiderComponent() {
  const { darkTheme, collapsed, setCollapsed } = useTheme();

  return (
    <Sider
      className={`sidebar transition-all duration-100
        ${darkTheme ? "bg-[#0988ff] text-white" : "bg-white text-black"}`}
      collapsed={collapsed}
      collapsible
      trigger={null}
      breakpoint="lg"
      collapsedWidth="80"
      onBreakpoint={(broken) => setCollapsed(broken)}
    >
      <div
      onClick={() => setCollapsed(!collapsed)}
        className={`flex items-center justify-center p-3
          ${darkTheme ? "bg-[#001529]" : "bg-[#004293]"}`}
      >
        <Button
          type="text"
          className={`text-lg transition-all duration-100 ml-4 
          ${collapsed ? "ml-9" : ""} 
          ${darkTheme ? "text-white hover:!text-white" : "text-white hover:!text-white"}
          hover:!bg-opacity-20`}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
        <NavLink to="/"><Logo collapsed={collapsed} /></NavLink>
      </div>
      <MenuList collapsed={collapsed} />
    </Sider>
  );
}

export default SiderComponent;
