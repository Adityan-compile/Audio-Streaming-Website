var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');


router.post('/login/', (req, res)=>{userController.login(req, res)});
router.post('/signup/', (req, res)=>{userController.signUp(req, res)});

module.exports = router;
