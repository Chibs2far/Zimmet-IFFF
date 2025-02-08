import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-700 text-white fixed flex flex-col items-center p-4">

      {/* LOGO */}
      <div className="mb-6">
        <img src="/images/logo.png" alt="Logo" className="h-16 w-auto object-contain" />
      </div>

      {/* MENU */}
      <ul className="w-full">
        <li className="p-4 hover:bg-secondary w-full text-center transition-all duration-300 rounded-md">
          <Link to="/" className="block">📋 Cihaz Listesi</Link>
        </li>
        <li className="p-4 hover:bg-secondary w-full text-center transition-all duration-300 rounded-md">
          <Link to="/add-device" className="block">➕ Yeni Cihaz Ekle</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
