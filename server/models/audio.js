const mongoose = require('mongoose');

const audioSchema = new mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	audio: {
		type: String,
		required: true
	},
	dateCreated: {
		type: Date,
		default: Date.now()
	},
	creatorId: {
		type: mongoose.Types.ObjectId,
		ref: 'user'
	},
	artistName: {
		type: String,
		required: true
	},
});

const audioModel = mongoose.model('audioModel', audioSchema);

module.exports = audioModel;