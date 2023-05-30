const express = require('express');
const router = express.Router();
const controllers = require('../controllers/episode');

router.post('/', controllers.create_episode);

module.exports = router;