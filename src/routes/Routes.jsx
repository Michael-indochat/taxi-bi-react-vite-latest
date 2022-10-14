import { Navigate, Route, Routes } from "react-router-dom";
// import PermissionDenied from "../components/PremissionDenied";
import ApproveEdit from "../components/ApproveEdit";
import ApproveMerchant from "../components/ApproveMerchant";
import Billing from "../components/Billing";
import Feedback from "../components/Feedback";
import ProtectedRoutes from "../components/ProtectedRoutes";
import PublicRoutes from "../components/PublicRoutes";
import ReceiptInvaild from "../components/ReceiptInvalid";
import SearchMerchant from "../components/SearchMerchant";
import SearchReceipt from "../components/SearchReceipt";
import TaxRecords from "../components/TaxRecords";
import TaxRenvenue from "../components/TaxRenvenue";
import TaxReport from "../components/TaxReport";
import TaxTrend from "../components/TaxTrend";
import LoginPage from "../pages/LoginPage";
import Overview from "../pages/Overview";

const MainRoutes = () => (
  <Routes>
    {/** Protected Routes */}
    {/** Wrap all Route under ProtectedRoutes element */}
    <Route path="/" element={<ProtectedRoutes />}>
      <Route path="/" element={<Navigate replace to="/dashboard/overview" />} />
      <Route
        path="/dashboard"
        element={<Navigate replace to="/dashboard/overview" />}
      />
      <Route path="/dashboard/overview" element={<Overview />} />
      <Route path="/dashboard/tax-trend" element={<TaxTrend />} />
      <Route path="/dashboard/tax-report" element={<TaxReport />} />
      {/* Tax */}
      <Route path="/dashboard/tax-renvenue" element={<TaxRenvenue />} />
      <Route path="/dashboard/tax-records" element={<TaxRecords />} />
      {/* Merchant */}
      <Route path="/dashboard/search-merchant" element={<SearchMerchant />} />
      <Route path="/dashboard/approve-merchant" element={<ApproveMerchant />} />
      <Route path="/dashboard/approve-edit" element={<ApproveEdit />} />
      {/* Receipt */}
      <Route path="/dashboard/search-receipt" element={<SearchReceipt />} />
      <Route path="/dashboard/receipt-invalid" element={<ReceiptInvaild />} />
      {/* Billing */}
      <Route path="/dashboard/billing" element={<Billing />} />
      {/* Feedback */}
      <Route path="/dashboard/feedback" element={<Feedback />} />
    </Route>

    {/** Public Routes */}
    {/** Wrap all Route under PublicRoutes element */}
    <Route path="/login" element={<PublicRoutes />}>
      {/* <Route path="/login" element={<LoginPage />} /> */}
      <Route path="/login" element={<LoginPage />} />
    </Route>

    {/** Permission denied route */}
    {/* <Route path="/denied" element={<PermissionDenied />} /> */}
  </Routes>
);

export default MainRoutes;
