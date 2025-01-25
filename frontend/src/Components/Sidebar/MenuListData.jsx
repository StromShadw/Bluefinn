import { NavLink } from "react-router-dom";
import { FaHome, FaExclamationTriangle, FaChartPie } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import { SiAwsorganizations } from "react-icons/si";
import { IoIosSettings } from "react-icons/io";
import { GiBlackBook, GiDatabase } from "react-icons/gi";
import { ImCheckboxChecked } from "react-icons/im";
import { BsLightningFill } from "react-icons/bs";
import { AiFillDashboard } from "react-icons/ai";
import { TiPlus } from "react-icons/ti";
import { RiDeleteBin6Line,RiImageEditLine  } from "react-icons/ri";
import { GoFile } from "react-icons/go";
import {
  TbSquareRoundedLetterVFilled,
  TbSquareRoundedLetterSFilled,
  TbSquareRoundedLetterAFilled,
  TbSquareRoundedLetterWFilled,
  TbSquareRoundedLetterMFilled,
  TbSquareRoundedLetterDFilled,
  TbCircleLetterBFilled,
} from "react-icons/tb";

const menuItems = [
  {
    key: "admin-home",
    icon: <FaHome />,
    label: (
      <NavLink
        to="/admin-home"
        // className={
        //   ({ isActive }) =>
        //     isActive
        //       ? "text-[#12ccec] font-bold" // Tailwind classes for active state
        //       : "text-black" // Tailwind classes for inactive state
        // }
      >
        Admin Home
      </NavLink>
    ),
    children: [
      { key: "action-items", label: "Action Items" },
      { key: "bcic-support-portal", label: "BCIC Support Portal" },
      { key: "calendar", label: <NavLink to="/calendar">Calendar</NavLink> },
      { key: "communication-log", label: "Communication Log" },
      { key: "manage-users", label: "Manage Users" },
      { key: "rto", label: "RTO" },
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
    icon: <NavLink to="/organization"><SiAwsorganizations /></NavLink>,
    label: <NavLink to="/organization">Organization</NavLink>,
    children: [
      {
        key: "business-entities1",
        label: <NavLink to="/business-entities">Business Entities</NavLink>,
      },
      {
        key: "employees1",
        label: <NavLink to="/employees">Employees</NavLink>,
      },
      {
        key: "locations1",
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
        key: "equipment1",
        label: <NavLink to="/equipment">Equipment</NavLink>,
      },
      {
        key: "it",
        label: "IT",
      },
      { key: "supplies", label: <NavLink to="/supplies">Supplies</NavLink> },
      {
        key: "vendors1",
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
        key: "approval-groups1",
        label: <NavLink to="/approval-groups">Approval Groups</NavLink>,
      },
      {
        key: "bia-dashboard",
        label: <NavLink to="/bia-dashboard">BIA Dashboard</NavLink>,
      },
      {
        key: "activities",
        label: <NavLink to="/activities">Activities</NavLink>,
      },
    ],
  },
  {
    key: "plans1",
    icon: <GiBlackBook />,
    label: "Plans",
    children: [
      {
        key: "approval-groups2",
        label: <NavLink to="/approval-groups">Approval Groups</NavLink>,
      },
      {
        key: "attachments",
        label: <NavLink to="/attachments">Attachments</NavLink>,
      },
      {
        key: "call-tree",
        label: <NavLink to="/call-tree">Call Trees</NavLink>,
      },
      {
        key: "plans2",
        label: <NavLink to="/plans">Plans</NavLink>,
      },
      {
        key: "sections",
        label: <NavLink to="/sections">Sections</NavLink>,
      },
      {
        key: "teams1",
        label: <NavLink to="/teams">Teams</NavLink>,
      },
    ],
  },
  {
    key: "risks",
    icon: <FaExclamationTriangle />,
    label: "Risks",
    children: [
      {
        key: "risk-assessments",
        label: <NavLink to="/risk-assessments">Risk Assessments</NavLink>,
      },
      {
        key: "risk-register",
        label: <NavLink to="/risk-register">Risk Register</NavLink>,
      },
      {
        key: "threat",
        label: <NavLink to="/threat">Threat</NavLink>,
      },
    ],
  },
  {
    key: "exercises",
    icon: <ImCheckboxChecked />,
    label: "Exercises",
    children: [
      {
        key: "exercises-issues",
        label: <NavLink to="/exercises-issues">Exercises Issues</NavLink>,
      },
    ],
  },
  {
    key: "incidents",
    icon: <BsLightningFill />,
    label: "Incidents",
    children: [
      {
        key: "active-incidents",
        label: <NavLink to="/active-incidents">Active Incidents</NavLink>,
      },
      {
        key: "incidents-map",
        label: <NavLink to="/incidents-map">Incidents Map</NavLink>,
      },
    ],
  },
  {
    key: "business",
    icon: <AiFillDashboard />,
    label: "Business",
    children: [
      {
        key: "action-items1",
        label: <NavLink to="/Action Items">action-items</NavLink>,
      },
      {
        key: "bia1",
        label: <NavLink to="/bia">BIA</NavLink>,
      },
      {
        key: "plans4",
        label: <NavLink to="/plans">Plans</NavLink>,
      },
      {
        key: "processes1",
        label: <NavLink to="/processes">Processes</NavLink>,
      },
    ],
  },
  {
    key: "technology",
    icon: <GiDatabase />,
    label: "Technology",
    children: [
      {
        key: "action-items2",
        label: <NavLink to="/action-items">Action Items</NavLink>,
      },
      {
        key: "applications1",
        label: <NavLink to="/applications">Applications</NavLink>,
      },
      {
        key: "databases1",
        label: <NavLink to="/databases">Databases</NavLink>,
      },
      {
        key: "hardware1",
        label: <NavLink to="/hardware">Hardware</NavLink>,
      },
      {
        key: "plans3",
        label: <NavLink to="/plans">Plans</NavLink>,
      },
    ],
  },
  {
    key: "dashboard",
    icon: <AiFillDashboard />,
    label: "Dashboard",
    children: [
      {
        key: "bia-dashboard1",
        label: <NavLink to="/bia-dashboard">BIA Dashboard</NavLink>,
      },
      {
        key: "disaster-recovery-dashboard1",
        label: (
          <NavLink to="/disaster-recovery-dashboard">
            Disaster Recovery Dashboard
          </NavLink>
        ),
      },
      {
        key: "incident-dashboard",
        label: <NavLink to="/incident-dashboard">Incident Dashboard</NavLink>,
      },
      {
        key: "plan-dashboard1",
        label: <NavLink to="/plan-dashboard">Plan Dashboard</NavLink>,
      },
      {
        key: "risk-dashboard1",
        label: <NavLink to="/risk-dashboard">Risk Dashboard</NavLink>,
      },
    ],
  },
  {
    key: "reports",
    icon: <FaChartPie />,
    label: "Reports",
    children: [
      {
        key: "new-reports",
        label: <NavLink to="/new-reports">New Reports</NavLink>,
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
  {
    key: "mtpd",
    icon: <TbSquareRoundedLetterMFilled />,
    label: "MTPD",
  },
  {
    key: "BIA Dependencies",
    icon: <TbCircleLetterBFilled />,
    label: "BIA Dependencies",
    children: [
      {
        key: "activity-department-dependencies",
        label: (
          <NavLink to="/activity-department-dependencies">
            Activity - Department Dependencies
          </NavLink>
        ),
      },
      {
        key: "bcm-seats",
        label: <NavLink to="/bcm-seats">BCM Seats</NavLink>,
      },
      {
        key: "required-applications",
        label: (
          <NavLink to="/required-applications">Required Applications</NavLink>
        ),
      },
      {
        key: "bcp-action-plans",
        label: <NavLink to="/bcp-action-plans">BCP Action Plans</NavLink>,
      },
      {
        key: "process-dependency",
        label: <NavLink to="/process-dependency">Process Dependency</NavLink>,
      },
      {
        key: "process-vendor",
        label: <NavLink to="/process-vendor">Process Vendor</NavLink>,
      },
      {
        key: "process-equipment",
        label: <NavLink to="/process-equipment">Process Equipment</NavLink>,
      },
    ],
  },
  {
    key: "BIA Equipment Dependencys",
    icon: <TbCircleLetterBFilled />,
    label: "BIA Equipment Dependencys",
  },
  {
    key: "New Tab",
    icon: <TiPlus />,
    className: "border-b-[1px] border-primary-200 !rounded-none",
    label: "New Tab",
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
    icon: <RiImageEditLine  />,
    label: "My Theme",
    className: "border-b-[1px] border-primary-200 !rounded-none",
  },
];

export default menuItems;
