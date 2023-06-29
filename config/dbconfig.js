
const mongodb=require("mongodb");
const MongoClient=mongodb.MongoClient;
const dbUrl =  "mongodb://127.0.0.1:27017"
const ObjectId=mongodb.ObjectId
const dbName = "art"




function dbconnection(cb){
  MongoClient.connect(dbUrl)
  .then((client)=>{
      const db=client.db(dbName);
      cb(null,db)
  })    
  .catch((err)=>{
      cb(err);
  })
}

module.exports= dbconnection;