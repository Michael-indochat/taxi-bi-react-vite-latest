// import { MdAccessTime, MdSignalWifi3Bar } from "react-icons/md";


const navigationItems = {
  sidebar: [
    // Overview
    {
      name: "Overview",
      to: "/dashboard/overview",
      text: "overview",
    },
    // Analysis
    {
      name: "Analysis",
      to: "",
      text: "analysis",
      child: [
        {
          name: "Tax Trend",
          to: "/dashboard/tax-trend",
          text: "tax-trend",
        },
        {
          name: "Tax Report",
          to: "/dashboard/tax-report",
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
          to: "/dashboard/tax-renvenue",
          text: "tax-renvenue",
        },
        {
          name: "Tax Records",
          to: "/dashboard/tax-records",
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
          to: "/dashboard/search-merchant",
          text: "search-merchant",
        },
        {
          name: "Approve Merchant",
          to: "/dashboard/approve-merchant",
          text: "approve-merchant",
        },
        {
          name: "Approve Edit",
          to: "/dashboard/approve-edit",
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
          to: "/dashboard/tax-trend",
          text: "tax-trend",
        },
        {
          name: "Tax Report",
          to: "/dashboard/tax-report",
          text: "tax-report",
        },
      ],
    },
    // Billing
    {
      name: "Billing",
      to: "/dashboard/billing",
      text: "billing",
    },
    // Feedback
    {
      name: "Feedback",
      to: "/dashboard/feedback",
      text: "feedback",
    },
  ],
  footer: [],
};
export default navigationItems;
