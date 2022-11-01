const express= require('express') ;
const router = express.Router() ;

const Player = require('../models/player')

// create player
router.post('/',(req,res)=>{
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

router.get('/', (req,res)=>{
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
router.get('/:id',(req,res)=>{

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
router.put('/:id',(req,res)=>{

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
router.delete('/:id',(req,res)=>{
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

module.exports=router