const express = require('express');
const {body} = require('express-validator');
const User = require('../models/users');
const controllers = require('../controllers/users');
const isAuth = require('../middlewares/isAuth');
const router = express.Router();

// signup => localhost:5000/user/signup
router.post('/signup', controllers.signup);

// signin => localhost:5000/user/signin
router.post('/singin', controllers.signin);

// vote => localhost:5000/user/voteEpisode
router.post('/vote/:episodeId', isAuth, controllers.vote_episode);

module.exports = router;