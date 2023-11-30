const mongoose = require('mongoose')

const HotelSchema = new mongoose.Schema({
    hotelName: {
        type: String,
        required: true,
        unique: true,
    },

    // dia chi
    hotelAddress: {
        type: String,
        required: true,
    },

    hotelCity: {
        type: String,
        required: true,
    },

    phoneNumberHotel: {
        type: Number,
        required: true,
    },

    //phan hoi ve ks
    hotelFeedback: {
        type: String,
    },

    rooms: {
        type: [String],
    },

    //loai ks 5sao ...
    hotelRates: {
        type: Number,
        min: 0,
        max: 5,
    },

    // Khóa ngoại đến HotelDetail
    hotelDetail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HotelDetail',
    },
},
    //cho phép bạn tự động tạo hai trường mới trong tài liệu của mình, createdAt và updatedAt
    {
        timestamps: true
    }
);

exports.Hotel = mongoose.model("Hotel", HotelSchema);