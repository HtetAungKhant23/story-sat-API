const express = require('express');
const {body} = require('express-validator');
const User = require('../models/users');
const controllers = require('../controllers/users');
const router = express.Router();

// signup => localhost:5000/user/signup
router.post('/signup', controllers.signup_account);

module.exports = router;