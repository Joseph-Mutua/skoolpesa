import React from "react";
import AdminDashboardOverview from "./AdminDashboardOverview";
import SchoolFeeChart from "./SchoolFeeChart";
import FeesPaidToday from "./FeesPaidToday";

const Dashboard = () => {
  return (
    <div>
      <AdminDashboardOverview />
      <SchoolFeeChart />
      <FeesPaidToday/>
    </div>
  );
};

export default Dashboard;
