'use strict';

const mongoose = require('mongoose');

/**
 * User Model
 *
 * @module models/user
 *
 * @param {String} name required
 * @param {String} email required
 * @param {String} password required
 *
 * @returns {Object}
 */
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  }
});

module.exports = mongoose.model('user', userSchema);
