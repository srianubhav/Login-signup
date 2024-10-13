import React from 'react';

const DashboardSidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-6">Navigation</h2>
      <ul className="space-y-2">
        <li>
          <button 
            onClick={() => window.location.href = '/dashboard'} 
            className="block w-full text-left p-3 rounded-lg hover:bg-gray-700 transition duration-200"
          >
            Dashboard
          </button>
        </li>
        <li>
          <button 
            onClick={() => window.location.href = '/profile'} 
            className="block w-full text-left p-3 rounded-lg hover:bg-gray-700 transition duration-200"
          >
            Profile
          </button>
        </li>
        <li>
          <button 
            onClick={() => window.location.href = '/settings'} 
            className="block w-full text-left p-3 rounded-lg hover:bg-gray-700 transition duration-200"
          >
            Settings
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default DashboardSidebar;
