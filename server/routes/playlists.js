'use strict';

var express = require('express');
const { getPlaylists } = require('../controllers/playlistController');

/**
 * @alias express.Router()
 */
var router = express.Router();


var { authenticate } = require('../middleware/authenticate');

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
router.get("/all", authenticate, (req, res)=>{
    getPlaylists(req, res);
});

module.exports = router;