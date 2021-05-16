const audio = require("../models/audio");
var _ = require("lodash");

exports.getTracks = async (req, res) => {
	await audio
		.find()
		.then((tracks) => {
			tracks = _.shuffle(tracks);

			res.status(200).json({ status: 200, tracks: tracks });
		})
		.catch((err) => {
			return res
				.status(500)
				.json({ status: 500, message: "Search Error", error: err });
		});
};
