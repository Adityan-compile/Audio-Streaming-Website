var audio = require("../models/audio");
var user = require("../models/user");
/**
 * Search for Audio and Artists
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {undefined}
 */
exports.search = async (req, res) => {
	let query = req.query;
	if (query === null || query === undefined || query == '') return res.status(400).json({ status: 400, message: "" });
	await audio.find(
		{ title: { $regex: new RegExp(query, "i")}},
		(err, tracks) => {
			if (err) return res.status(500).json({ status: 500, message: "Search Failed" , error: err});
			user.find(
				{ name: { $regex: new RegExp(query, "i")}},
				(error, artists) => {
					if (error) {
						res.status(200);
						res.json({
							status: 200,
							results: tracks,
						});
					} else {
						artists = artists.map(artist =>{
							return artist.name;
						})
						let results = artists.concat(tracks);
						results.sort();
						res.status(200);
						res.json({
							status: 200,
							results: tracks,
						});
					}
				}
			);
		}
	);
};
