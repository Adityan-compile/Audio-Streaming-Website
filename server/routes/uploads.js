const express = require("express");

/**
 * @alias express.Router
 */
const router = express.Router();

const uploadController = require("../controllers/uploadController");
const authenticator = require("../middleware/authenticate");


/**
 * @name Upload
 * @route {POST} /uploads/files/new
 * @method POST
 * @function
 * @module routes/uploads
 * @param {String} path 
 * @param {Callback} upload
 * @bodyparam {File} audio
 * @bodyparam {File} image
 */
router.post("/files/new", authenticator.authenticate, (req, res) => {
	uploadController.upload(req, res);
});


module.exports = router;
