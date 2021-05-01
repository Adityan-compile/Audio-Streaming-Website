var user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const functions = require("../helpers/functions");


/**
 * Login user
 * @module controllers/authController
 * @param {require('express').Request} req 
 * @param {require('express').Response} res
 * @returns {undefined} 
 */
exports.login = async (req, res) => {
   let userData = req.body;
   let foundUser = await user.findOne({ email: userData.email });
   if (foundUser) {
      await bcrypt.compare(
         userData.password,
         foundUser.password,
         async (err, status) => {
            if (err) return res.sendStatus(401);
            if (status) {
               foundUser.password = null;
               var accessToken = await functions.generateAccessToken(
                  foundUser.toJSON(),
                  "15m"
               );
               var refreshToken = await functions.generateRefreshToken(
                  foundUser.toJSON()
               );

               if (refreshToken === null || accessToken === null){
                  return res
                     .status(401)
                     .json({ status: 401, message: "Authentication Failed" });
               }

               res.status(200);
               res.json({
                  status: 200,
                  message: "Authentication Successful",
                  accessToken: accessToken,
                  refreshToken: await refreshToken,
                  user: foundUser,
               });
            } else {
               res.status(401);
               res.json({
                  status: 401,
                  message: "Authentication Failed",
               });
            }
         }
      );
   } else {
      res.status(401);
      res.json({
         status: 401,
         message: "Authentication Failed",
      });
   }
};


/**
 * SignUp User
 * @module controllers/authController
 * @param {require('express').Request} req 
 * @param {require('express').Response} res
 * @returns {undefined} 
 */
exports.signUp = async (req, res) => {
   let userData = req.body;

   let foundUser = await user.find({ email: userData.email });

   if (foundUser) {
      foundUser.password = null;
      return res.status(409).json({
         status: 409,
         message: "User already Exists",
         user: foundUser,
      });
   }

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
            res.status(401);
            res.json({
               status: 401,
               message: "Error Creating User",
            });
         } else {
            newUser.password = null;
            newUser = newUser.toJSON();
            let accessToken = await functions.generateAccessToken(
               newUser,
               "15m"
            );

            let refreshToken = await functions.generateRefreshToken(newUser);
            if (refreshToken === null || accessToken === null) {
               return res
                  .status(401)
                  .json({ status: 401, message: "Error Creating User" });
            }

            res.status(200);
            res.json({
               status: 200,
               message: "User Created Successfully",
               accessToken: accessToken,
               refreshToken: refreshToken,
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

/**
 * Regenerate Access Token
 * @module controllers/authController
 * @param {require('express').Request} req 
 * @param {require('express').Response} res
 * @returns {undefined} 
 */
exports.regenerateToken = async (req, res) => {
   let token = req.body;
   if (!token) res.sendStatus(401);
   let user = await functions.verifyToken(token);
   if (user === null){
      return res
         .status(403)
         .json({ status: 401, message: "Refresh Token Invalid" });
   }

    user = {
      user.name,
      user.email,
      user._id
    }

   let newToken = await functions.generateAccessToken(user, "15m");
 
   if(newToken === null)  return res.status(401).json({status: 401, message: "Access Token Generation Failed"});

   res.status(200).json({
      status: 200,
      message: "Token Regenerated Successfully",
      accessToken: newToken,
      refreshToken: token,
   });
};

/**
 * Logout User
 * @module controllers/authController
 * @param {require('express').Request} req 
 * @param {require('express').Response} res
 * @returns {undefined} 
 */
exports.logout = async (req, res) => {
   let refreshToken = req.body;
   await token.delete({token: refreshToken}, (err, deletedToken)=>{
      if (err) res.status(204).json({status: 204, message: "Logout Failed"});
      res.status(204).json({status: 204, message: "Logout Successful"});
   });
};