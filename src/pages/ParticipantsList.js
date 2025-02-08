import React, { useState } from 'react';

const ParticipantsList = ({ participants, onToggleApproval }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Arama çubuğuna göre filtreleme
  const filteredParticipants = participants.filter(participant =>
    participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    participant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    participant.assignedDevices.some(device =>
      device.toLowerCase().includes(searchTerm.toLowerCase())
    ) ||
    (participant.approved ? "approved" : "not approved").includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ml-64 p-6 bg-white min-h-screen">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        {/* Başlık ve Arama Çubuğu */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#405E7F] dark:text-[#FFB347]">
            Participants List
          </h2>
          {/* Arama Çubuğu */}
          <input
            type="text"
            placeholder="Search participants..."
            className="border p-2 rounded-md focus:ring-2 focus:ring-[#FFB347] w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Katılımcı Listesi */}
        <table className="w-full border-collapse border border-gray-500 bg-gray-100 text-black">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="border border-gray-500 p-4 text-center">Name</th>
              <th className="border border-gray-500 p-4 text-center">Email</th>
              <th className="border border-gray-500 p-4 text-center">Joined At</th>
              <th className="border border-gray-500 p-4 text-center">Assigned Devices</th>
              <th className="border border-gray-500 p-4 text-center">Approved</th>
            </tr>
          </thead>
          <tbody>
            {filteredParticipants.length > 0 ? (
              filteredParticipants.map((participant) => (
                <tr key={participant.id} className="border border-gray-600 hover:bg-gray-200 transition-all duration-200">
                  <td className="p-4 text-center">{participant.name}</td>
                  <td className="p-4 text-center">{participant.email}</td>
                  <td className="p-4 text-center">{new Date(participant.joinedAt).toLocaleDateString()}</td>
                  <td className="p-4 text-center">
                    {participant.assignedDevices.length > 0 ? (
                      <ul className="list-disc text-left mx-auto w-fit">
                        {participant.assignedDevices.map((device, index) => (
                          <li key={index}>{device}</li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-gray-500">No devices assigned</span>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    <button 
                      className={`px-3 py-1 rounded-md text-white 
                        ${participant.approved ? 'bg-green-500' : 'bg-red-500'}`}
                      onClick={() => onToggleApproval(participant.id)}
                    >
                      {participant.approved ? "Approved" : "Not Approved"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No matching participants found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParticipantsList;
