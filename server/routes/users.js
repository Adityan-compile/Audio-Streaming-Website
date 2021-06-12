'use strict';

var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');
var authenticator = require('../middleware/authenticate');

router.get('/uploads', authenticator.authenticate, (req, res) => {
  userController.uploads(req, res);
});

router.get('/details', authenticator.authenticate, (req, res)=>{
  userController.getUserDetails(req, res);
});

module.exports = router;
