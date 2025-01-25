import { Layout } from "antd";
import MenuList from "./MenuList";
import { useTheme } from "../../Context/ThemeContext";
import Logo from "../../assets/Logo_Transparent1.png"; // Or use your logo
// import Logo1 from "../../assets/lightLogo.png"; // Use a separate logo if needed for dark mode
// import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons"; // For sidebar collapsible button

const { Sider } = Layout;

function SiderComponent() {
  const { darkTheme, collapsed, setCollapsed } = useTheme();

  return (
    <Sider
      className={`sidebar transition-all duration-100 ${darkTheme ? "bg-[#FF914D] text-white" : "bg-[#8C52FF] text-black"}`}  // Dark mode styling for sidebar
      collapsed={collapsed}
      collapsible
      trigger={null}
      breakpoint="lg"
      collapsedWidth="80"
      onBreakpoint={(broken) => setCollapsed(broken)}
      style={{ siderBg:'black' }}
    >
      <div
        className={`flex items-center justify-center p-1 border-b ${darkTheme ? "bg-[#8C52FF]" : "bg-[#FF914D]"} ${collapsed ? "h-[56px]" : "h-[56px]"}`}
      >
        <img src={Logo} alt="logo" width={100} />
      </div>
      <MenuList collapsed={collapsed} />
    </Sider>
  );
}

export default SiderComponent;
