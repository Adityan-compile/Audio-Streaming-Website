'use strict';

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
 * @name= Logout
 * @route {POST,GET} /auth/logout
 * @method POST,GET
 * @function
 * @module routes/auth
 * @param {String} path
 * @param {Callback} logout
 */
router.route('/logout').get((req, res) => {
  authController.logout(req, res);
}).post((req, res) => {
  authController.logout(req, res);
});

module.exports = router;
