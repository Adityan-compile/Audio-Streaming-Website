"use strict";

var audio = require("../models/audio");
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
exports.getArtists = async (req, res) => {
  let count = Number(req.query.count);
  await user
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
          profile: artist.profile
        };
      });
      res.status(200).json({ status: 200, artists: artists });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: "Error Fetching Artists" });
    });
};
