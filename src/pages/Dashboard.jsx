import React from "react";
import CreateJobModal from "../components/CreateJob";
import SidebarNavigation from "../components/SidebarNavigation";
import CreateJobModalNormal from "../components/CreateJobNormal";
import DashboardMainpage from "../components/DashboardMainpage";

const Dashboard = () => {
  return (
    <div className="mt-[4.8rem] ">
      <div className="flex">
        <SidebarNavigation />
        <DashboardMainpage />
      </div>
    </div>
  );
};

export default Dashboard;
