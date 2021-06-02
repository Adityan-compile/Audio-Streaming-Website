"use strict";

const audio = require("../models/audio");
const path = require("path");
const fs = require("fs");

exports.streamAudio = async (req, res) => {
    let id = req.query.id;

    if (!id) return res.sendStatus(400);

    let filePath = path.resolve(`./Uploads/Audio/${id}`);

    if (!fs.exists(filePath)) return res.sendStatus(404);

    let fileSize = fs.stat(filePath).size;

    const chunkSize = 10 ** 6;

    const start = Number(range.replace(/\D/g, ""));

    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentLength = end - start + 1;

    let readStream = fs.createReadStream(filePath, { start, end });

    readStream.on("error", (err) => {
        res.sendStatus(500);
    });

    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "audio/mp3",
    };

    res.writeHead(206, headers);

    readStream.pipe(res);
};
