import { Navigate, Route, Routes } from "react-router-dom";
import InnerContent from "../components/InnerContent";
import Dashboard from "../pages/Dashboard";
// import PermissionDenied from "../components/PremissionDenied";
import ProtectedRoutes from "../components/ProtectedRoutes";
import PublicRoutes from "../components/PublicRoutes";

// tabs
//
// import LoginPage from "../pages/LoginPage";
import LoginPage from "../pages/LoginPage";

const MainRoutes = () => (
  <Routes>
    {/** Protected Routes */}
    {/** Wrap all Route under ProtectedRoutes element */}
    <Route path="/" element={<ProtectedRoutes />}>
      <Route path="/" element={<InnerContent />}>
        <Route path="/" element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
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
