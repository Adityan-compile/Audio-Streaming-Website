var express = require('express');

/**
 * @alias express.Router()
 */
var router = express.Router();

var userController = require('../controllers/userController');
var audioController = require('../controllers/audioController');

var authenticator = require('../middleware/authenticate');

router.get('/', authenticator.authenticate, (req, res) => {
  res.send('index');
});

router.get('/search', (req, res) => {
  userController.search(req, res);
});

router.get('/artists', (req, res) => {
  userController.getArtists(req, res);
});

router.get('/tracks', (req, res) => {
  audioController.getTracks(req, res);
});

module.exports = router;
