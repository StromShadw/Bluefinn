import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { FaHome } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import { SiAwsorganizations } from "react-icons/si";
import { IoIosSettings } from "react-icons/io";
import { GiBlackBook, GiDatabase } from "react-icons/gi";
import { FaExclamationTriangle, FaChartPie } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";
import { BsLightningFill } from "react-icons/bs";
import { AiFillDashboard } from "react-icons/ai";
import { TiPlus } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoFile } from "react-icons/go";
import { HomeOutlined } from "@ant-design/icons";
import {
  TbSquareRoundedLetterVFilled,
  TbSquareRoundedLetterSFilled,
  TbSquareRoundedLetterAFilled,
  TbSquareRoundedLetterWFilled,
  TbSquareRoundedLetterMFilled,
  TbSquareRoundedLetterDFilled,
  TbSquareRoundedLetterBFilled,
  TbSquareRoundedLetterTFilled,
} from "react-icons/tb";
import { useTheme } from "../../Context/ThemeContext";

const MenuList = () => {
  const { darkTheme } = useTheme();
  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      className="menu-bar overflow-y-auto overflow-x-hidden max-h-[calc(100vh-64px)] scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-primary-100"
      mode="inline"
    >
      {/* Admin Home Section */}
      <Menu.SubMenu
        key="admin-home"
        icon={<FaHome />}
        title={<NavLink to="/admin-home">Admin Home</NavLink>}
      >
        <Menu.Item key="action-items">Action Items</Menu.Item>
        <Menu.Item key="bcic-support-portal">BCIC Support Portal</Menu.Item>
        <Menu.Item key="calendar">
          <NavLink to="/calendar">Calendar</NavLink>
        </Menu.Item>
        <Menu.Item key="communication-log">Communication Log</Menu.Item>
        <Menu.Item key="manage-users">Manage Users</Menu.Item>
        <Menu.Item key="pto">RTO</Menu.Item>
        <Menu.SubMenu key="settings" title="Settings">
          <Menu.SubMenu key="import" title="Import" className="">
            <Menu.Item key="locations">Locations</Menu.Item>
            <Menu.Item key="business-entities">Business Entities</Menu.Item>
            <Menu.Item key="employees">Employees</Menu.Item>
            <Menu.Item key="vendors">Vendors</Menu.Item>
            <Menu.Item key="clients">Clients</Menu.Item>
            <Menu.Item key="applications">Applications</Menu.Item>
            <Menu.Item key="hardware">Hardware</Menu.Item>
            <Menu.Item key="databases">Databases</Menu.Item>
            <Menu.Item key="equipment">Equipment</Menu.Item>
            <Menu.Item key="records">Records</Menu.Item>
            <Menu.Item key="teams">Teams</Menu.Item>
            <Menu.Item key="processes">Processes</Menu.Item>
            <Menu.Item key="process-dependencies">
              Process Dependencies
            </Menu.Item>
            <Menu.Item key="bias">BIAS</Menu.Item>
            <Menu.Item key="plans">Plans</Menu.Item>
            <Menu.Item key="plan-dependencies">Plan Dependencies</Menu.Item>
            <Menu.Item key="tasks">Tasks</Menu.Item>
            <Menu.Item key="approval-groups">Approval Groups</Menu.Item>
            <Menu.Item key="approvers">Approvers</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="action-item-library">Action Item Library</Menu.Item>
          <Menu.Item key="exercise-objective-library">
            Exercise Objective Library
          </Menu.Item>
          <Menu.Item key="exercise-types">Exercise Types</Menu.Item>
          <Menu.Item key="incident-types">Incident Types</Menu.Item>
          <Menu.Item key="incident-assessment-question-library">
            Incident Assessment Question Library
          </Menu.Item>
          <Menu.Item key="location-types">Location Types</Menu.Item>
          <Menu.Item key="task-2">Risk Threat Library</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>

      {/* Other Submenus */}
      <Menu.SubMenu
        key="organization"
        icon={<SiAwsorganizations />}
        title={
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold hover:text-primaryDark" : ""
            }
            to="/organization"
          >
            organization
          </NavLink>
        }
      >
        <Menu.Item key="buisness-entities">
          <NavLink to="/business-entities" is>
            Business Entities
          </NavLink>
        </Menu.Item>
        <Menu.Item key="employees">
          <NavLink to="/employees">Employees</NavLink>
        </Menu.Item>
        <Menu.Item key="locations">
          <NavLink to="/locations">Locations</NavLink>
        </Menu.Item>
        <Menu.Item key="location-map">
          <NavLink to="/location-map">Location Map</NavLink>
        </Menu.Item>
        <Menu.Item key="location-type">
          <NavLink to="/location-type">Location Type</NavLink>
        </Menu.Item>
        <Menu.Item key="training-awareness">
          <NavLink to="/training-awareness">Training Awareness</NavLink>
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu key="/resources" icon={<GoPersonFill />} title="Resources">
        <Menu.SubMenu key="/client" title="Client">
          {/* Add NavLink to sub-menu items if needed */}
        </Menu.SubMenu>

        <Menu.Item key="bcm-seats-requirment">
          <NavLink to="/bcm-seats-requirment">BCM Seats Requirement</NavLink>
        </Menu.Item>

        <Menu.Item key="equipment">
          <NavLink to="/equipment">Equipment</NavLink>
        </Menu.Item>

        <Menu.SubMenu key="/it" title="IT">
          {/* Add NavLink to sub-menu items if needed */}
        </Menu.SubMenu>

        <Menu.Item key="supplies">
          <NavLink to="/supplies">Supplies</NavLink>
        </Menu.Item>

        <Menu.SubMenu key="/vendors" title="Vendors">
          {/* Add NavLink to sub-menu items if needed */}
        </Menu.SubMenu>

        <Menu.Item key="vital-records">
          <NavLink to="/vital-records">Vital Records</NavLink>
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu key="bia" icon={<IoIosSettings />} title="BIA">
        BIA
      </Menu.SubMenu>

      <Menu.SubMenu key="plans" icon={<GiBlackBook />} title="Plans">
        Plans
      </Menu.SubMenu>

      <Menu.SubMenu key="risks" icon={<FaExclamationTriangle />} title="Risks">
        Risks
      </Menu.SubMenu>

      <Menu.SubMenu
        key="exercises"
        icon={<ImCheckboxChecked />}
        title="Exercises"
      >
        Exercises
      </Menu.SubMenu>

      <Menu.SubMenu
        key="incidents"
        icon={<BsLightningFill />}
        title="Incidents"
      >
        Incidents
      </Menu.SubMenu>

      <Menu.SubMenu key="buisness" icon={<HomeOutlined />} title="Business">
        Business
      </Menu.SubMenu>

      <Menu.SubMenu key="technology" icon={<GiDatabase />} title="Technology">
        Technology
      </Menu.SubMenu>

      <Menu.SubMenu
        key="dashboard"
        icon={<AiFillDashboard />}
        title="Dashboard"
      >
        Dashboard
      </Menu.SubMenu>

      <Menu.SubMenu key="reports" icon={<FaChartPie />} title="Reports">
        Reports
      </Menu.SubMenu>

      {/* Custom Menu Items */}
      <Menu.Item
        key="vendor-dependencies"
        icon={<TbSquareRoundedLetterVFilled />}
      >
        Vendor Dependencies
      </Menu.Item>
      <Menu.Item
        key="staff-dependencies"
        icon={<TbSquareRoundedLetterSFilled />}
      >
        Staff Dependencies
      </Menu.Item>
      <Menu.Item
        key="activity-vital-record"
        icon={<TbSquareRoundedLetterAFilled />}
      >
        Activity Vital Record
      </Menu.Item>
      <Menu.Item key="wfh" icon={<TbSquareRoundedLetterWFilled />}>
        WFH
      </Menu.Item>
      <Menu.Item
        key="department-dependencies"
        icon={<TbSquareRoundedLetterDFilled />}
      >
        Department Dependencies
      </Menu.Item>
      <Menu.Item key="mtpd" icon={<TbSquareRoundedLetterMFilled />}>
        MTPD
      </Menu.Item>

      <Menu.SubMenu
        key="bia-dependencies"
        icon={<TbSquareRoundedLetterBFilled />}
        title="BIA Dependencies"
      >
        BIA Dependencies
      </Menu.SubMenu>

      <Menu.SubMenu
        key="bia-equipment-dependencies"
        icon={<TbSquareRoundedLetterBFilled />}
        title="BIA Equipment Dependencies"
      >
        BIA Equipment Dependencies
      </Menu.SubMenu>

      <Menu.Item
        key="tests"
        icon={<TbSquareRoundedLetterTFilled />}
        title="Tests"
      >
        Tests
      </Menu.Item>

      <Menu.Item key="new-tab" icon={<TiPlus />} title="New Tab">
        New Tab
      </Menu.Item>

      {/* Recent Items Section */}
      <div className="recent-item px-2 py-1">
        <Menu.Item key="recent-item" icon={<GoFile />}>
          Recent Item
        </Menu.Item>
      </div>
      <div className="recent-item px-2 py-1">
        <Menu.SubMenu
          key="my-recycle-bin"
          icon={<RiDeleteBin6Line />}
          title="My Recycle Bin"
        >
          My Recycle Bin
        </Menu.SubMenu>
      </div>
    </Menu>
  );
};

export default MenuList;
