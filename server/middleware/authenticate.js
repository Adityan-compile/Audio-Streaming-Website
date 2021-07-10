"use strict";

const jwt = require("jsonwebtoken");
const functions = require("../helpers/functions");

let env = process.env;

/**
 * @name Authenticate
 * @module middleware/authenticate
 * @function
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @param {require('express').NextFunction} next
 * @return {undefined}
 */
module.exports.authenticate = async (req, res, next) => {
  const accessToken = req.cookies.access_token;
  const refreshToken = req.cookies.refresh_token;

  if(!req.cookies.user) return res.sendStatus(401);

  const user = JSON.parse(req.cookies.user);
  
  if (accessToken && refreshToken) {
    await jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_KEY,
      async (err, foundUser) => {
        if (err) {
          functions.verifyToken(refreshToken).then((token) => {
            if (user) {
              functions.generateAccessToken(user, "60m").then((newToken) => {
                console.log("New Token:", newToken)
                res.cookie("access_token", newToken, {
                  maxAge: 3600000,
                  httpOnly: env.HTTP_ONLY,
                  sameSite: env.SAME_SITE,
                  path: "/",
                  secure: env.SECURE,
                });
                req.user = user;
                next();
              });
            } else {
              return res
                .status(401)
                .json({ status: 401, message: "Unauthorized" });
            }
          });
        } else {
          req.user = user;
          next();
        }
      }
    );
  } else if (refreshToken) {
    functions.verifyToken(refreshToken).then((token) => {
      if (user) {
        functions.generateAccessToken(user, "60m").then((newToken) => {
          res.cookie("access_token", newToken, {
            maxAge: 3600000,
            httpOnly: env.HTTP_ONLY,
            sameSite: env.SAME_SITE,
            path: "/",
            secure: env.SECURE,
          });
          req.user = user;
          next();
        });
      } else {
        return res.status(401).json({ status: 401, message: "Unauthorized" });
      }
    });
  } else {
    return res.status(401).json({ status: 401, message: "Unauthorized" });
  }
};

