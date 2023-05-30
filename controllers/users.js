const User = require('../models/users');

exports.signup_account = async (req, res, next) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name;

        const user = new User({
            email: email,
            password: password,
            name: name
        });

        const account = await user.save();
        
        if(!account){
            const err = new Error('account cant create!');
            throw err;
        }

        res.status(201).json(account);

    } catch(err) {
        console.log(err.message);
        res.status(500).json(err.message);
    }
}

exports.get_Account_By_Id = async (req, res, next) => {
    try {
        const user_Id = req.params.id;
        const user = await User.findById(user_Id);
        if(!user){
            const err = new Error('user not found!');
            throw err;
        }
        res.status(200).json(user);
    } catch(err) {
        console.log(err.message);
        res.status(500).json(err.message);
    }
}

exports.get_All_User_Account = async (req, res, next) => {
    try {
        const users = await User.find();
        if(!users){
            const err = new Error('Users not found!');
            throw err;
        }
        res.status(200).json(users);

    } catch(err) {
        console.log(err.message);
        res.status(500).json(err.message);
    }
}