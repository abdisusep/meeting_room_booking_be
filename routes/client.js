const express = require('express');
const router  = express.Router();

const authenticate = require('../middleware/authenticate');
const clientController = require('../controllers/client');

router.get('/clients', authenticate, clientController.findAllClients);
router.get('/clients/:id', authenticate, clientController.findOneClient);
router.post('/clients', authenticate, clientController.createClient);
router.put('/clients/:id', authenticate, clientController.updateClient);
router.delete('/clients/:id', authenticate, clientController.deleteClient);

module.exports = router;