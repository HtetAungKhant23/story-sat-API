const User = require('../models/users');
const Episode = require('../models/episode');
const generateToken = require('../utils/generateToken');

exports.signup = async (req, res, next) => {
    try {
        const {
            email,
            password,
            name
        } = req.body;

        const user = new User({
            email: email,
            password: password,
            name: name
        });

        const account = await user.save();
        
        if(!account){
            const err = new Error('account cannot create!');
            throw err;
        }

        res.status(201).json(account);

    } catch(err) {
        console.log(err.message);
        next(err);
    }
}

exports.signin = async (req, res, next) => {
    try{
        const {
            email,
            password
        } = req.body;

        const user = new User({
            email,
            password
        });
        await user.save();
        res.status(200).json({
            message: 'login success!',
            user: user,
            token: generateToken(user._id)
        });

    }catch(err){
        console.log(err.message);
        next(err);
    }
}

exports.vote_episode = async (req, res, next) => {
    try{
        const episodeId = req.params.episodeId;
        const episode = await Episode.findById(episodeId);
        const userId = "6481dd1210d5bc318de93c0c";

        /* 

        validation မှာ episode အားလုံးကို find နဲ့ ခေါ်ထုတ်ထားမယ်
        ပီးရင် ဝင်လာတဲ့ userId နဲ့ episode တွေထဲက voter တွေနဲ့ id ချင်းတိုက်စစ်မယ်
        တခုတွေ့တာနဲ့ validation failed ဖြစ်သွားမယ်   
        
        */
        

        episode.vote += 1;
        episode.voter.push(userId);
        await episode.save();

        res.status(200).json({
            message: 'voting process success!',
            episode: episode
        });

    }catch(err){
        console.log(err.message);
        res.status(500).json(err.message);
    }
}

// exports.get_Account_By_Id = async (req, res, next) => {
//     try {
//         const user_Id = req.params.id;
//         const user = await User.findById(user_Id);
//         if(!user){
//             const err = new Error('user not found!');
//             throw err;
//         }
//         res.status(200).json(user);
//     } catch(err) {
//         console.log(err.message);
//         res.status(500).json(err.message);
//     }
// }

// exports.get_All_User_Account = async (req, res, next) => {
//     try {
//         const users = await User.find();
//         if(!users){
//             const err = new Error('Users not found!');
//             throw err;
//         }
//         res.status(200).json(users);

//     } catch(err) {
//         console.log(err.message);
//         res.status(500).json(err.message);
//     }
// }