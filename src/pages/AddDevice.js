import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categoryImages = {
  Laptop: "/images/laptop.png",
  Desktop: "/images/desktop.png",
  Tablet: "/images/tablet.png",
  Smartphone: "/images/smartphone.png",
  Printer: "/images/printer.png",
  Networking: "/images/networking.png",
  Other: "/images/other.png"
};

const AddDevice = ({ onAddDevice }) => {
  const [name, setName] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [category, setCategory] = useState('Laptop');
  const [status, setStatus] = useState('active');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDevice = {
      id: crypto.randomUUID(),
      name,
      serialNumber,
      category,
      status: status.charAt(0).toUpperCase() + status.slice(1).toLowerCase(), // İlk harfi büyük yap
      image: categoryImages[category] || categoryImages["Other"]
    };
    onAddDevice(newDevice);
    navigate('/');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#405E7F] dark:text-[#FFB347]">
        Add New Device
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium">Device Name</label>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter device name"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#FFB347]"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Serial Number</label>
          <input 
            type="text"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            placeholder="Enter serial number"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#FFB347]"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Category</label>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#FFB347]"
          >
            {Object.keys(categoryImages).map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Status</label>
          <select 
            value={status} 
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#FFB347]"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>
        <button 
          type="submit" 
          className="w-full bg-[#405E7F] hover:bg-[#FFB347] text-white p-2 rounded-md transition-all"
        >
          Add Device
        </button>
      </form>
    </div>
  );
};

export default AddDevice;
