'use strict';

const mongoose = require('mongoose');
const blueBird = require('bluebird');

/**
 * Connect to Database
 * @module config/database
 */

mongoose.promise = blueBird;

let URI = `${process.env.DB_HOST}/${process.env.DB_NAME}`;

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

module.exports = db;
