const express = require('express');
const controllers = require('../controllers/story');
const router = express.Router();

// create story => localhost:5000/story/create/12345
router.post('/create/:creatorId', controllers.createStory);



// get story => localhost:5000/story
// router.get('/', controllers.getStory);

// 
// router.get('/:storyId', controllers.getStoryById);



module.exports = router;