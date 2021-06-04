'use strict';

const mongoose = require('mongoose');

/**
 * Audio Model
 *
 * @module models/audio
 *
 * @param {String} title required
 * @param {String} image required
 * @param {String} audio required
 * @param {Number} year
 * @param {String} creatorId required
 * @param {String} artistName required
 *
 * @returns {Object}
 */
const audioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  audio: {
    type: String,
    required: true,
  },
  yearCreated: {
    type: Number,
    required: true,
  },
  creatorId: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
  },
  artistName: {
    type: String,
    required: true,
  },
});

const audioModel = mongoose.model('audio', audioSchema);

module.exports = audioModel;
