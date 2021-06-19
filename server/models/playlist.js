'use strict';

const mongoose = require('mongoose');

// const trackSchema = new mongoose.Schema({})

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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  tracks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "audio"
    }
  ],
  dateCreated: {
    type: Date,
    default: Date.now()
  },
});

module.exports = mongoose.model('playlist', playlistSchema);
