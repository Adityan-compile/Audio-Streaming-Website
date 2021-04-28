const validator = require("email-validator");
const {v4: uuidv4} = require('uuid');

exports.generateId = () => {
	return uuidv4();
};

exports.validate = (email)=>{
   return validator.validate(email);
}

