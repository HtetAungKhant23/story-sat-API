const express = require('express');
const controllers = require('../controllers/story');
const router = express.Router();

// get story => localhost:3000/story
router.get('/', controllers.getStory);

// 
router.get('/:storyId', controllers.getStoryById);

// create story => localhost:3000/story
router.post('/', controllers.createStory);

module.exports = router;