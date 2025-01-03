# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





//sample code 
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import {
  FaHome, FaExclamationTriangle, FaChartPie,
} from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import { SiAwsorganizations } from "react-icons/si";
import { IoIosSettings } from "react-icons/io";
import { GiBlackBook, GiDatabase } from "react-icons/gi";
import { ImCheckboxChecked } from "react-icons/im";
import { BsLightningFill } from "react-icons/bs";
import { AiFillDashboard } from "react-icons/ai";
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

  const menuItems = [
    {
      key: "admin-home",
      icon: <FaHome />,
      label: <NavLink to="/admin-home">Admin Home</NavLink>,
      children: [
        { key: "action-items", label: "Action Items" },
        { key: "bcic-support-portal", label: "BCIC Support Portal" },
        { key: "calendar", label: <NavLink to="/calendar">Calendar</NavLink> },
        { key: "communication-log", label: "Communication Log" },
        { key: "manage-users", label: "Manage Users" },
        { key: "pto", label: "RTO" },
        {
          key: "settings",
          label: "Settings",
          children: [
            {
              key: "import",
              label: "Import",
              children: [
                { key: "locations", label: "Locations" },
                { key: "business-entities", label: "Business Entities" },
                { key: "employees", label: "Employees" },
                { key: "vendors", label: "Vendors" },
                { key: "clients", label: "Clients" },
                { key: "applications", label: "Applications" },
                { key: "hardware", label: "Hardware" },
                { key: "databases", label: "Databases" },
                { key: "equipment", label: "Equipment" },
                { key: "records", label: "Records" },
                { key: "teams", label: "Teams" },
                { key: "processes", label: "Processes" },
                { key: "process-dependencies", label: "Process Dependencies" },
                { key: "bias", label: "BIAS" },
                { key: "plans", label: "Plans" },
                { key: "plan-dependencies", label: "Plan Dependencies" },
                { key: "tasks", label: "Tasks" },
                { key: "approval-groups", label: "Approval Groups" },
                { key: "approvers", label: "Approvers" },
              ],
            },
            { key: "action-item-library", label: "Action Item Library" },
            { key: "exercise-objective-library", label: "Exercise Objective Library" },
            { key: "exercise-types", label: "Exercise Types" },
            { key: "incident-types", label: "Incident Types" },
            { key: "incident-assessment-question-library", label: "Incident Assessment Question Library" },
            { key: "location-types", label: "Location Types" },
            { key: "task-2", label: "Risk Threat Library" },
          ],
        },
      ],
    },
    {
      key: "organization",
      icon: <SiAwsorganizations />,
      label: <NavLink to="/organization">Organization</NavLink>,
      children: [
        { key: "business-entities", label: <NavLink to="/business-entities">Business Entities</NavLink> },
        { key: "employees", label: <NavLink to="/employees">Employees</NavLink> },
        { key: "locations", label: <NavLink to="/locations">Locations</NavLink> },
        { key: "location-map", label: <NavLink to="/location-map">Location Map</NavLink> },
        { key: "location-type", label: <NavLink to="/location-type">Location Type</NavLink> },
        { key: "training-awareness", label: <NavLink to="/training-awareness">Training Awareness</NavLink> },
      ],
    },
    // Add more menu items as needed
  ];

  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      className={`menu-bar overflow-y-auto overflow-x-hidden max-h-[calc(100vh-54px)] scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-primary-100 ${
        darkTheme ? "bg-[#FF914D]" : "bg-[#808080]"
      }`}
      mode="inline"
      items={menuItems}
    />
  );
};

export default MenuList;
