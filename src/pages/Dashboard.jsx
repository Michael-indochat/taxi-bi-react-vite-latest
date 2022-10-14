import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InnerContent from "../components/InnerContent";
// import Banner from "../partials/Banner";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const useAuth = () => {
    const user = localStorage.getItem("user");
    if (user) {
      return true;
    } else {
      return false;
    }
  };
  const user = useAuth();
  const location = useLocation();
  const navigation = useNavigate();

  const signOut = () => {
    localStorage.removeItem("user");
    navigation("/login");
  };

  return (
    <>
      {/*  Site header */}
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        signOut={signOut}
      />
      {/* Content area */}
      <div className="mx-auto w-full max-w-8xl px-4">
        <div className="lg:flex">
          {/* Sidebar */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main
            className={`w-full min-w-0 flex-auto lg:static lg:ml-28 lg:max-h-full lg:overflow-visible lg:sidebar-expanded:!ml-72 2xl:ml-72 2xl:sidebar-expanded:!ml-72`}
          >
            <div className="flex w-full flex-col">
              {/* Welcome banner */}
              <WelcomeBanner />
              <InnerContent />
              {/* Dashboard actions */}
            </div>
          </main>

          {/* <Banner /> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
