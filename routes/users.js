const express = require('express');
const {body} = require('express-validator');
const User = require('../models/users');
const controllers = require('../controllers/users');
const isAuth = require('../middlewares/isAuth');
const isVoted = require('../middlewares/isVoted');
const router = express.Router();

// signup => localhost:5000/user/signup
router.post('/signup', controllers.signup);

// signin => localhost:5000/user/signin
router.post('/signin', controllers.signin);

// vote => localhost:5000/user/voteEpisode
router.post('/vote/:episodeId', isAuth, isVoted, controllers.vote_episode);

module.exports = router;