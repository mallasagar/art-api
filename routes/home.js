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
            db.collection('home')
            .find()
            .toArray()
            .then((home)=>{
              res.json(home)
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
        db.collection('home').insertOne(req.body)
        .then((home)=>{
          res.json(home)

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
                db.collection('home')
                .find(
                  { _id: new  ObjectId(req.params.id)}
                  )
                .project({age:0})
                .toArray()
                .then((home)=>{
                  res.json(home)
          
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
                  db.collection('home')
                  .updateOne({_id: new ObjectId(req.params.id)},
                  {$set:req.body})
                  .then((home)=>{
                    res.json(home)
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
                    db.collection('home')
                    .deleteOne({_id: new ObjectId(req.params.id)})
                    .then((home)=>{
                      res.json(home)
                    })
                    .catch((err)=>{
                      res.json(err)
                    })                
                }
              })
      })

module.exports = router;
