"use strict";

const audio = require("../models/audio");
const playlist = require("../models/playlist");
const _ = require("lodash");

/**
 * Get all Playlists
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {undefined}
 */
exports.getPlaylists = (req, res) => {
  let id = req.user._id;

  if (!id) return res.sendStatus(400);

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
exports.getPlaylist = async (req, res) => {
  let id = req.query.id;

  if (!id) return res.sendStatus(400);

  let foundPlaylist = await playlist.findOne({ _id: id });
  await foundPlaylist.populate("tracks").execPopulate();

  res.status(200).json({
    status: 200,
    playlist: foundPlaylist,
  });
};

/**
 * Create New Playlist
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {undefined}
 */
exports.newPlaylist = (req, res) => {
  let data = req.body;
  let id = req.user._id;

  if (!data || !id) return res.sendStatus(400);

  let playlistObject = new playlist({
    title: data.title,
    creatorId: id,
    tracks: [],
  });

  playlistObject.save((err, newPlaylist) => {
    if (err)
      return res
        .status(500)
        .json({ status: 500, message: "Error Creating Playlist" });
    res.status(201).json({
      status: 201,
      playlist: newPlaylist,
    });
  });
};

/**
 * Add Song to Playlist
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {undefined}
 */
exports.addToPlaylist = (req, res) => {
  let data = req.body;

  if (Object.keys(data).length < 2) return res.sendStatus(400);

  playlist.findOne({ _id: data.playlist }, (err, doc) => {
    if (err) return sendStatus(500);

    doc.tracks.push(data.song);
    doc.save();

    res.status(200).json({ status: 200, playlist: doc });
  });
};

/**
 * Remove Song From Playlist
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {undefined}
 */
exports.removeFromPlaylist = (req, res) => {
  let data = req.body;

  if (Object.keys(data).length < 2) return res.sendStatus(400);

  playlist.findOne({ _id: data.playlist }, (err, doc)=>{

    if(err) return res.sendStatus(500);

    let idx = doc.tracks ? doc.tracks.indexOf(data.song) : -1;

    if (idx !== -1) {
      doc.tracks.splice(idx, 1);
      doc.save(async(error, playlist)=>{
        console.log(playlist)
        if(error) return res.sendStatus(500);
        let populated = await playlist.populate('tracks').execPopulate();
        res.status(200).json({ status: 200, playlist: populated });
      });
    }else{
      return res.sendStatus(500);
    }

  });
};


/**
 * Delete Playlist
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {undefined}
 */
exports.deletePlaylist = (req, res)=>{
  let id = req.query.id;
  if(!id) return res.sendStatus(400);

  playlist.findOneAndDelete({  
    _id: id
  }, (err, doc)=>{
    if(err) return res.sendStatus(500);
    res.status(200).json({ status: 200, deleted: doc });
  });

};