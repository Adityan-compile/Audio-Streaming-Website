const audio = require('../models/audio');
var _ = require('lodash');

/**
 * Get all Tracks in Random or Sorted Order
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @returns {undefined}
 */
exports.getTracks = async (req, res) => {
  let sort = req.query.sort;
  if (sort === 1) {
    await audio
      .find({private:false})
      .sort({_id: -1})
      .then((tracks) => {
        tracks = _.shuffle(tracks);

        res.status(200).json({status: 200, tracks: tracks});
      })
      .catch((err) => {
        return res
          .status(500)
          .json({status: 500, message: 'Error Fetching Tracks'});
      });
  } else {
    await audio
      .find({private: false})
      .then((tracks) => {
        tracks = _.shuffle(tracks);

        res.status(200).json({status: 200, tracks: tracks});
      })
      .catch((err) => {
        return res
          .status(500)
          .json({status: 500, message: 'Error Fetching Tracks'});
      });
  }
};
