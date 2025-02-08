import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-700 text-white h-screen fixed flex flex-col">
      {/* LOGO KISMI */}
      <div className="p-6 flex justify-center">
        <Link to="/">
          <img src="/images/logo.png" alt="Logo" className="h-12 w-auto" />
        </Link>
      </div>

      {/* MENÜ KISMI */}
      <nav className="mt-4 flex-grow">
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
