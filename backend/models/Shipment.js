const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['Pending', 'Shipped', 'Delivered', 'Delayed'],
    default: 'Pending',
  },
  trackingDetails: {
    currentLocation: {
      type: String,
      required: true,
    },
    estimatedDelivery: {
      type: Date,
      required: true,
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Shipment = mongoose.model('Shipment', shipmentSchema);
module.exports = Shipment;
