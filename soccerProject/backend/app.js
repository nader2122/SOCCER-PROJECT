
const express = require('express')


const app = express()

const mongoose = require('mongoose')


const matchRoute = require('./routes/match-router')
const playerRoute = require('./routes/player-router')


const bodyParser = require('body-parser')


//Integration bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





// Security Configuration  toujours aprés app
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});


mongoose.connect('mongodb://localhost:27017/soccer', { useNewUrlParser: true, useUnifiedTopology: true });


app.use('/matchs',matchRoute)
app.use('/players',playerRoute)


module.exports= app