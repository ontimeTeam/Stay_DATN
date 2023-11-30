const { Hotel } = require('../models/Hotel');
const { Room } = require('../models/Room');

const createError = require('http-errors');

const createHotel = async (req, res, next) => {
    // Nhận ID khách sạn và dữ liệu phòng mới
    const hotelId = req.params.hotelId
    const newRoom = new Room(req.body);

    //Lưu phòng mới
    try {
        const saveRoom = await newRoom.save();
        //Thêm phòng đã lưu vào khách sạn
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: {rooms: saveRoom._id}
            })
        } catch (error) {
            next(error);
        }
    } catch (error) {
        next(error);
    }
}

//ddang suy nghi
//Nhận ID phòng và ngày trống
//Cập nhật tình trạng phòng trống
const updateRoomAvailability = async (req, res, next) => {
    try {
        await Room.updateOne(
            {"roomCode._id": req.params.id},
            {
                $push: {
                    "roomNumber.$.unavailableDates": req.body.dates
                }
            }
        )

        res.status(200).json("Room status has bern Updated")
    } catch (error) {
        
    }
}

module.exports = {
    createHotel
};