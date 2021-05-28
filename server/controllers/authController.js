var user = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const functions = require('../helpers/functions');
const Blob = require("cross-blob");
const env = process.env;

console.log(process.env.SECURE);

const byteSize = str => new Blob([str]).size;

/**
 * Login user
 * @module controllers/authController
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {undefined}
 */
exports.login = async (req, res) => {
  let userData = req.body;
  let foundUser = await user.findOne({email: userData.email});
  if (foundUser) {
    await bcrypt.compare(
      userData.password,
      foundUser.password,
      async (err, status) => {
        if (err) return res.sendStatus(401);
        if (status) {
          foundUser.password = undefined;
          var accessToken = await functions.generateAccessToken(
            foundUser.toJSON(),
            '15m'
          );
          var refreshToken = await functions.generateRefreshToken(
            foundUser.toJSON()
          );

          if (refreshToken === null || accessToken === null) {
            return res
              .status(401)
              .json({status: 401, message: 'Authentication Failed'});
          }
          
          foundUser.password = undefined;

          console.log("Refresh Token: "+byteSize(refreshToken), "Access Token: "+byteSize(accessToken), "User: "+byteSize(JSON.stringify(foundUser)));

          res.cookie("refresh_token", refreshToken, {maxAge: 31556952000, sameSite: env.SAME_SITE, secure: env.SECURE, httpOnly: env.HTTP_ONLY, path: '/'});
          res.cookie("access_token", accessToken, {maxAge: 3600000, httpOnly: env.HTTP_ONLY, sameSite: env.SAME_SITE, secure: env.SECURE, path: '/'});
          res.cookie("user", JSON.stringify(foundUser), {maxAge: 31556952000, sameSite: env.SAME_SITE, secure: env.SECURE, httpOnly: env.HTTP_ONLY, path: '/'});
          res.status(200);
          res.json({
            status: 200,
            message: 'Authentication Successful',
            user: foundUser,
          });
        } else {
          res.status(401);
          res.json({
            status: 401,
            message: 'Authentication Failed',
          });
        }
      }
    );
  } else {
    res.status(401);
    res.json({
      status: 401,
      message: 'Authentication Failed',
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
  console.log(userData);
  let count = await user.countDocuments({email: userData.email});
  if (count > 0) {
    return res.status(409).json({
      status: 409,
      message: 'User already Exists',
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
        console.log(err);
        res.status(401);
        res.json({
          status: 401,
          message: 'Error Creating User',
        });
      } else {
        newUser.password = undefined;
        newUser = newUser.toJSON();
        let accessToken = await functions.generateAccessToken(newUser, '15m');

        let refreshToken = await functions.generateRefreshToken(newUser);
        if (refreshToken === null || accessToken === null) {
          return res
            .status(401)
            .json({status: 401, message: 'Error Creating User'});
        }
        res.cookie("refresh_token", refreshToken, {maxAge: 31556952000, httpOnly: env.HTTP_ONLY, sameSite: env.SAME_SITE, secure: true, path: '/'});
        res.cookie("access_token", accessToken, {maxAge: 3600000, httpOnly: env.HTTP_ONLY, sameSite: env.SAME_SITE, secure: env.SECURE, path: '/'});
        res.cookie("user", JSON.stringify(newUser), {maxAge: 31556952000, sameSite: env.SAME_SITE, secure: env.SECURE, path: '/'});
        res.status(200);
        res.json({
          status: 200,
          message: 'User Created Successfully',
          user: newUser,
        });
      }
    });
  } else {
    res.status(401);
    res.json({
      status: 401,
      message: 'Error Creating User',
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
// exports.regenerateToken = async (req, res) => {
//    let token = req.body;
//    if(!token) return res.sendStatus(401);
//    let verifiedUser = await functions.verifyToken(token);
//    if(verifiedUser == null){
//          return res.status(403).json({ status: 403, message: "Refresh Token Invalid" });
//    }

// }

exports.regenerateToken = async (req, res) => {
  let token = req.body.refreshToken;
  if (!token) res.sendStatus(401);
  let verifiedUser = await functions.verifyToken(token);
  if (verifiedUser === null) {
    return res
      .status(401)
      .json({status: 401, message: 'Refresh Token Invalid'});
  }

  let newToken = await functions.generateAccessToken(verifiedUser, '30m');

  if (newToken === null)
    return res
      .status(401)
      .json({status: 401, message: 'Access Token Generation Failed'});

  res.status(200).json({
    status: 200,
    message: 'Token Regenerated Successfully',
    accessToken: newToken,
    refreshToken: token
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
  await token.delete({token: refreshToken}, (err, deletedToken) => {
    if (err){
      res.status(204).json({status: 204, message: 'Logout Failed'});
  }
    res.clearCookie("refresh_token");
    res.clearCookie("access_token");
    res.clearCookie("user");
    res.status(200).json({status: 200, message: 'Logout Successful'});
  });
};
