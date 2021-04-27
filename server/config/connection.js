const mongoose = require('mongoose');
const blueBird = require('bluebird');

mongoose.promise = blueBird;

mongoose.connect(`${process.env.DB_HOST}/${process.env.DB_NAME}`, { useNewUrlParser: true , useUnifiedTopology: true });

const db = mongoose.connection;

module.exports = db;