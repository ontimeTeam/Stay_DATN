const mongoose = require('mongoose')

const HotelDetailSchema = new mongoose.Schema({
    hotelImage: {
        type: String,
    },
    //khach san co noi bat hay k
    hotelFeatured: {
        type: Boolean,
        default: false,
    },
    //mo ta ks
    hotelDescription: {
        type: String,
        required: true,
    },
    //vi tri ks
    hotelLocation: {
        type: String,
        required: true,
    }
},
     //cho phép bạn tự động tạo hai trường mới trong tài liệu của mình, createdAt và updatedAt
     {
        timestamps: true
    }
);

exports.HotelDetail = mongoose.model("HotelDetail", HotelDetailSchema);