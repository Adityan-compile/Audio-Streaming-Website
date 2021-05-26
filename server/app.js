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
const uploadsRouter = require('./routes/uploads');

const errorHandler = require('./middleware/errorHandler');

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
app.use(
  upload({
    safeFileNames: true,
    preserveExtension: true,
  })
);
app.use(cors({credentials: true}));

app.use('/api/v1', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/uploads', uploadsRouter);

// catch error and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (req, res, next) {
  next(createError(500));
});

//error handler
app.use((err, req, res, next) => {
  errorHandler.handler(err, req, res, next);
});

module.exports = app;
