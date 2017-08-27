var request = require("request");
var fs = require("fs");
var zlib = require("zlib");

var s = request("http://www.google.com");

s.pipe(process.stdout);

request("http://www.google.com").pipe(fs.createWriteStream("google.html"));

request("http://www.google.com").pipe(zlib.createGzip()).pipe(fs.createWriteStream("google.html.gz"));