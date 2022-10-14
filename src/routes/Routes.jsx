import { Navigate, Route, Routes } from "react-router-dom";
import InnerContent from "../components/InnerContent";
import Dashboard from "../pages/Dashboard";
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

const MainRoutes = () => (
  <Routes>
    {/** Protected Routes */}
    {/** Wrap all Route under ProtectedRoutes element */}
    <Route path="/" element={<ProtectedRoutes />}>
      <Route path="/" element={<InnerContent />}>
        <Route path="/" element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="tax-trend" element={<TaxTrend />} />
          <Route path="tax-report" element={<TaxReport />} />
          {/* Tax */}
          <Route path="tax-renvenue" element={<TaxRenvenue />} />
          <Route path="tax-records" element={<TaxRecords />} />
          {/* Merchant */}
          <Route path="search-merchant" element={<SearchMerchant />} />
          <Route path="approve-merchant" element={<ApproveMerchant />} />
          <Route path="approve-edit" element={<ApproveEdit />} />
          {/* Receipt */}
          <Route path="search-receipt" element={<SearchReceipt />} />
          <Route path="receipt-invalid" element={<ReceiptInvaild />} />
          {/* Billing */}
          <Route path="billing" element={<Billing />} />
          {/* Feedback */}
          <Route path="feedback" element={<Feedback />} />
        </Route>
      </Route>
    </Route>

    {/** Public Routes */}
    {/** Wrap all Route under PublicRoutes element */}
    <Route path="login" element={<PublicRoutes />}>
      {/* <Route path="/login" element={<LoginPage />} /> */}
      <Route path="/login" element={<LoginPage />} />
    </Route>

    {/** Permission denied route */}
    {/* <Route path="/denied" element={<PermissionDenied />} /> */}
  </Routes>
);

export default MainRoutes;
