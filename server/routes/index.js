'use strict';

const express = require('express');

/**
 * @alias express.Router()
 */
const router = express.Router()
const { search, getArtists, getUserDetails } = require('../controllers/userController');
const { getTrackById, getTracks } = require('../controllers/audioController');

const { authenticate } = require('../middleware/authenticate');

const { sanitize } = require("../middleware/sanitize");


/**
 * @name Index
 * @route {GET} /
 * @method GET
 * @function
 * @module routes/index
 * @param {String} path
 * @param {Callback}
 */
router.get('/', (req, res) => {
  res.json({ 
    status: 200,
    message: "Welcome to the Track Wiz API. Login or Signup to Get Started"
   });
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
router.get('/search', authenticate, (req, res) => {
     search(req, res);
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
router.get('/artists', authenticate, (req, res) => {
   getArtists(req, res);
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
router.get('/tracks', authenticate, (req, res) => {
  getTracks(req, res);
});

router.get('/tracks/get/', authenticate, (req, res)=>{
  getTrackById(req, res);
});

module.exports = router;

