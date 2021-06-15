"use strict";

const audio = require("../models/audio");
const playlist = require("../models/playlist");

/**
 * Get all Playlists of a User
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {undefined}
 */
exports.getPlaylists = (req, res) => {

  playlist
    .find()
    .then((playlists) => {
      playlists = _.shuffle(playlists);

      res.status(200).json({
        status: 200,
        playlists: playlists,
      });
    })
    .catch((err) => {
      res.sendStatus(500);
    });
};
