const audio = require("../models/audio");
const path = require("path");
const functions = require("../helpers/functions");

/**
 * Upload Files
 * @module controllers/uploadController
 * @param {require('express').Request} req 
 * @param {require('express').Response} res 
 * @returns {undefined}
 */
exports.upload = async (req, res) => {
	if(!req.files || Object.keys(req.files).length === 0) return res.sendStatus(409);
	let imageFile = req.files.image;
	let audioFile = req.files.audio;
	let data = req.body;
    let fileId = functions.generateId();

	let audioObject = new audio({
		title: data.title,
		image: `${fileId}-${data.userId}.${path.extName(imageFile)}`,
		audio: `${fileId}-${data.userId}.${path.extName(audioFile)}`,
		creatorId: req.user._id,
		artistName: data.artist
	});

	audioObject.save(async (err, newAudio)=>{
		if(err) return res.status(500).json({status: 500, message: "File Upload failed"});

		await imageFile.mv(`${__dirname}/${process.env.UPLOAD_PATH}/${process.env.IMAGE_FOLDER}/${newAudio.image}`,async (err)=>{
			if(err) return res.status(422).json({status: 422, message: "File Upload failed"});
		await audioFile.mv(`${__dirname}/${process.env.UPLOAD_PATH}/${process.env.AUDIO_FOLDER}/${newAudio.audio}`, (error)=>{
			if(error) return res.status(422).json({status: 422, message: "File Upload failed"});
			res.status(201).json({status: 201, message: "File Upload success"});
		});
		});

	});
}
