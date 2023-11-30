const express = require('express');
const router = express.Router();

const { createHotel } = require("../controllers/room");

router.post('/', createHotel);

module.exports = router;