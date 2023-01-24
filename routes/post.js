const express = require("express");
const router = express.Router();
const postShowController = require("..//controllers/post_controller");
router.get('/show',postShowController.showPost)

module.exports = router;