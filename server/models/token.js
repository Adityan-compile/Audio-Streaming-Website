const mongoose = require('mongoose');

/**
 * Token Model
 *
 * @module models/token
 *
 * @param {String} token required
 * @returns {Object}
 */
const tokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('token', tokenSchema);
