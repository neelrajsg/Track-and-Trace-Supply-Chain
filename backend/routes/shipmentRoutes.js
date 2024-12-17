const express = require('express');
const { createShipment, getShipmentStatus } = require('../controllers/shipmentController');
const router = express.Router();

// Routes for creating and tracking shipments
router.post('/create', createShipment);
router.get('/:orderNumber', getShipmentStatus);

module.exports = router;
