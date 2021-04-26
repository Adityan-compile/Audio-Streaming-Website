const mongoose = require('mongoose');

const userSchema = new mongoose.schema({
	name: String,
	email: String,
	password: String,
	creator: Boolean
});

const userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;
