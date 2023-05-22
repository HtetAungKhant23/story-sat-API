const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const storyRoutes = require('./routes/story');

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

app.use((error, req, res, next) => {
    const message = error.message;
    const status = error.statusCode;

    res.status(status).json({
        message: message
    });
})

mongoose
    .connect(
        'mongodb+srv://root:root@cluster0.ksor6cg.mongodb.net/StorySatAPI?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(result => {
        app.listen(3000);
        console.log('Connected!');
    })
    .catch(err => {
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    })