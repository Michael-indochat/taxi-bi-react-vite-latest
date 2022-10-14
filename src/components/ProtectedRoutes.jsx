import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const useAuth = () => {

  //get item from localstorage
  let user = null;
  const _user = localStorage.getItem("user");

  if (_user) {
    user = JSON.parse(_user);
    console.log("user", user);
  }
  if (user) {
    return {
      auth: true,
      role: user.role,
    };
  } else {
    return {
      auth: false,
      role: null,
    };
  }
};


/**
 * 保護路由機制，將會判斷 localStorage 是否有 user key，沒有的話會返回到 /login，
 * 有的話則會進入 route tree 去 render 後方的 components，
 * ! Dashboard layout 會從此處加載，讓後續的 component，確保都有 Dashboard layout 可以使用
 * @param {Boolean} props 
 * @returns 
 */
const ProtectedRoutes = (props) => {
  const { auth, role } = useAuth();

  //if the role required is there or not
  if (props.roleRequired) {
    return auth ? (
      props.roleRequired === role ? (
        <Outlet />
      ) : (
        <Navigate to="/denied" />
      )
    ) : (
      <Navigate to="/login" />
    );
  } else {
    return auth ? (
      <Dashboard>
        <Outlet />
      </Dashboard>
    ) : (
      <Navigate to="/login" />
    );
  }
};

export default ProtectedRoutes;
