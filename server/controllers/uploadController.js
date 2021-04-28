const audio = require("../models/audio");
const path = require("path");
const functions = require("../helpers/functions");


exports.upload = async (req, res) => {
	if(!req.files || Object.keys(req.files).length === 0) return res.sendStatus(409);
	let imageFile = req.files.image;
	let audioFile = req.files.audio;
	let data = req.body;

	let audioObject = new audio({
		title: data.title,
		image: `${functions.generateId()}-${data.userId}.${path.extName(imageFile)}`,
		audio: `${functions.generateId()}-${data.userId}.${path.extName(audioFile)}`,


	});
}
