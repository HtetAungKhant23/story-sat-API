const Episdoe = require('../models/episode');
const Story = require('../models/story');

exports.create_episode = async (req, res, next) => {
    try{
        const {
            episodeTitle,
            content
        } = req.body;

        const creatorId = "6481d89549aecaa87666328a";

        const main_story = req.params.main_story;
        console.log(req.query.episodeNumber);
        const episodeNumber = Number(req.query.episodeNumber) + 1;

        const episode = new Episdoe({
            episode_title: episodeTitle,
            content: content,
            episode_number: episodeNumber,
            main_story: main_story,
            creator: creatorId
        });

        await episode.save();

        const story = await Story.findById(main_story);
        story.episodes.push(episode._id);
        await story.save();

        res.status(201).json({
            message: "episode is successfully created!",
            episode: episode
        });

    }catch(err){
        err.statusCode = 500;
        throw err;
    }
    
}