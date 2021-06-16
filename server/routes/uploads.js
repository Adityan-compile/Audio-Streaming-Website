'use strict';

const express = require('express');

/**
 * @alias express.Router
 */
const router = express.Router();

const { upload, deleteFile } = require('../controllers/uploadController');

const { authenticate } = require('../middleware/authenticate');

const { sanitize } = require("../middleware/sanitize");


/**
 * @name Upload
 * @route {POST} /uploads/tracks/new
 * @method POST
 * @function
 * @module routes/uploads
 * @param {String} path
 * @param {Callback} upload
 * @bodyparam {File} audio
 * @bodyparam {File} image
 */
router.post('/tracks/new', authenticate, (req, res) => {
  upload(req, res);
});

/**
 * @name Upload
 * @route {POST} /uploads/tracks/delete
 * @method POST
 * @function
 * @module routes/uploads
 * @param {String} path
 * @param {Callback} upload
 * @bodyparam {File} audio
 * @bodyparam {File} image
 */
router.get('/tracks/delete', authenticate, (req, res) => {
  deleteFile(req, res);
});

module.exports = router;
