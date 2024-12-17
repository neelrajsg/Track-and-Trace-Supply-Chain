import React, { useState } from 'react';
import api from '../api/api';

const ShipmentStatus = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [shipment, setShipment] = useState(null);
  const [message, setMessage] = useState('');

  const handleCheckStatus = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`/shipments/${orderNumber}`);
      setShipment(response.data);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleCheckStatus}>
        <input type="text" value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} placeholder="Order Number" required />
        <button type="submit">Check Status</button>
      </form>

      {shipment && (
        <div>
          <h3>Shipment Details</h3>
          <p>Current Location: {shipment.trackingDetails.currentLocation}</p>
          <p>Estimated Delivery: {new Date(shipment.trackingDetails.estimatedDelivery).toLocaleDateString()}</p>
          <p>Status: {shipment.status}</p>
        </div>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default ShipmentStatus;
