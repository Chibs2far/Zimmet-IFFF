import React, { useState } from 'react';

const DeviceList = ({ devices }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Arama çubuğundaki değere göre cihazları filtreleyelim
  const filteredDevices = devices.filter(device =>
    device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    device.serialNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    device.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    device.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ml-64 p-6 bg-white min-h-screen">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        {/* Başlık ve Arama Çubuğu */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#405E7F] dark:text-[#FFB347]">
            Device Inventory
          </h2>
          {/* Arama Çubuğu */}
          <input
            type="text"
            placeholder="Search devices..."
            className="border p-2 rounded-md focus:ring-2 focus:ring-[#FFB347] w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Cihaz Listesi */}
        <table className="w-full border-collapse border border-gray-500 bg-gray-100 text-black">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="border border-gray-500 p-4 text-center">Category Image</th>
              <th className="border border-gray-500 p-4 text-center">Device Name</th>
              <th className="border border-gray-500 p-4 text-center">Category</th>
              <th className="border border-gray-500 p-4 text-center">Serial Number</th>
              <th className="border border-gray-500 p-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredDevices.length > 0 ? (
              filteredDevices.map((device) => (
                <tr key={device.id} className="border border-gray-600 hover:bg-gray-200 transition-all duration-200">
                  <td className="p-4 text-center">
                    <img src={device.image} alt={device.category} className="h-12 w-12 object-contain mx-auto" />
                  </td>
                  <td className="p-4 text-center">{device.name}</td>
                  <td className="p-4 text-center">{device.category}</td>
                  <td className="p-4 text-center">{device.serialNumber}</td>
                  <td className="p-4 text-center">
                    <span 
                      className={`px-3 py-1 rounded-md text-white 
                        ${device.status.toLowerCase() === 'active' ? 'bg-green-500' : 
                          device.status.toLowerCase() === 'maintenance' ? 'bg-blue-500' : 
                          'bg-red-500'}`}
                    >
                      {device.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No matching devices found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeviceList;
