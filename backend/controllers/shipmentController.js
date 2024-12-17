const Shipment = require('../models/Shipment');

// Create new shipment
exports.createShipment = async (req, res) => {
  const { orderNumber, trackingDetails } = req.body;

  try {
    const shipment = await Shipment.create({
      orderNumber,
      trackingDetails,
      user: req.user._id,
    });

    res.status(201).json(shipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get shipment status
exports.getShipmentStatus = async (req, res) => {
  const { orderNumber } = req.params;

  try {
    const shipment = await Shipment.findOne({ orderNumber });

    if (!shipment) {
      return res.status(404).json({ message: 'Shipment not found' });
    }

    res.json(shipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
