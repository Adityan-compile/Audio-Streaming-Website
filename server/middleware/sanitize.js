'use strict';

var sanitizer = require('mongo-sanitize');

exports.sanitize = (req, res, next) => {
  
  try{
    req.query = sanitizer(req.query);
  }catch{
    //Pass
  }finally{
    //Pass
  }

  try{
    req.body = sanitizer(req.body);
  }catch{
    //Pass
  }finally{
    //Pass
  }
  
  try{
    req.params = sanitizer(req.params);
  }catch{
    //Pass
  }finally{
    //Pass
  }

  next();
};
