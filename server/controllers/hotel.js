const { Hotel } = require('../models/Hotel');
const { Room } = require('../models/Room');

const createHotel = async (req, res, next) => {
    //tạoKhách sạn
    const newHotel = new Hotel(req.body);
    // Lưu khách sạn mới vào cơ sở dữ liệu
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        next(error);  
    }
}

const getHotel = async (req, res, next) => {
    //Trích xuất danh sách thành phố từ truy vấn yêu cầu
    const cities = req.query.cities.split(',');
    //Truy vấn cơ sở dữ liệu số lượng khách sạn theo thành phố
    try {
        const list = await Promise.all(
            cities.map((city) => {
                return Hotel.countDocuments({ city: city })
            })
        )

        res.status(200).json(list);
    } catch (error) {
        next(error);
    }
}

const countByCity = async (req, res, next) => {
    //Trích xuất tham số truy vấn
    const { min , max, ...others } = req.query;

    //Truy vấn cơ sở dữ liệu và gửi phản hồi
    try {
        const hotels = await Hotel.find({
            ...others,
            cheapestPrice: { $gt: min| 1, $lt: max|| 999}
        }).limit(req.query.limit);

        res.status(200).json(hotels);
    } catch (error) {
        
    }
}

const countHotelByType = async (req, res, next) => {
    //Trích xuất tham số truy vấn
    const { min , max, ...others } = req.query;

    try {
       const hotelCount = await Hotel.countDocuments({ type: "hotel" })
       const villaCount = await Hotel.countDocuments({ type: "villa" })
       const resortCount = await Hotel.countDocuments({ type: "resort" })
        res.status(200).json([
            {type: "hotel", count: hotelCount},
            {type: "villa", count: villaCount},
            {type: "resort", count: resortCount}
        ]);
    } catch (error) {
        
    }
}

const getHotelRooms = async (req, res, next) => {
    
    try {
        const hotel = await Hotel.findById(req.params.id)

        const roomlist = await Promise.all(
            hotel.rooms.map(room => {
                return Room.findById(room); 
            })
        )

        res.status(200).json(roomlist);
    } catch (error) {
        
    }
}

module.exports = {
    createHotel,
    getHotelRooms
};