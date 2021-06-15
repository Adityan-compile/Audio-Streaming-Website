'use strict';

var express = require('express');
const playlistController = require('../controllers/playlistController');

/**
 * @alias express.Router()
 */
var router = express.Router();


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
router.get("/all", authenticator.authenticate, (req, res)=>{
    playlistController.getPlaylists(req, res);
});

module.exports = router;