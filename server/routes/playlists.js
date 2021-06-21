'use strict';

var express = require('express');
const { getPlaylists, newPlaylist, getPlaylist, addToPlaylist, removeFromPlaylist, deletePlaylist } = require('../controllers/playlistController');

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
* @route {PATCH} /music/add
* @method PATCH
* @function
* @module routes/index
* @param {String} path
* @param {Callback}
*/
router.patch("/music/add", authenticate, (req, res)=>{
    addToPlaylist(req, res);
});

/*
* @route {DELETE} /music/remove
* @method DELETE
* @function
* @module routes/index
* @param {String} path
* @param {Callback}
*/
router.delete("/music/remove", authenticate, (req, res)=>{
    removeFromPlaylist(req, res);
});

/*
* @route {DELETE} /delete
* @method DELETE
* @function
* @module routes/index
* @param {String} path
* @param {Callback}
*/
router.delete("/delete", authenticate, (req, res)=>{
    deletePlaylist(req, res);
});

module.exports = router;