const { HotelDetail } = require('../models/HotelDetail');

const createHotelDetail = async (req, res, next) => {
  
    const newHotelDetail = new HotelDetail(req.body);

    try {
        const savedHotelDetail = await newHotelDetail.save();
        res.status(200).json(savedHotelDetail);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createHotelDetail,
};