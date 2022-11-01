
const express = require('express')


const app = express()

const mongoose = require('mongoose')
const Player = require('./models/player')
const Match = require('./models/match')

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


// create player
app.post('/api/players',(req,res)=>{
    console.log("here is create player",req.body);

    let player = new Player({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        post:req.body.post,
        team:req.body.team,
        role:req.body.role,
        nTshirt:req.body.nTshirt,
        dateOfBirth:req.body.dateOfBirth
    })

    player.save();

    res.status(200).json({
        message:"player created with success"
    })
})


// get all players

app.get('/api/players', (req,res)=>{
console.log("here get all players");
    Player.find((err,docs)=>{
       if (err){
             console.log("err in DB");
        }else{
        res.status(200).json({
            players:docs
        })
        }
    });

    
})

// get player
app.get('/api/players/:id',(req,res)=>{

    console.log("here get player by id");
    let id = req.params.id
    
    Player.findOne({_id:id}).then(
        (doc)=>{
            
            if(doc){

                res.status(200).json({
                    player:doc
                })
            }else{
                console.log("error in DB ");
            }
        }
    )
})

// update Player
app.put('/api/players/:id',(req,res)=>{

     let  player = {
            _id:req.body._id,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            post:req.body.post,
            team:req.body.team,
            role:req.body.role,
            nTshirt:req.body.nTshirt,
            dateOfBirth:req.body.dateOfBirth
     }
     console.log("hers in update player", player);
     Player.updateOne({_id:req.params.id}, player).then(
        (result)=>{
            if(result){
                res.status(200).json({
                  message:"player updated with success"
                })
            }
        })
})

// delete player
app.delete('/api/players/:id',(req,res)=>{
    console.log("here in delete players");
    let id= req.params.id ;
    Player.deleteOne({_id:id}).then(
        (result)=>{
            if(result){
                res.status(200).json({
                    message:"player deleted with success"
                })
            }
        }
    )
})

// create mach

app.post('/api/matchs',(req,res)=>{
    console.log("here create match",req.body);
    let match = new Match({
        teamOne:req.body.teamOne,
        teamTwo:req.body.teamTwo,
        scoreOne:req.body.scoreOne,
        scoreTwo:req.body.scoreTwo,
        role:req.body.role
    })
    match.save()
    res.status(200).json({
        message:"match created with success"
    })
})

// get all match
app.get('/api/matchs',(req,res)=>{
    console.log("here get all matchs");

    Match.find((err,docs)=>{
        if(err){
            console.log("error in DB");
        }
        else{
            res.status(200).json({
                matchs:docs
            })
        }
    })

})


// delete match
app.delete('/api/matchs/:id',(req,res)=>{
    console.log("here in delete match");
    let id = req.params.id
    Match.deleteOne({_id:id}).then(
           (result)=>{
            if(result){
                res.status(200).json({
                    message:"match deleted with success"
                })
            }
           }

    )
})

// get match by id
app.get('/api/matchs/:id',(req,res)=>{
    console.log("get match by id");
    Match.findOne({_id:req.params.id}).then(
        (doc)=>{
            if(doc){
                res.status(200).json({
                    match : doc
                })
            }else{
                console.log("error in DB");
            }
        }
    )
})

//update match
app.put('/api/matchs/:id',(req,res)=>{

    let match ={
        _id:req.body._id,
        teamOne:req.body.teamOne,
        teamTwo:req.body.teamTwo,
        scoreOne:req.body.scoreOne,
        scoreTwo:req.body.scoreTwo,
        role:req.body.role
    }
    console.log("here in update matchs", match);
    Match.updateOne({_id:req.params.id},match).then(
        (result)=>{
            if (result) {
                res.status(200).json(
                    {message:"match updated with success"}
                )
            }
        }
    )
})

module.exports= app