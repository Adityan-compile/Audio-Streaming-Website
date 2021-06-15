'use strict';

const mongoose = require('mongoose');

/**
 * User Model
 *
 * @module models/playlist
 *
 * @param {String} title required
 * @param {String} creatorId required
 * @param {String} tracks 
 * @param {Date} dateCreated 
 *
 * @returns {Object}
 */
const playlistSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  creatorId: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
  },
  tracks: {
    type: Array,
    default: [],
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  },
});

module.exports = mongoose.model('playlist', playlistSchema);
