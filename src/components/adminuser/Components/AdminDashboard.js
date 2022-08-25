import React from "react";
import AdminDashboardOverview from "./AdminDashboardOverview";
import SchoolFeeChart from "./SchoolFeeChart";

const Dashboard = () => {
  return (
    <div>
      <AdminDashboardOverview />
      <SchoolFeeChart />
    </div>
  );
};

export default Dashboard;
