import React from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="flex-1">
        <DashboardHeader />
        <div className="p-4">
          <h2 className="text-2xl">Dashboard Content</h2>
          {/* Dashboard ka main content yahan dikhana hai */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
