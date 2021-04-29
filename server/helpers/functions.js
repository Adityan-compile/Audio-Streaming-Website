const validator = require("email-validator");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const token = require("../models/token");


/**
 * @returns {String}
 */
exports.generateId = () => {
	return uuidv4();
};

/**
 * 
 * @param {String} email 
 * @returns {Boolean}
 */
exports.validate = (email) => {
	return validator.validate(email);
};

/**
 * @returns {Date}
 */
exports.getFormattedDate = () => {
	let dateObj = new Date();

	const date = ("0" + date_ob.getDate()).slice(-2);

	const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

	const year = date_ob.getFullYear();

	return date + "/" + month + "/" + year;
};


/**
 * 
 * @param {Object} user 
 * @param {String} expiry 
 * @returns {Promise}
 */
exports.generateAccessToken = async (user, expiry) => {
	return new Promise(async (resolve, reject) => {
		await jwt.sign(
			user,
			process.env.ACCESS_TOKEN_KEY,
			{
				expiresIn: expiry,
			},
			(err, generatedToken) => {
				if (err) return resolve(null);
				resolve(generatedToken);
			}
		);
	});
};

/**
 * 
 * @param {Object} user
 * @returns {Object} 
 */
exports.generateRefreshToken = async (user) => {
	return new Promise(async (resolve, reject) => {
		await jwt.sign(
			user,
			process.env.REFRESH_TOKEN_KEY,
			(err, generatedToken) => {
				if (err) return resolve(null);
				let newToken = new token({ token: generatedToken });
				newToken.save(async (err, savedToken) => {
					if (err) {
						console.log(err);
						resolve(null);
					}
					resolve(savedToken.token);
				});
			}
		);
	});
};

/**
 * 
 * @param {String} refreshToken 
 * @returns {Promise}
 */
exports.verifyToken = async (refreshToken) => {
	return new Promise(async (resolve, reject) => {
		let savedToken = await token.find({ token: refreshToken });
		if (savedToken) {
			jwt.verify(
				refreshToken,
				process.env.REFRESH_TOKEN_KEY,
				(err, user) => {
					if (err) return resolve(null);
					resolve(user);
				}
			);
		} else {
			resolve(null);
		}
	});
};
