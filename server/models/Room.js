const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({

    roomCode: {
        type: String,
        required: true,
        unique: true,
    },

    roomType: {
        type: String,
        required: true,
    },

    roomImage: {
        type: String,
        required: true,
    },

    roomPrice: {
        type: Number,
        required: true,
    },

    //trang thai phong
    roomStatus: {
        type: String,
        required: true,
    },

    maxPeople : {
        type: Number,
        required: true,
    },

    // Khóa ngoại đến HotelDetail
    roomDetail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RoomDetail',
        //phong co noi bat hay k
        roomFeatured: {
            type: Boolean,
            default: false,
        },
        //dich vu giai tri cuaphong
        roomEntertain: {
            type: String,
            required: true,
        },
        //tien nghi
        roomConvinient: {
            type: String,
            required: true,
        }
    },

   
},
    //cho phép bạn tự động tạo hai trường mới trong tài liệu của mình, createdAt và updatedAt
    {
        timestamps: true
    }
);

exports.Room = mongoose.model("Room", RoomSchema);