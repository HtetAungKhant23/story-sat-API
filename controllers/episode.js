const Episdoe = require('../models/episode');
const Story = require('../models/story');

exports.create_episode = async (req, res, next) => {

    const episode_title = req.body.episode_title;
    const content = req.body.content;
    
}