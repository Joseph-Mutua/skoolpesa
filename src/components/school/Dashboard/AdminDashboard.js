import React from "react";
import AdminDashboardOverview from "./AdminDashboardOverview";
import SchoolFeeChart from "./SchoolFeeChart";
import FeesPaidTodayTable from './FeesPaidTodayTable';

const Dashboard = () => {
  return (
    <div>
      <AdminDashboardOverview />
      <SchoolFeeChart />
      <FeesPaidTodayTable/>
    </div>
  );
};

export default Dashboard;
