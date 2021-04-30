const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const upload = require('express-fileupload');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

var app = express();

//Configure environment variables
var env = require('dotenv').config();

if (env.error) {
  console.log('Error Loading Environment Variables');
  throw env.error;
} else {
  console.log('Environment Variables Loaded Successfully');
}

//Configure Database connection
var db = require('./config/database');

db.on('open', () => {
  console.log('Database connected Successfully');
});

db.on('error', (err) => {
  console.log('Error connecting to Database');
  console.log(err);
  process.exit(1);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(upload());
app.use(cors({
	optionsSuccessStatus: 200
}));

app.use('/api/v1', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/auth', authRouter);

// catch error and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (req, res, next) {
  next(createError(500));
});

//error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
  	"status": 500,
  	"message": "500 Internal Server Error"
  });
});

module.exports = app;
