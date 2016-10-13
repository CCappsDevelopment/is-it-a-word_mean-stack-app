// Mongoose Schema for WordList Model
var mongoose = require("mongoose");

var WordListSchema = new mongoose.Schema({
    words: [String]
});

exports.WordList = mongoose.model("WordList", WordListSchema, "words");
