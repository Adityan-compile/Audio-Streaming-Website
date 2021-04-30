const validator = require("email-validator");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const token = require("../models/token");


/**
 * Generate unique id
 * 
 * @module helpers/functions
 * 
 * @returns {String|uuid}
 */
exports.generateId = () => {
	return uuidv4();
};

/**
 * Validate Email Address
 * 
 * @module helpers/functions
 * 
 * @param {String} email 
 * @returns {Boolean}
 * @example 
 *       let email = "test@example.com"
 *       validate(email)
 *       //returns true
 */
exports.validate = (email) => {
	return validator.validate(email);
};

/**
 * Get Formatted Date
 * 
 * @module helpers/functions
 * 
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
 * Generate Access Token
 * 
 * @module helpers/functions
 * 
 * @param {Object} user 
 * @param {String} expiry 
 * @returns {Promise}
 * 
 * @example
 *      let user = {
 *          name:"Test",
 *          email: "test@example.com",
 *      };
 *      let expiry = "10m";
 *      generateAccessToken(user, expiry);
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
 * Generate Refresh Token
 * 
 * @module helpers/functions
 * 
 * @param {Object} user
 * @returns {Promise}
 * 
 * @example
 *     let user = {
 *          name:"Test",
 *          email: "test@example.com",
 *      };
 *     generateRefreshToken(user);
 *  
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
 * Verify Refresh Token
 * 
 * @module helper/functions
 * 
 * @param {String} refreshToken 
 * @returns {Promise}
 * 
 *@example
 *     let token = "YOUR_REFRESH_TOKEN";
 *      verifyToken(token);
 * 
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
