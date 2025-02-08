import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import DeviceList from "./pages/DeviceList";
import AddDevice from "./pages/AddDevice";
import ParticipantsList from "./pages/ParticipantsList";
import AddParticipant from "./pages/AddParticipant";

function App() {
  const [devices, setDevices] = useState([]);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/participants") // API URL'ni ekleyin
      .then((res) => res.json())
      .then((data) => setParticipants(data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  const addDevice = (newDevice) => {
    setDevices([...devices, newDevice]);
  };

  const addParticipant = (newParticipant) => {
    setParticipants([...participants, { ...newParticipant, assignedDevices: [] }]);
  };

  const toggleApproval = (id) => {
    setParticipants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, approved: !p.approved } : p))
    );
  };

  return (
    <Router>
      <div className="bg-white min-h-screen flex">
        <Sidebar />
        <div className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<DeviceList devices={devices} />} />
            <Route path="/add-device" element={<AddDevice onAddDevice={addDevice} />} />
            <Route path="/participants" element={<ParticipantsList participants={participants} onToggleApproval={toggleApproval} />} />
            <Route path="/add-participant" element={<AddParticipant onAddParticipant={addParticipant} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
