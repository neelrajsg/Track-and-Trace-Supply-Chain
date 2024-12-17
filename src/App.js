import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './components/Register';
import Login from './components/Login';
import CreateShipment from './components/CreateShipment';
import ShipmentStatus from './components/ShipmentStatus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-shipment" element={<CreateShipment />} />
        <Route path="/shipment-status" element={<ShipmentStatus />} />
      </Routes>
    </Router>
  );
}

export default App;
