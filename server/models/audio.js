const mongoose = require('mongoose');

const audioSchema = new mongoose.schema({
	title: String,
	image: String,
	dateCreated: Date,
	creatorId: String
});

const audioModel = mongoose.model('audioModel', audioSchema);

module.exports = audioModel;