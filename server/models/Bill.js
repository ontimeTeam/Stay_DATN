const mongoose = require('mongoose')

const BillSchema = new mongoose.Schema({

    dateCheckin: {
        type: Date,
        required: true,
    },

    dateCheckout: {
        type: Date,
        required: true,
    },

    billInfo: {
        type: String,
        required: true,
    },

    billMonney: {
        type: Number,
        required: true,
    },

    // Khóa ngoại đến User
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',// Reference to the "User" model
    },

    //thanh toan
    paymentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PaymentID',

        //ngay o lai
        dayStay: {
            type: Date,
            default: false,
        },
        //so khach
        guest: {
            type: Number,
            required: true,
        },

        //gia khi o lai may dem chang han
        priceStay: {
            type: String,
            required: true,
        },

        //thue va phi
        taxAndFee: {
            type: String,
        },
        
        method: {
            type: String,
        },

        //tong tien
        total:{
            type: String,
        }
    },
   
},
    //cho phép bạn tự động tạo hai trường mới trong tài liệu của mình, createdAt và updatedAt
    {
        timestamps: true
    }
);

export default mongoose.model("Bill", BillSchema);