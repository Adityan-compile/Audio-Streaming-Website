'use strict';

var sanitize = require('mongo-sanitize');

exports.clean = (req, res, next) => {
  if(req.body) req.body = sanitize(req.body);
  if(req.query) req.query = sanitize(req.query);
  if(req.params) req.params = sanitize(req.params);
  next();
};
