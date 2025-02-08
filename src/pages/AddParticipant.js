import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddParticipant = ({ onAddParticipant }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [approved, setApproved] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newParticipant = {
      id: crypto.randomUUID(),
      name,
      email,
      approved,
      joinedAt: new Date().toISOString(),
      assignedDevice: null
    };
    onAddParticipant(newParticipant);
    navigate('/participants');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#405E7F] dark:text-[#FFB347]">
        Add New Participant
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium">Full Name</label>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter full name"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#FFB347]"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#FFB347]"
            required
          />
        </div>
        <div className="flex items-center">
          <input 
            type="checkbox"
            checked={approved}
            onChange={(e) => setApproved(e.target.checked)}
            className="mr-2"
          />
          <label className="text-sm font-medium">Approved</label>
        </div>
        <button 
          type="submit" 
          className="w-full bg-[#405E7F] hover:bg-[#FFB347] text-white p-2 rounded-md transition-all"
        >
          Add Participant
        </button>
      </form>
    </div>
  );
};

export default AddParticipant;
