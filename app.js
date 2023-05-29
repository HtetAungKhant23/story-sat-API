const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const storyRoutes = require('./routes/story');
const episodeRoutes = require('./routes/episode');
const dbConnect = require('./configs/dbConnect');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
    next();
});

app.use('/user', userRoutes);
app.use('/story', storyRoutes);
app.use('/episode', episodeRoutes);

app.use((error, req, res, next) => {
    const message = error.message;
    const status = error.statusCode;
    res.status(status).json({
        message: message
    });
})

const PORT = process.env.PORT || 6000;
dbConnect();
app.listen(PORT, () => console.log(`server run at ${PORT}`));