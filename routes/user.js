const express = require("express");

const router = express.Router();
const userController = require('../controllers/users');

router.get('/posts',userController.getPosts);

module.exports = router;