const { Room } = require('../models');

const findAllRooms = async (req, res) => {
    try {
        const data = await Room.findAll();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const findOneRoom = async (req, res) => {
    const roomId = req.params.id;

    try {
        const room = await Room.findByPk(roomId);

        if (!room) {
        return res.status(404).json({ error: 'Room not found' });
        }

        res.json(room);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const createRoom = async (req, res) => {
    const { roomName, costPerHour } = req.body;

    try {
      const newRoom = await Room.create({ roomName, costPerHour });
      res.status(201).json(newRoom);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }   
}

const updateRoom = async (req, res) => {
    const roomId = req.params.id;
    const { roomName, costPerHour } = req.body;
  
    try {
      const room = await Room.findByPk(roomId);
  
      if (!room) {
        return res.status(404).json({ error: 'Room not found' });
      }
  
      room.roomName = roomName;
      room.costPerHour = costPerHour;
  
      await room.save();
  
      res.json(room);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }    
}

const deleteRoom = async (req, res) => {
    const roomId = req.params.id;

    try {
      const room = await Room.findByPk(roomId);
  
      if (!room) {
        return res.status(404).json({ error: 'Room not found' });
      }
  
      await room.destroy();
      res.json({ message: 'Room deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }    
}

module.exports = { findAllRooms, findOneRoom, createRoom, updateRoom, deleteRoom }