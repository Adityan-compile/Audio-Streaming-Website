const validator = require("email-validator");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const token = require("../models/token");

exports.generateId = () => {
	return uuidv4();
};

exports.validate = (email) => {
	return validator.validate(email);
};

exports.getFormattedDate = () => {
	let dateObj = new Date();

	const date = ("0" + date_ob.getDate()).slice(-2);

	const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

	const year = date_ob.getFullYear();

	return date + "/" + month + "/" + year;
};

exports.generateAccessToken = async(user, expiry)=>{
	return await jwt.sign(user, process.env.ACCESS_TOKEN_KEY, {expiresIn: expiry});
}

exports.generateRefreshToken = async(user)=>{
	let generatedToken = await jwt.sign(user, process.env.ACCESS_TOKEN_KEY);
	let newToken = new token({token: generatedToken});
	newToken.save((err, token)=>{
		if(err) return null;
		return generatedToken;
	});
}