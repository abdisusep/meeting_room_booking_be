const express = require('express');
const router  = express.Router();

const authenticate = require('../middleware/authenticate');
const roomUsageController = require('../controllers/room_usage');

router.get('/room_usages', authenticate, roomUsageController.findAllRoomUsages);
router.get('/room_usages/:id', authenticate, roomUsageController.findOneRoomUsage);
router.post('/room_usages', authenticate, roomUsageController.createRoomUsages);
router.put('/room_usages/:id', authenticate, roomUsageController.updateRoomUsages);
router.delete('/room_usages/:id', authenticate, roomUsageController.deleteRoomUsages);

module.exports = router;