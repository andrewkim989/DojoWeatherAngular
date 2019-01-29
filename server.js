var express = require("express");
var app = express();
var path = require("path");
app.use(express.static(__dirname + "/dist/WeatherAPI"));

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./dist/WeatherAPI/index.html"))
});

app.listen(8123, function() {
    console.log("listening on port 8123");
});