"use strict";


const express = require('express');

/**
 * @alias express.Router
 */
const router = express.Router();

const authController = require('../controllers/authController');

/**
 * @name Login
 * @route {POST} /auth/login
 * @method POST
 * @function
 * @module routes/auth
 * @param {String} path
 * @param {Callback} login
 * @bodyparam {String} email
 * @bodyparam {String} password
 */
router.post('/login', (req, res) => {
  authController.login(req, res);
});

/**
 * @name SignUp
 * @route {POST} /auth/signup
 * @method POST
 * @function
 * @module routes/auth
 * @param {String} path
 * @param {Callback} signUp
 * @bodyparam {String} name
 * @bodyparam {String} email
 * @bodyparam {String} password
 */
router.post('/signup', (req, res) => {
  authController.signUp(req, res);
});

/**
 * @name RefreshTokens
 * @route {POST} /auth/tokens/refresh
 * @method POST
 * @function
 * @module routes/auth
 * @param {String} path
 * @param {Callback} regenerateToken
 * @bodyparam {String} refreshToken
 */
router.post('/tokens/refresh', (req, res) => {
  authController.regenerateToken(req, res);
});

module.exports = router;
