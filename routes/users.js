const express = require('express');
const controllers = require('../controllers/users');
const router = express.Router();

router.post('/create', controllers.create_account);

router.get('/:id', controllers.get_Account_By_Id);

module.exports = router;