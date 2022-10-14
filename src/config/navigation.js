const navigationItems = {
  sidebar: [
    // Overview
    {
      name: "Dashboard ",
      to: "/dashboard",
      text: "Dashboard",
      svgName:'MdAccessTime',
    },
    // Analysis
    {
      name: "Analysis",
      to: "",
      text: "Analysis",
      child: [
        {
          name: "Tax Trend",
          to: "/tax-trend",
          text:"Tax Trend"
        },
        {
          name: "Tax Report",
          to: "/tax-report",
          text:"Tax Report"
        }
      ]
    },
    // Tax
    {
      name: 'Tax',
      to: '',
      text: 'Tax',
      child: [
        {
          name: "Tax Revenue",
          to: "/tax-renvenue",
          text:"Tax Renvenue"
        },
        {
          name: "Tax Records",
          to: "/tax-records",
          text:"Tax Records"
        }
      ]
    },
    // Merchant
    {
      name: 'Merchant',
      to: '',
      text: 'Merchant',
      child: [
        {
          name: "Search Merchant",
          to: "/search-merchant",
          text:"Search Merchant"
        },
        {
          name: "Approve Merchant",
          to: "/approve-merchant",
          text:"Approve Merchant"
        },
        {
          name: "Approve Edit",
          to: "/approve-edit",
          text:"Approve Edit"
        }
      ]
    },
    // Receipt
    {
      name: "Receipt ",
      to: "",
      text: "Receipt",
      child: [
        {
          name: "Tax Trend",
          to: "/tax-trend",
          text:"taxTrend"
        },
        {
          name: "Tax Report",
          to: "/tax-report",
          text:"taxReport"
        }
      ]
    },
    // Billing
    {
      name: "Billing",
      to: "/billing",
      text: "Billing",
    },
    // Feedback
    {
      name: "Feedback",
      to: "/feedback",
      text: "Feedback",
    },
  ],
  footer: [],
};
export default navigationItems;
