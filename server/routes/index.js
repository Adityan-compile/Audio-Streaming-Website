var express = require('express');
var router = express.Router();

router.get('/', (req, res)=> {
	res.json({
		status: 200,
		message: "Welcome"
	});
});

module.exports = router;
