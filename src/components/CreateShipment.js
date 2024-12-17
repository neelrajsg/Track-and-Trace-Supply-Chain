import React, { useState } from 'react';
import api from '../api/api';

const CreateShipment = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [estimatedDelivery, setEstimatedDelivery] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateShipment = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await api.post('/shipments/create', {
        orderNumber,
        trackingDetails: { currentLocation, estimatedDelivery }
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Shipment Created Successfully!');
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleCreateShipment}>
        <input type="text" value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} placeholder="Order Number" required />
        <input type="text" value={currentLocation} onChange={(e) => setCurrentLocation(e.target.value)} placeholder="Current Location" required />
        <input type="date" value={estimatedDelivery} onChange={(e) => setEstimatedDelivery(e.target.value)} placeholder="Estimated Delivery" required />
        <button type="submit">Create Shipment</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateShipment;
