const express = require('express');
const controllers = require('../controllers/users');
const router = express.Router();

router.get('/', controllers.getUser);





module.exports = router;