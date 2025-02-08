import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DeviceList from "./pages/DeviceList";
import AddDevice from "./pages/AddDevice";

function App() {
  const [devices, setDevices] = useState([]);

  const addDevice = (newDevice) => {
    setDevices([...devices, newDevice]);
  };

  return (
    <Router> 
      <div className="bg-white min-h-screen flex">
        <Sidebar />
        <div className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<DeviceList devices={devices} />} />
            <Route path="/add-device" element={<AddDevice onAddDevice={addDevice} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
