const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    city: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },

    // ngày tháng năm sinh
    dateofBirth: {
        type: Date,
        validate: {
            validator: (date) => {
                return date < new Date();
            },
            message: 'Ngày sinh phải nhỏ hơn ngày hiện tại.',
        },
    },

    //chcek xwem phai qtv hay k
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
    //cho phép bạn tự động tạo hai trường mới trong tài liệu của mình, createdAt và updatedAt
    {
        timestamps: true
    }
);

exports.User = mongoose.model("User", UserSchema);