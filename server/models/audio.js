const mongoose = require('mongoose');

const audioSchema = new mongoose.Schema({
	title: String,
	image: String,
	audio: String,
	dateCreated: Date,
	creatorId: String,
	artistName: String,
});

const audioModel = mongoose.model('audioModel', audioSchema);

module.exports = audioModel;