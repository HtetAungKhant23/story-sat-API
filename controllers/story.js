const Story = require('../models/story');

// exports.getStory = (req, res, next) => {

//     Story.find()
//         .then(story => {
//             if(!story){
//                 const error = new Error('story not found!');
//                 throw error;
//             }
//             console.log(story);
//             res.status(200).json({
//                 storyDetail: story
//             })
//         })
//         .catch(err => {
//             if(!err.statusCode){
//                 err.statusCode = 500;
//             }
//             next(err);
//         })

// }

exports.getStory = async (req, res, next) => {
    try{
        const story = await Story.find();
        res.status(200).json(story);
    }catch(err){
        err.statusCode = 500;
        throw err;
    }
}

exports.createStory = async (req, res, next) => {
    try{
        const storyContent = req.body.story;
        const creator = req.body.creator;

        const story = new Story({
            creator: creator,
            story: storyContent      
        });
        
        const storyResult = await story.save();
        res.status(201).json(storyResult);
        
    }catch(err){
        err.statusCode = 500;
        throw err;
    }
}

// exports.createStory = (req, res, next) => {
//     const storyContent = req.body.story;
//     const creator = req.body.creator;

//     console.log(storyContent);

//     const story = new Story({
//         creator: creator,
//         story: storyContent      
//     });

//     story.save()
//         .then(result => {
//             console.log(result);
//             res.status(201).json({
//                 message: 'successfully story created!',
//                 story: result
//             })
//         })
//         .catch(err => {
//             if(!err.statusCode){
//                 err.statusCode = 500;
//             }
//             next(err);
//         })
// }