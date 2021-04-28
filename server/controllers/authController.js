var user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const functions = require("../helpers/functions");

exports.login = async (req, res) => {
   let userData = req.body;
   let foundUser = await user.findOne({ email: userData.email });
   if (foundUser) {
      await bcrypt.compare(userData.password, foundUser.password, (err, status) => {
         if(err) return res.sendStatus(401);
         if (status) {
            foundUser.password = null;
            var accessToken = jwt.sign(
               foundUser.toJSON(),
               process.env.ACCESS_TOKEN_KEY
            );
            res.status(200);
            res.json({
               status: 200,
               message: "Authentication Successful",
               accessToken: accessToken,
               user: foundUser,
            });
         } else {
            res.status(401);
            res.json({
               status: 401,
               message: "Authentication Failed",
            });
         }
      });
   } else {
      res.status(401);
      res.json({
         status: 401,
         message: "Authentication Failed",
      });
   }
};

exports.signUp = async (req, res) => {
   let userData = req.body;
   if (
      userData.name &&
      userData.email &&
      userData.password &&
      functions.validate(userData.email)
   ) {
      userData.password = await bcrypt.hash(userData.password, 10);
      let newUser = new user({
         name: userData.name,
         email: userData.email,
         password: userData.password,
      });
      newUser.save(async (err, newUser) => {
         if (err) {
            console.error(err);
            res.status(401);
            res.json({
               status: 401,
               message: "Error Creating User",
            });
         } else {
            newUser.password = null;
            newUser = newUser.toJSON();
            accessToken = await jwt.sign(newUser, process.env.ACCESS_TOKEN_KEY);
            res.status(200);
            res.json({
               status: 200,
               message: "User Created Successfully",
               accessToken: accessToken,
               user: newUser,
            });
         }
      });
   } else {
      res.status(401);
      res.json({
         status: 401,
         message: "Error Creating User",
      });
   }
};
