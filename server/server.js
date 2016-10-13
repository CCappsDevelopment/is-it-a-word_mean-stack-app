var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");
var dbConfig = require("../config/db");
var routes = require("./routes");

var app = express();

// Serve Static Directories
app.use("/angular", express.static(path.join(__dirname, "../node_modules/angular")));
app.use("/views", express.static(path.join(__dirname, "../client/views")));
app.use("/controllers", express.static(path.join(__dirname, "../client/controllers")));
app.use("/directives", express.static(path.join(__dirname, "../client/common/directives")));
app.use("/services", express.static(path.join(__dirname, "../client/common/services")));
app.use("/jquery", express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use("/bootstrap", express.static(path.join(__dirname, "../node_modules/bootstrap/dist")));
app.use("/css", express.static(path.join(__dirname, "../client/css")));
app.use("/json", express.static(path.join(__dirname, "../json")));
app.use(express.static(path.join(__dirname, "../client/views")));
app.use(bodyParser.json());

// Mongoose Database Connection
mongoose.connect(dbConfig.url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {    
   console.log("Connected to is-it-a-word");
});

// Override Mongoose's deprecated Promise framework
mongoose.Promise = global.Promise;

app.use("/", routes);

app.listen(3000);
console.log("Server running on port 3000...");

module.exports = app;
