const mongoose = require('mongoose');

/**
 * @param {String} name required
 * @param {String} email required
 * @param {String} password required
 * 
 * @returns {Object}
 */
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});



module.exports = mongoose.model('user', userSchema);
