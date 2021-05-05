var audio = require('../models/audio');

/**
 * Search for Audio Files
 * @param {require('express').Request} req 
 * @param {require('express').Response} res 
 * @returns {undefined}
 */
exports.search = async (req, res) => {
	let query = req.query;
	if(query == null) return res.sendStatus(400);
	await audio.find({title:{$regex: new RegExp(query, 'i'), $options: 'i'}},(err, tracks)=>{
		if(err) return res.sendStatus(500);
		tracks = tracks.toArray();
		res.status(200);
		res.json({
			status: 200,
			tracks: tracks
		});
	});
}