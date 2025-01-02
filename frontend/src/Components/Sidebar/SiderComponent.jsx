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
        ${darkTheme ? "bg-[#0988ff] text-white" : "bg-[#8C52FF] text-black"}`}
      collapsed={collapsed}
      collapsible
      trigger={null}
      breakpoint="lg"
      collapsedWidth="80"
      onBreakpoint={(broken) => setCollapsed(broken)}
    >
      <div
      onClick={() => setCollapsed(!collapsed)}
        className={`flex items-center justify-center
          ${collapsed ? "p-3" : ""}
          ${darkTheme ? "bg-black" : "bg-[#8C52FF]"}`}
      >
        <NavLink to="/"><Logo collapsed={collapsed} /></NavLink>
        <Button
          type="text"
          className={`text-lg transition-all duration-100 ml-10 bg-black
          ${collapsed ? "mr-12" : ""} 
          ${darkTheme ? "text-white hover:!text-white" : "text-white hover:!text-black"}
          `}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>
      <MenuList collapsed={collapsed} />
    </Sider>
  );
}

export default SiderComponent;
