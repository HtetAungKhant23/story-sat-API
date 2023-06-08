const express = require('express');
const router = express.Router();
const controllers = require('../controllers/episode');

router.post('/create/:main_story', controllers.create_episode);

module.exports = router;