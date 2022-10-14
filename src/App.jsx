import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./css/style.css";
// import MainRoutes from "./routes/Routes"

import "./charts/ChartjsConfig";

// Import pages
import MainRoutes from "./routes/Routes";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
        {/* <Route exact path="/login" element={<LoginPage/>} /> */}
        {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
        <MainRoutes/>
    </>
  );
};

export default App;
