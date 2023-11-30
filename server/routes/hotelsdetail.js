const express = require('express');
const router = express.Router();

const { createHotelDetail } = require("../controllers/hotelDetail");

router.post('/', createHotelDetail);

module.exports = router;