const express = require('express');

/**
 * @alias express.Router
 */
const router = express.Router();

const uploadController = require('../controllers/uploadController');
const authenticator = require('../middleware/authenticate');

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
router.post('/tracks/new', authenticator.authenticate, (req, res) => {
  uploadController.upload(req, res);
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
router.get('/tracks/delete', authenticator.authenticate, (req, res) => {
  uploadController.deleteFile(req, res);
});

module.exports = router;
