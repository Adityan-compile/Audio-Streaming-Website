var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

router.get('/search',(req, res)=>{
	userController.search(req, res);
});

module.exports = router;
