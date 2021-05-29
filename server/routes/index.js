'use strict';

var express = require('express');

/**
 * @alias express.Router()
 */
var router = express.Router();

var userController = require('../controllers/userController');
var audioController = require('../controllers/audioController');

var authenticator = require('../middleware/authenticate');

/**
 * @name Index
 * @route {GET} /
 * @method GET
 * @function
 * @module routes/index
 * @param {String} path
 * @param {Callback}
 */
router.get('/', authenticator.authenticate, (req, res) => {
  res.send('index');
});

/**
 * @name Search
 * @route {GET} /search
 * @method GET
 * @function
 * @module routes/index
 * @param {String} path
 * @param {Callback} search
 * @urlparam {String} query
 */
router.get('/search', (req, res) => {
  userController.search(req, res);
});

/**
 * @name Artists
 * @route {GET} /artists
 * @method GET
 * @function
 * @module routes/index
 * @param {String} path
 * @param {Callback} getArtists
 * @urlparam {String} count
 */
router.get('/artists', (req, res) => {
  userController.getArtists(req, res);
});

/**
 * @name Tracks
 * @route {GET} /tracks
 * @method GET
 * @function
 * @module routes/index
 * @param {String} path
 * @param {Callback} getTracks
 * @urlparam {Number} sort optional
 */
router.get('/tracks', (req, res) => {
  audioController.getTracks(req, res);
});

module.exports = router;
