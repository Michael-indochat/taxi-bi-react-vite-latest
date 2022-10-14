import React from "react";

import { Navigate, Outlet } from "react-router-dom";

/** 首頁進行三元判斷 localStorage，進入 dashboard  前往特定路由
 *
 * @returns Object[routes]
 */
const useAuth = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const PublicRoutes = (props) => {
  const auth = useAuth();

  return auth ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoutes;
