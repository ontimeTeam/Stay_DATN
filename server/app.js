const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

//routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const hotelRouter = require('./routes/hotels');
const hotelDetailRouter = require('./routes/hotelsdetail');
const roomRouter = require('./routes/rooms');

const app = express();
dotenv.config();
app.use(cors());

const jwt = require('jsonwebtoken'); // Sử dụng thư viện jsonwebtoken

const your_jwt_secret_key = process.env.JWT_SECRET_KEY; // Lấy khóa từ biến môi trường

// Bây giờ bạn có thể sử dụng your_jwt_secret_key để tạo và xác minh JWT

// database connect
mongoose.connect("mongodb://localhost:27017/apihotelbooking", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("connect mongodb");
  })
  .catch(err => {
    console.log(err);
  });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/hotel', hotelRouter);
app.use('/api/hoteldetail', hotelDetailRouter);
app.use('/api/room', roomRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
