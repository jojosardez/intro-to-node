var http = require("http");

var options = {
    host: "www.google.com",
    port: 80,
    path: "/",
    methos: "GET"
};

console.log("Going to make request...");

/*
var req = http.request("http://www.google.com/", function(response) {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

req.end();
*/

http.get(options, function(response) {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});