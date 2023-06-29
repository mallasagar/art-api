var express = require('express');
var router = express.Router();
const dbconfig=require('../config/dbconfig')


const mongodb=require("mongodb");
const MongoClient=mongodb.MongoClient;
const dbUrl =  "mongodb://127.0.0.1:27017"
// const ObjectId=mongodb.ObjectId
const dbName = "art"

router.route('/user')
.get(function(req,res,next){
  // conntecting a databases
  MongoClient.connect(dbUrl)
    .then((client)=>{
      // when connection is success
          const db=client.db(dbName);
          db.collection('art')
          .find()
          .toArray()
          .then((art)=>{
            res.json(art)

          })
          .catch((err)=>{
            res.json(err)
          })

    })
    .catch((err)=>{
      res.json({error:err})
    })
})

.post(function(req,res,next){
  // conntecting a databases
  MongoClient.connect(dbUrl)
    .then((client)=>{
      // when connection is success
      const db=client.db(dbName);
      db.collection('user').insertOne(req.body)
      .then((success)=>{
        res.json(success)
      })
      .catch((err)=>{
        res.json(err)
      })

    })
    .catch((err)=>{
      res.json({error:err})
    })
})



module.exports = router;
