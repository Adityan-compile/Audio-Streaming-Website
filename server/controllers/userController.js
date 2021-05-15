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
	if (query === null || query === undefined || query == "")
		return res.status(400).json({ status: 400, message: "" });
	await audio.find(
		{ title: { $regex: new RegExp(query, "i") } },
		(err, tracks) => {
			if (err) {
				return res
					.status(500)
					.json({ status: 500, message: "Search Failed" });
			}

			res.status(200);
			res.json({
				status: 200,
				results: tracks,
			});
		}
	);
};

exports.uploads = async (req, res) => {
	let user = req.user;
	await audio.find({ creatorId: user._id }, (err, uploads) => {
		if (err) return res.status(500);
		res.status(200).json({ status: 200, results: uploads });
	});
};

exports.getArtists = async (req, res) => {
	let count = Number(req.query.count);
	let artists = await user.aggregate([
		{
			$sample: {
				size: count,
			},
		},
	]);
	artists = artists.map(artist =>{
		return {
			_id: artist._id,
			name: artist.name,
			email: artist.email,
		}
	})
	res.status(200).json({ status: 200, artists: artists});
};
