import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { FaHome, FaExclamationTriangle, FaChartPie } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import { SiAwsorganizations } from "react-icons/si";
import { IoIosSettings } from "react-icons/io";
import { GiBlackBook, GiDatabase } from "react-icons/gi";
import { ImCheckboxChecked } from "react-icons/im";
import { BsLightningFill } from "react-icons/bs";
import { AiFillDashboard } from "react-icons/ai";
import { TiPlus } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoFile } from "react-icons/go";
import {
  TbSquareRoundedLetterVFilled,
  TbSquareRoundedLetterSFilled,
  TbSquareRoundedLetterAFilled,
  TbSquareRoundedLetterWFilled,
  TbSquareRoundedLetterMFilled,
  TbSquareRoundedLetterDFilled,
  TbSquareRoundedLetterBFilled,
  TbSquareRoundedLetterTFilled,
  TbCircleLetterBFilled,
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
            {
              key: "exercise-objective-library",
              label: "Exercise Objective Library",
            },
            { key: "exercise-types", label: "Exercise Types" },
            { key: "incident-types", label: "Incident Types" },
            {
              key: "incident-assessment-question-library",
              label: "Incident Assessment Question Library",
            },
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
        {
          key: "business-entities",
          label: <NavLink to="/business-entities">Business Entities</NavLink>,
        },
        {
          key: "employees",
          label: <NavLink to="/employees">Employees</NavLink>,
        },
        {
          key: "locations",
          label: <NavLink to="/locations">Locations</NavLink>,
        },
        {
          key: "location-map",
          label: <NavLink to="/location-map">Location Map</NavLink>,
        },
        {
          key: "location-type",
          label: <NavLink to="/location-type">Location Type</NavLink>,
        },
        {
          key: "training-awareness",
          label: <NavLink to="/training-awareness">Training Awareness</NavLink>,
        },
      ],
    },
    {
      key: "resources",
      icon: <GoPersonFill />,
      label: "Resources",
      children: [
        {
          key: "client",
          label: "Client",
        },
        {
          key: "bcm-seats-requirement",
          label: (
            <NavLink to="/bcm-seats-requirment">BCM Seats Requirement</NavLink>
          ),
        },
        {
          key: "equipment",
          label: <NavLink to="/equipment">Equipment</NavLink>,
        },
        {
          key: "it",
          label: "IT",
        },
        { key: "supplies", label: <NavLink to="/supplies">Supplies</NavLink> },
        {
          key: "vendors",
          label: "Vendors",
        },
        {
          key: "vital-records",
          label: <NavLink to="/vital-records">Vital Records</NavLink>,
        },
      ],
    },
    {
      key: "bia",
      icon: <IoIosSettings />,
      label: "BIA",
      children: [
        {
          key: "business-entities",
          label: <NavLink to="/business-entities">Business Entities</NavLink>,
        },
        {
          key: "employees",
          label: <NavLink to="/employees">Employees</NavLink>,
        },
        {
          key: "locations",
          label: <NavLink to="/locations">Locations</NavLink>,
        },
        {
          key: "location-map",
          label: <NavLink to="/location-map">Location Map</NavLink>,
        },
        {
          key: "location-type",
          label: <NavLink to="/location-type">Location Type</NavLink>,
        },
        {
          key: "training-awareness",
          label: <NavLink to="/training-awareness">Training Awareness</NavLink>,
        },
      ],
    },
    {
      key: "plans",
      icon: <GiBlackBook />,
      label: "Plans",
      children: [
        {
          key: "business-entities",
          label: <NavLink to="/business-entities">Business Entities</NavLink>,
        },
        {
          key: "employees",
          label: <NavLink to="/employees">Employees</NavLink>,
        },
        {
          key: "locations",
          label: <NavLink to="/locations">Locations</NavLink>,
        },
        {
          key: "location-map",
          label: <NavLink to="/location-map">Location Map</NavLink>,
        },
        {
          key: "location-type",
          label: <NavLink to="/location-type">Location Type</NavLink>,
        },
        {
          key: "training-awareness",
          label: <NavLink to="/training-awareness">Training Awareness</NavLink>,
        },
      ],
    },
    {
      key: "risks",
      icon: <FaExclamationTriangle />,
      label: "Risks",
      children: [
        {
          key: "business-entities",
          label: <NavLink to="/business-entities">Business Entities</NavLink>,
        },
        {
          key: "employees",
          label: <NavLink to="/employees">Employees</NavLink>,
        },
        {
          key: "locations",
          label: <NavLink to="/locations">Locations</NavLink>,
        },
        {
          key: "location-map",
          label: <NavLink to="/location-map">Location Map</NavLink>,
        },
        {
          key: "location-type",
          label: <NavLink to="/location-type">Location Type</NavLink>,
        },
        {
          key: "training-awareness",
          label: <NavLink to="/training-awareness">Training Awareness</NavLink>,
        },
      ],
    },
    {
      key: "exercises",
      icon: <ImCheckboxChecked />,
      label: "Exercises",
      children: [
        {
          key: "business-entities",
          label: <NavLink to="/business-entities">Business Entities</NavLink>,
        },
        {
          key: "employees",
          label: <NavLink to="/employees">Employees</NavLink>,
        },
        {
          key: "locations",
          label: <NavLink to="/locations">Locations</NavLink>,
        },
        {
          key: "location-map",
          label: <NavLink to="/location-map">Location Map</NavLink>,
        },
        {
          key: "location-type",
          label: <NavLink to="/location-type">Location Type</NavLink>,
        },
        {
          key: "training-awareness",
          label: <NavLink to="/training-awareness">Training Awareness</NavLink>,
        },
      ],
    },
    {
      key: "incidents",
      icon: <BsLightningFill />,
      label: "Incidents",
      children: [
        {
          key: "business-entities",
          label: <NavLink to="/business-entities">Business Entities</NavLink>,
        },
        {
          key: "employees",
          label: <NavLink to="/employees">Employees</NavLink>,
        },
        {
          key: "locations",
          label: <NavLink to="/locations">Locations</NavLink>,
        },
        {
          key: "location-map",
          label: <NavLink to="/location-map">Location Map</NavLink>,
        },
        {
          key: "location-type",
          label: <NavLink to="/location-type">Location Type</NavLink>,
        },
        {
          key: "training-awareness",
          label: <NavLink to="/training-awareness">Training Awareness</NavLink>,
        },
      ],
    },
    {
      key: "business",
      icon: <AiFillDashboard />,
      label: "Business",
      children: [
        {
          key: "business-entities",
          label: <NavLink to="/business-entities">Business Entities</NavLink>,
        },
        {
          key: "employees",
          label: <NavLink to="/employees">Employees</NavLink>,
        },
        {
          key: "locations",
          label: <NavLink to="/locations">Locations</NavLink>,
        },
        {
          key: "location-map",
          label: <NavLink to="/location-map">Location Map</NavLink>,
        },
        {
          key: "location-type",
          label: <NavLink to="/location-type">Location Type</NavLink>,
        },
        {
          key: "training-awareness",
          label: <NavLink to="/training-awareness">Training Awareness</NavLink>,
        },
      ],
    },
    {
      key: "technology",
      icon: <GiDatabase />,
      label: "Technology",
      children: [
        {
          key: "business-entities",
          label: <NavLink to="/business-entities">Business Entities</NavLink>,
        },
        {
          key: "employees",
          label: <NavLink to="/employees">Employees</NavLink>,
        },
        {
          key: "locations",
          label: <NavLink to="/locations">Locations</NavLink>,
        },
        {
          key: "location-map",
          label: <NavLink to="/location-map">Location Map</NavLink>,
        },
        {
          key: "location-type",
          label: <NavLink to="/location-type">Location Type</NavLink>,
        },
        {
          key: "training-awareness",
          label: <NavLink to="/training-awareness">Training Awareness</NavLink>,
        },
      ],
    },
    {
      key: "dashboard",
      icon: <AiFillDashboard />,
      label: "Dashboard",
      children: [
        {
          key: "business-entities",
          label: <NavLink to="/business-entities">Business Entities</NavLink>,
        },
        {
          key: "employees",
          label: <NavLink to="/employees">Employees</NavLink>,
        },
        {
          key: "locations",
          label: <NavLink to="/locations">Locations</NavLink>,
        },
        {
          key: "location-map",
          label: <NavLink to="/location-map">Location Map</NavLink>,
        },
        {
          key: "location-type",
          label: <NavLink to="/location-type">Location Type</NavLink>,
        },
        {
          key: "training-awareness",
          label: <NavLink to="/training-awareness">Training Awareness</NavLink>,
        },
      ],
    },
    {
      key: "reports",
      icon: <FaChartPie />,
      label: "Reports",
      children: [
        {
          key: "business-entities",
          label: <NavLink to="/business-entities">Business Entities</NavLink>,
        },
        {
          key: "employees",
          label: <NavLink to="/employees">Employees</NavLink>,
        },
        {
          key: "locations",
          label: <NavLink to="/locations">Locations</NavLink>,
        },
        {
          key: "location-map",
          label: <NavLink to="/location-map">Location Map</NavLink>,
        },
        {
          key: "location-type",
          label: <NavLink to="/location-type">Location Type</NavLink>,
        },
        {
          key: "training-awareness",
          label: <NavLink to="/training-awareness">Training Awareness</NavLink>,
        },
      ],
    },
    {
      key: "vendor-dependencies",
      icon: <TbSquareRoundedLetterVFilled />,
      label: "Vendor Dependencies",
    },
    {
      key: "staff-dependencies",
      icon: <TbSquareRoundedLetterSFilled />,
      label: "Staff Dependencies",
    },
    {
      key: "activity-vital-record",
      icon: <TbSquareRoundedLetterAFilled />,
      label: "Activity Vital Record",
    },
    { key: "wfh", icon: <TbSquareRoundedLetterWFilled />, label: "WFH" },
    {
      key: "department-dependencies",
      icon: <TbSquareRoundedLetterDFilled />,
      label: "Department Dependencies",
    },
    { key: "mtpd", 
      icon: <TbSquareRoundedLetterMFilled />, 
      label: "MTPD" 
    },
    { key: "BIA Dependencies", 
      icon: <TbCircleLetterBFilled />, 
      label: "BIA Dependencies" 
    },
    { key: "BIA Equipment Dependencys", 
      icon: <TbCircleLetterBFilled />, 
      label: "BIA Equipment Dependencys" 
    },
    { key: "New Tab", 
      icon: <TiPlus  />,
      className: "border-b-[1px] border-primary-200 !rounded-none",
      label: "New Tab" 
    },
    {
      key: "recent-item",
      icon: <GoFile />,
      label: "Recent Item",
      className: "border-b-[1px] border-primary-200 !rounded-none",
    },
    {
      key: "my-recycle-bin",
      icon: <RiDeleteBin6Line />,
      label: "My Recycle Bin",
    },
    {
      key: "my-theme  ",
      icon: <RiDeleteBin6Line />,
      label: "My Theme",
      className: "border-b-[1px] border-primary-200 !rounded-none",
    },
  ];

  return (
    <>
    <Menu
      theme={darkTheme ? "dark" : "light"}
      className={`menu-bar overflow-y-auto overflow-x-hidden max-h-[calc(100vh-54px)] scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-primary-100 ${
        darkTheme ? "bg-[#FF914D]" : "bg-[#808080]"
      }`}
      mode="inline"
      items={menuItems}
    />
    </>
  );
};

export default MenuList;
