'use strict';

const audio = require('../models/audio');
const path = require('path');

exports.sendImage = (req,res)=>{
    let id = req.query.id;
    console.log(path.resolve("../uploads"));
    res.sendStatus(201);
}