import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-700 text-white h-screen fixed">
      <div className="p-6 text-xl font-bold">
        <Link to="/">Device Management</Link>
      </div>
      <nav className="mt-6">
        <ul>
          <li className="p-4 hover:bg-gray-600">
            <Link to="/">📋 Device List</Link>
          </li>
          <li className="p-4 hover:bg-gray-600">
            <Link to="/add-device">➕ Add Device</Link>
          </li>
          <li className="p-4 hover:bg-gray-600">
            <Link to="/participants">👥 Participants</Link>
          </li>
          <li className="p-4 hover:bg-gray-600">
            <Link to="/add-participant">➕ Add Participant</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
