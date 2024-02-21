const express = require('express');
const router  = express.Router();

const authenticate = require('../middleware/authenticate');
const roomController = require('../controllers/room');

router.get('/rooms', authenticate, roomController.findAllRooms);
router.get('/rooms/:id', authenticate, roomController.findOneRoom);
router.post('/rooms', authenticate, roomController.createRoom);
router.put('/rooms/:id', authenticate, roomController.updateRoom);
router.delete('/rooms/:id', authenticate, roomController.deleteRoom);

module.exports = router;