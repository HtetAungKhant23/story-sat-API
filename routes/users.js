const express = require('express');
const {body} = require('express-validator');
const User = require('../models/users');
const controllers = require('../controllers/users');
const router = express.Router();

router.post('/signup',
[
    body('email')
        .trim()
        .isEmail()
        .withMessage('email format is not correct!')
        .custom((value, {req}) => {
            return User.findOne({email: value})
                .then(user => {
                    if(user){
                        return Promise.reject('email already exist!');
                    }
                })
        })
        .normalizeEmail()
]
, controllers.signup_account);

router.get('/:id', controllers.get_Account_By_Id);

module.exports = router;