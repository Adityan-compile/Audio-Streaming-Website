'use strict';

const express = require('express');
const router = express.Router();

const { uploads, getUserDetails, deleteAccount, updateProfile } = require('../controllers/userController');

const { authenticate } = require('../middleware/authenticate');

const { sanitize } = require("../middleware/sanitize");


router.get('/uploads', authenticate, (req, res) => {
  uploads(req, res);
});

router.get('/details', authenticate, (req, res)=>{
   getUserDetails(req, res);
});

router.delete('/account/delete', authenticate, (req, res)=>{
    deleteAccount(req, res);
});

router.patch('/account/edit', authenticate, (req, res)=>{
  updateProfile(req, res);
});

module.exports = router;
