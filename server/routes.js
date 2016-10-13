var router = require("express").Router();

// Route Directory
router.use("/search", require("./controllers/search-controller"));

module.exports = router;
