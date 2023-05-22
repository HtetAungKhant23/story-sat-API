const express = require('express');
const controllers = require('../controllers/story');
const router = express.Router();

// get method => localhost:3000/story
router.get('/', controllers.getStory);

// post method => localhost:3000/story
router.post('/', controllers.createStory);

module.exports = router;