var express = require('express');
var router = express.Router();

const mongodb=require("mongodb");
const MongoClient=mongodb.MongoClient;
const dbUrl =  "mongodb://127.0.0.1:27017"
const ObjectId=mongodb.ObjectId
const dbName = "art"







router.route('/')
  .get(function(req,res,next){
    // conntecting a databases
    MongoClient.connect(dbUrl)
      .then((client)=>{
        // when connection is success
            const db=client.db(dbName);
            db.collection('user')
            .find()
            .toArray()
            .then((user)=>{
              res.json(user)
  
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



router.route("/:id")
.get(function(req,res,next){
  // conntecting a databases
  MongoClient.connect(dbUrl)
    .then((client)=>{
      // when connection is success
      const db=client.db(dbName);
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

    })
    .catch((err)=>{
      res.json({error:err})
    })
})

  .put(function(req,res,next){
    // conntecting a databases
    MongoClient.connect(dbUrl)
    .then((client)=>{
      // when connection is success
      const db=client.db(dbName);

      db.collection('user')
      .updateOne({_id: new ObjectId(req.params.id)},
      {$set:req.body})
      .then((user)=>{
        res.json(user)
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
