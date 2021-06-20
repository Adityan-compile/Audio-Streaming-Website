'use strict';

var express = require('express');
const { getPlaylists, newPlaylist, getPlaylist, addToPlaylist, removeFromPlaylist } = require('../controllers/playlistController');

/**
 * @alias express.Router()
 */
var router = express.Router();


var { authenticate } = require('../middleware/authenticate');

const { sanitize } = require("../middleware/sanitize");


/**
 * @name All Playlists
 * @route {GET} /
 * @method GET
 * @function
 * @module routes/index
 * @param {String} path
 * @param {Callback}
 */
router.get("/all", authenticate, (req, res)=>{
    getPlaylists(req, res);
});

/*
* @route {GET} /view
* @method GET
* @function
* @module routes/index
* @param {String} path
* @param {Callback}
*/
router.get("/get", authenticate, (req, res)=>{
   getPlaylist(req, res);
});

/**
 * @name New Playlist
 * @route {GET} /
 * @method GET
 * @function
 * @module routes/index
 * @param {String} path
 * @param {Callback}
 */
 router.post("/new", authenticate, (req, res)=>{
    newPlaylist(req, res);
});

/*
* @route {GET} /view
* @method GET
* @function
* @module routes/index
* @param {String} path
* @param {Callback}
*/
router.post("/music/add", authenticate, (req, res)=>{
    addToPlaylist(req, res);
});

/*
* @route {POST} /view
* @method POST
* @function
* @module routes/index
* @param {String} path
* @param {Callback}
*/
router.post("/music/remove", authenticate, (req, res)=>{
    removeFromPlaylist(req, res);
});

module.exports = router;