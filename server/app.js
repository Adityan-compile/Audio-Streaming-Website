'use strict';

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const fs = require('fs');
const stream = require('stream')
const cookieParser = require('cookie-parser');
const upload = require('express-fileupload');
const logger = require('morgan');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const sanitizer = require('./middleware/sanitize');
const authenticator = require('./middleware/authenticate');

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

if(!fs.existsSync(path.resolve("./Uploads"))){
  console.log('Uploads Directory does not Exist.Creating Uploads Directory');
  fs.mkdirSync(path.resolve("./Uploads"));
  fs.mkdirSync(path.resolve("./Uploads/Audio"));
  fs.mkdirSync(path.resolve("./Uploads/Images"));
  fs.mkdirSync(path.resolve("./Uploads/Profile"));
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
app.use(express.static(path.join(__dirname, 'views')));
app.use(
  upload({
    safeFileNames: true,
    preserveExtension: true,
  })
);
app.use(
  cors({
    credentials: process.env.CREDENTIALS,
    origin: process.env.CLIENT,
  })
);

// app.use(sanitizer.clean());

app.use(
  history({
    verbose: true,
  })
);

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/uploads', uploadsRouter);
app.use('*/assets/images', express.static('Uploads/Images'));

//Authenticate and send profile images to client
app.use('*/assets/images/profile', authenticator.authenticate);
app.use('*/assets/images/profile', express.static('Uploads/Profile'));

// Authenticate and send audio files to client 
app.use('*/streams/audio', authenticator.authenticate);
app.use('*/streams/audio', express.static('Uploads/Audio'));

//Serve FrontEnd App
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// serve static assets
// app.get('/assets/images/:id', (req, res)=>{
//     let id = req.params.id;
//     res.sendFile(path.join(__dirname, `Uploads/Images/${id}`));
// });

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
