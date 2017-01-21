var express = require("express");
var app = express();

var fs = require("fs");

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/");
var conn = mongoose.connection;

var gfs;
var pth = "./donwloads/filedownloaded.docx";

var Grid = require("gridfs-stream");
Grid.mongo = mongoose.mongo;

conn.once('open',function(){
	console.log('- Connection open -');
	gfs = Grid(conn.db);
	var fs_write_stream = fs.createWriteStream(pth);
	//errors out from here on
	var readstream = gfs.createReadStream({ 
		filename: "notes1.docx"	//CHANGE TO DESIRED FILE (file to be downloaded from database)
	});
	readstream.on("error", function(err){
        console.log("No image found with that title");
      });

	readstream.pipe(fs_write_stream);
fs_write_stream.on('close',function(){
	console.log("file has been downloaded.");
});

});