const { Client } = require('../models');

const findAllClients = async (req, res) => {
    try {
        const data = await Client.findAll();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const findOneClient = async (req, res) => {
    const clientId = req.params.id;

    try {
      const client = await Client.findByPk(clientId);
  
      if (!client) {
        return res.status(404).json({ error: 'Client not found' });
      }
  
      res.json(client);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

const createClient = async (req, res) => {
    const { name, email, phone, credit } = req.body;

    try {
      const newClient = await Client.create({ name, email, phone, credit });
      res.status(201).json(newClient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

const updateClient = async (req, res) => {
    const clientId = req.params.id;
    const { name, email, phone, credit } = req.body;
  
    try {
      const client = await Client.findByPk(clientId);
  
      if (!client) {
        return res.status(404).json({ error: 'Client not found' });
      }
  
      client.name = name;
      client.email = email;
      client.phone = phone;
      client.credit = credit;
  
      await client.save();
  
      res.json(client);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteClient = async (req, res) => {
    const clientId = req.params.id;

    try {
      const client = await Client.findByPk(clientId);
  
      if (!client) {
        return res.status(404).json({ error: 'Client not found' });
      }
  
      await client.destroy();
      res.json({ message: 'Client deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = { findAllClients, findOneClient, createClient, updateClient, deleteClient }