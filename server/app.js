var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const upload = require('express-fileupload');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');

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
var db = require('./config/connection');

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

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   res.status(err.status || 500);
//   res.json({
//   	"status": 500,
//   	"message": "500 Internal Server Error"
//   });
// });

module.exports = app;
