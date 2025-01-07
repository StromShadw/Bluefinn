// import { NavLink } from "react-router-dom";
import { Layout } from "antd";
import MenuList from "./MenuList";
import { useTheme } from "../../Context/ThemeContext";
import Logo from "../../assets/Logo_Transparent1.png";
import Logo1 from "../../assets/lightLogo.png";
// import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Sider } = Layout;

function SiderComponent() {
  const { darkTheme, collapsed, setCollapsed } = useTheme();

  return (
    <Sider
      className={`sidebar transition-all duration-100
        ${darkTheme ? "text-white" : "bg-transparent text-black"}`}
      collapsed={collapsed}
      collapsible
      trigger={null}
      breakpoint="lg"
      collapsedWidth="80"
      onBreakpoint={(broken) => setCollapsed(broken)}
    >
      <div className={`flex items-center justify-center p-1 border-b ${darkTheme ? "bg-white" : "bg-[#FF914D]"} ${collapsed ? "h-[56px]" : "h-[56px]"}`}>
        <img src={Logo} alt="logo" width={100} />
        {/* <Logo/> */}
      </div>
      {/* <div
      onClick={() => setCollapsed(!collapsed)}
        className={`flex items-center justify-center
          ${collapsed ? "p-3" : ""}
          ${darkTheme ? "bg-black" : "bg-[#8C52FF]"}`}
      >
        <NavLink to="/"><Logo collapsed={collapsed} /></NavLink>
        <Button
          type="text"
          className={`text-lg transition-all duration-100 bg-white
          ${collapsed ? "" : "mt-3 mb-3"} 
          ${darkTheme ? "text-white hover:!text-white bg-[#333]" : "text-black hover:!bg-white"}
          `}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
        
      </div> */}
      <MenuList collapsed={collapsed} />
    </Sider>
  );
}

export default SiderComponent;
