const express= require('express') ;
const router = express.Router() ;
const Match = require('../models/match')

// create mach

router.post('/',(req,res)=>{
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
router.get('/',(req,res)=>{
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
router.delete('/:id',(req,res)=>{
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
router.get('/:id',(req,res)=>{
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
router.put('/:id',(req,res)=>{

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

module.exports = router
