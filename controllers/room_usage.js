const { Room_Usage } = require('../models');

const findAllRoomUsages = async (req, res) => {
    try {
        const data = await Room_Usage.findAll();
        res.json(data);
    } catch (error) {
        console.log(error)
    }
}

const findOneRoomUsage = async (req, res) => {
    try {
        const { id } = req.params;
        const roomUsage = await Room_Usage.findByPk(id);
    
        if (!roomUsage) {
          return res.status(404).json({ error: 'Room Usage not found' });
        }
    
        res.status(200).json(roomUsage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const createRoomUsages = async (req, res) => {
    try {
        const { clientId, roomId, startTime, endTime, bookingDate, quotaUsed } = req.body;
        
        const roomUsage = await Room_Usage.create({
            clientId,
            roomId,
            startTime,
            endTime,
            bookingDate,
            quotaUsed
        });
    
        res.status(201).json(roomUsage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
     }    
}

const updateRoomUsages = async (req, res) => {
    try {
        const { id } = req.params;
        const { clientId, roomId, startTime, endTime, bookingDate, quotaUsed } = req.body;
    
        const roomUsage = await Room_Usage.findByPk(id);
    
        if (!roomUsage) {
          return res.status(404).json({ error: 'Room Usage not found' });
        }
    
        await roomUsage.update({
            clientId,
            roomId,
            startTime,
            endTime,
            bookingDate,
            quotaUsed
        });
    
        res.status(200).json(roomUsage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }    
}

const deleteRoomUsages = async (req, res) => {
    try {
        const { id } = req.params;
    
        const roomUsage = await Room_Usage.findByPk(id);
    
        if (!roomUsage) {
          return res.status(404).json({ error: 'Room Usage not found' });
        }
    
        await roomUsage.destroy();
    
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
     }   
}

module.exports = { findAllRoomUsages, findOneRoomUsage, createRoomUsages, updateRoomUsages, deleteRoomUsages }