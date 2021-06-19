"use strict";

const audio = require("../models/audio");
const playlist = require("../models/playlist");
const _ = require('lodash');

/**
 * Get all Playlists
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {undefined}
 */
exports.getPlaylists = (req, res) => {

  let id = req.user._id; 

  if(!id) return res.sendStatus(400);

  playlist
    .find({ creatorId: id })
    .then((playlists) => {
      playlists = _.shuffle(playlists);

      res.status(200).json({
        status: 200,
        playlists: playlists,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

/**
 * Get Playlist By Id
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {undefined}
 */
 exports.getPlaylist = (req, res) => {

  let id = req.query.id; 


  if(!id) return res.sendStatus(400);

  playlist
    .findOne({ _id: id })
    .then((playlist) => {
      res.status(200).json({
        status: 200,
        playlist: playlist,
      });
    })
    .catch((err) => {
      console.log("Err", err);
      res.sendStatus(500);
    });
};

exports.newPlaylist = (req, res) =>{
  let data = req.body;
  let id = req.user._id;

  if(!data || !id) return res.sendStatus(400);

  let playlistObject = new playlist({
     title: data.title,
     creatorId: id,
     tracks: []
  });

  playlistObject.save((err, newPlaylist)=>{
    if(err) return res.status(500).json({ status: 500, message: "Error Creating Playlist" });
    res.status(201).json({
      status: 201,
      playlist: newPlaylist
    })

  });


};