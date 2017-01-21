var express = require("express");
var app = express();

var fs = require("fs");

var multer = require("multer");
var upload = multer({dest: "./uploads"});

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/");
var conn = mongoose.connection;

var gfs;

var Grid = require("gridfs-stream");
Grid.mongo = mongoose.mongo;

app.get('/Download/:file(*)', function (req, res) {
    grid.mongo = mongoose.mongo;
    var gfs = Grid(conn.db);
    var file = "notes1.docx";
    var fs_write_stream = fs.createWriteStream('filedownloaded.docx');

    var readstream = gfs.createReadStream({ filename: file });

    readstream.pipe(fs_write_stream);

    res.download(__dirname+'/filedownloaded.docx', 'Solution.cs', function (err) {
        if (err) throw err;
        else console.log("check console");
    });
})