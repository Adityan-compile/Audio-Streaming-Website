"use strict";

const { functions } = require("lodash");
var audio = require("../models/audio");
var playlist = require('../models/playlist');
var user = require("../models/user");
/**
 * Search for Audio and Artists
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {undefined}
 */
exports.search = async (req, res) => {
  let query = new RegExp(req.query.q, "i");


  if (query === null || query === undefined || query == "")
    return res.status(400).json({ status: 400, message: "" });

  await audio.find(
    { 
      title: { 
        $regex: query,
      } 
    },
    (err, tracks) => {
      if (err) {
        return res.status(500).json({ status: 500, message: "Search Failed" });
      }

      // tracks = tracks.filter((track)=>{
      //   console.log(query.test(track));
      //   return query.test(track.title);
      // });
      tracks = tracks.sort((a,b)=> b.yearCreated - a.yearCreated);

      res.status(200);
      res.json({
        status: 200,
        results: tracks,
      });
    }
  );
};

/**
 * Find All Uploads
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {undefined}
 */
exports.uploads = (req, res) => {
  let id = req.query.id;
  if(!id) return res.sendStatus(400); 
  audio.find({ creatorId: id }, (err, uploads) => {
    if (err) return res.sendStatus(500);
    res.status(200).json({ status: 200, uploads: uploads });
  });
};

/**
 * Get all details of a User
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {undefined}
 */
exports.getUserDetails = (req, res)=>{
  let id = req.query.id;
  if(!id) return res.sendStatus(400);
  user.findOne({_id: id}, (err, user)=>{
    user.password = undefined;
    if(err) return res.sendStatus(500);
    res.status(200).json({ status: 200, user: user });
  });
};

/**
 * Get a Finite number of Artists
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {undefined}
 */
exports.getArtists = (req, res) => {
  let count = Number(req.query.count);
   user
    .aggregate([
      {
        $sample: {
          size: count,
        },
      },
    ])
    .then((artists) => {
      artists = artists.map((artist) => {
        return {
          _id: artist._id,
          name: artist.name,
          email: artist.email,
          profile: artist.profile,
          verified: artist.verified
        };
      });
      res.status(200).json({ status: 200, artists: artists });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: "Error Fetching Artists" });
    });
};

/**
 * Delete a Users Account
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {undefined}
 */
exports.deleteAccount = (req, res) => {
  let id = req.user._id;

  if(!id) return res.sendStatus(400);

  user.deleteOne({_id: id}).then(()=>{
    playlist.deleteMany({ creatorId: id }).then(()=>{
       audio.deleteMany({ creatorId: id }).then(()=>{
        res.clearCookie('refresh_token');
        res.clearCookie('access_token');
        res.clearCookie('user');
        res.status(204).json({ status: 204, message: "Account Deleted Successfully" });
       }).catch(err=>{
        res.clearCookie('refresh_token');
        res.clearCookie('access_token');
        res.clearCookie('user');
        res.status(204).json({ status: 204, message: "Account Deleted Successfully" });
       })
    }).catch(err=>{
      res.clearCookie('refresh_token');
      res.clearCookie('access_token');
      res.clearCookie('user');
      res.status(204).json({ status: 204, message: "Account Deleted Successfully" });
    });
  }).catch(err=>{
    res.status(500).json({ status: 204, message: "Account Deletion Failed" });
  });
};

/**
 * Update User Profile
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {undefined}
 */
exports.updateProfile = (req, res)=>{
  let userData = req.body;
  let picture = req.files.picture;

  user.findOne({ _id: req.user._id }).then((doc)=>{
       if(userDate && functions.validate(userData.email)){
         if(userData.password.length !== 0 && userData.password.length >= 8){
           userData.password = await bcrypt.hash(userData.password, 10);
           if(picture){

           }else{
             
           }
         }else{
           return res.sendStatus(400);
         }
       }else{
        return res.sendStatus(400);
       }
  }).catch(err=>{
    return res.sendStatus(500);
  });
};