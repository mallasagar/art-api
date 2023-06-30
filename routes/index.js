var express = require('express');
var router = express.Router();


const dbconnection =require('../config/dbconfig')
const mongodb=require("mongodb");
const ObjectId=mongodb.ObjectId


router.route('/')
  .get(function(req,res,next){
         dbconnection(function(err, db){
          if(err){
            next(err)
          }else{
            db.collection('art')
            .find()
            .toArray()
            .then((art)=>{
              res.json(art)
            })
            .catch((err)=>{
              res.json(err)
            })
          }

        })
      })
  .post(function(req,res,next){
    dbconnection(function(err,db){
      if(err){
        next(err)
      }else{
        db.collection('art').insertOne(req.body)
        .then((art)=>{
          res.json(art)

        })
        .catch((err)=>{
          res.json(err)
        })
      }
    })
  
})



router.route("/:id")
    .get(function(req,res,next){
    dbconnection(function(err,db){
      if(err){
        next(err)
      }else{
                db.collection('art')
                .find(
                  { _id: new  ObjectId(req.params.id)}
                  )
                .project({age:0})
                .toArray()
                .then((art)=>{
                  res.json(art)
          
                })
                .catch((err)=>{
                  res.json(err)
                })
            }
          })
      })
    .put(function(req,res,next){
      dbconnection(function(err,db){
        if(err){
          next(err)
        }else{
                  db.collection('art')
                  .updateOne({_id: new ObjectId(req.params.id)},
                  {$set:req.body})
                  .then((user)=>{
                    res.json(user)
                  })
                  .catch((err)=>{
                    res.json(err)
                  })                
              }
            })
      })
    .delete(function(req,res,next){
        dbconnection(function(err,db){
          if(err){
            next(err)
          }else{
                    db.collection('art')
                    .deleteOne({_id: new ObjectId(req.params.id)})
                    .then((art)=>{
                      res.json(art)
                    })
                    .catch((err)=>{
                      res.json(err)
                    })                
                }
              })
      })

module.exports = router;
