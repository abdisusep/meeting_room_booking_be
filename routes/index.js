const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');

const userRoute = require('./user');
const clientRoute = require('./client');
const roomRoute = require('./room');
const roomUsageRoute = require('./room_usage');

router.use('/', userRoute);
router.use('/', clientRoute);
router.use('/', roomRoute);
router.use('/', roomUsageRoute);

module.exports = router;