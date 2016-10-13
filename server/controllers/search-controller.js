// Controls http requests from client/controllers/search

var router = require("express").Router();

router.post("/", search);

function search(req, res) {
    if(req.body.payload) {
        var WordList = require("../models/word-list").WordList;
        var regex = new RegExp("\\b" + req.body.payload + "\\w*", "gi");

        WordList.find({}).lean().exec()
            .then(function(results){
                var prefilteredWords = results[0].wordlist.join(" ");
                var filteredWords = prefilteredWords.match(regex);

                res.status(200).json(filteredWords);
            })
            .catch(function(err) {
                console.log("Error: " + err);
                res.status(500).send(err.message);
            });
    } else {
        res.status(200).json([]);
    }
}

module.exports = router;
