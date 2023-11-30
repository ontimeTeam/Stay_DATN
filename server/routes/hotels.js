const express = require('express');
const router = express.Router();

const { createHotel, getHotelRooms } = require("../controllers/hotel");

router.post('/', createHotel);
router.post('/:id', getHotelRooms);

module.exports = router;