const dbconnection=require('../config/dbconfig.js')
const mongodb=require("mongodb");
const ObjectId=mongodb.ObjectId

function getuser(req,res,next){
    dbconnection(function(err, db){
        if(err){
          next(err);
        }else{
        db.collection('user')
          .find()
          .toArray()
          .then((user) =>{
            res.json(user)
          })
          .catch((err)=>{
            res.json(err)
          })
        }
      })
}


function adduser(req,res,next){
    dbconnection(function(err,db){
        if(err){
          next(err)
        }else{
          db.collection('user').insertOne(req.body)
          .then((user)=>{
            res.json(user)
  
          })
          .catch((err)=>{
            res.json(err)
          })
        }
      })
}

function getuserbyid(req,res,next){
    dbconnection(function(err,db){
        if(err){
          next(err)
        }else{
                  db.collection('user')
                  .find(
                    { _id: new  ObjectId(req.params.id)}
                    )
                  .project({age:0})
                  .toArray()
                  .then((user)=>{
                    res.json(user)
            
                  })
                  .catch((err)=>{
                    res.json(err)
                  })
              }
            })
}

function updateuserbyid(req,res,next){
    dbconnection(function(err,db){
        if(err){
          next(err)
        }else{
                  db.collection('user')
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
}

function deleteuserbyid(req,res,next){
    dbconnection(function(err,db){
        if(err){
          next(err)
        }else{
                  db.collection('user')
                  .deleteOne({_id: new ObjectId(req.params.id)})
                  .then((user)=>{
                    res.json(user)
                  })
                  .catch((err)=>{
                    res.json(err)
                  })                
              }
            })
}

module.exports = {
    getuser,adduser,getuserbyid,updateuserbyid,deleteuserbyid}


