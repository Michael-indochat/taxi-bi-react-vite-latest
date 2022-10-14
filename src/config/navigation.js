// import { MdAccessTime, MdSignalWifi3Bar } from "react-icons/md";


const navigationItems = {
  sidebar: [
    // Overview
    {
      name: "Dashboard ",
      to: "/dashboard",
      text: "dashboard",
      // icon: <MdAccessTime />,
    },
    // Analysis
    {
      name: "Analysis",
      to: "",
      text: "analysis",
      // icon: <MdSignalWifi3Bar />,
      child: [
        {
          name: "Tax Trend",
          to: "/tax-trend",
          text: "tax-trend",
        },
        {
          name: "Tax Report",
          to: "/tax-report",
          text: "tax-report",
        },
      ],
    },
    // Tax
    {
      name: "Tax",
      to: "",
      text: "tax",
      child: [
        {
          name: "Tax Revenue",
          to: "/tax-renvenue",
          text: "tax-renvenue",
        },
        {
          name: "Tax Records",
          to: "/tax-records",
          text: "tax-records",
        },
      ],
    },
    // Merchant
    {
      name: "Merchant",
      to: "",
      text: "merchant",
      child: [
        {
          name: "Search Merchant",
          to: "/search-merchant",
          text: "search-merchant",
        },
        {
          name: "Approve Merchant",
          to: "/approve-merchant",
          text: "approve-merchant",
        },
        {
          name: "Approve Edit",
          to: "/approve-edit",
          text: "approve-edit",
        },
      ],
    },
    // Receipt
    {
      name: "Receipt ",
      to: "",
      text: "receipt",
      child: [
        {
          name: "Tax Trend",
          to: "/tax-trend",
          text: "tax-trend",
        },
        {
          name: "Tax Report",
          to: "/tax-report",
          text: "tax-report",
        },
      ],
    },
    // Billing
    {
      name: "Billing",
      to: "/billing",
      text: "billing",
    },
    // Feedback
    {
      name: "Feedback",
      to: "/feedback",
      text: "feedback",
    },
  ],
  footer: [],
};
export default navigationItems;
