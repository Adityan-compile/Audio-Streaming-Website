"use strict";

const audio = require("../models/audio");
const user = require("../models/user");
const mongoose = require("mongoose");
const fs = require("fs");
const functions = require("../helpers/functions");
const path = require("path");

/**
 * Upload Files
 * @module controllers/uploadController
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {undefined}
 */

exports.upload = async (req, res) => {
  // console.log(req.files, req.body);
  if (!req.files || Object.keys(req.files).length === 0)
    return res.sendStatus(409);

  let imageFile = req.files.thumbnail;
  let audioFile = req.files.audio;
  let data = req.body;
  let user = req.user;

  var audioId = mongoose.Types.ObjectId();

  let audioObject = new audio({
    _id: audioId,
    title: data.title,
    image: `${user._id}-${audioId}-${imageFile.name}`,
    audio: `${user._id}-${audioId}-${audioFile.name}`,
    yearCreated: data.year,
    creatorId: user._id,
    artistName: data.artist,
  });

  audioObject.save(async (err, newAudio) => {
    if (err)
      return res
        .status(500)
        .json({ status: 500, message: "File Upload failed" });

    await imageFile.mv(
      path.resolve(`./Uploads/Images/${audioObject.image}`),
      async (err) => {
        if (err)
          return res
            .status(422)
            .json({ status: 422, message: "File Upload failed" });
        await audioFile.mv(
          path.resolve(`./Uploads/Audio/${audioObject.audio}`),
          (error) => {
            if (error)
              return res
                .status(422)
                .json({ status: 422, message: "File Upload failed" });
            res
              .status(201)
              .json({ status: 201, message: "File Upload success" });
          }
        );
      }
    );
  });
};

/**
 * Delete Files
 * @module controllers/uploadController
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {undefined}
 */
exports.deleteFile = async (req, res) => {
  let audioId = req.query.id;
  let user = req.user;
  let savedAudio = await audio.findOne({
    _id: mongoose.Types.ObjectId(audioId),
  });
  if (savedAudio.creatorId.equals(user._id)) {
    audio.deleteOne(
      { _id: mongoose.Types.ObjectId(audioId) },
      async (err, removed) => {
        process.env.ENV.toLowerCase === 'development' && console.log(err, removed);
        if (err)
          return res
            .status(406)
            .json({ status: 406, message: "Delete Failed" });
        await fs.unlink(path.resolve(`./${process.env.UPLOAD_PATH}/${process.env.AUDIO_FOLDER}/${savedAudio.image}`),
          async (unlinkErr) => {
            console.log(unlinkErr);
            await fs.unlink(path.resolve(`./${process.env.UPLOAD_PATH}/${process.env.AUDIO_FOLDER}/${savedAudio.audio}`),
                user.findOne({ _id: user._id }, (error, doc) => {
                  let idx = doc.uploads
                    ? doc.uploads.indexOf(savedAudio._id)
                    : -1;
                  if (idx !== -1) {
                    doc.tracks.splice(idx, 1);
                    doc.save(async (error) => {
                      res.status(201).json({
                        status: 201,
                        message: "File Deleted successfully",
                        track: savedAudio,
                      });
                    });
                  }
                })
            )}
            );
          });
  } else {
    res.status(406).json({ status: 406, message: "Delete Failed" });
  }
};
