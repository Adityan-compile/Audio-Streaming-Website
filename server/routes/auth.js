var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController');


router.post('/login', (req, res)=>{authController.login(req, res)});
router.post('/signup', (req, res)=>{authController.signUp(req, res)});

module.exports = router;