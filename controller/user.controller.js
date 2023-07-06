
const User=require('../model/userindexmodel.js')

function getuser(req,res,next){
  User.find({})
  .then((user)=>{
    res.json(user)
  })
  .catch((err)=>{
    res.json({Error:err})
  })

}

function adduser(req,res,next){
  const user=new User(req.body);
 
   user.save()
   .then((success)=>{
    res.json(success);
   })
   .catch((err)=>{
    res.json({Error:err});
   })
}

function getuserbyid(req,res,next){
    User.findById(req.params.id)
    .then((users)=>{
      res.json(users)
    })
    .catch((err)=>{
      res.json({Error:err})
    })
}

function updateuserbyid(req,res,next){
User.updateOne({
  _id:req.params.id
},{
  $set:req.body
})
.then((success)=>{
  res.json(req.body)
})
.catch((err)=>{
  res.json({Error:err})
})
}

function deleteuserbyid(req,res,next){
    User.deleteOne({
      _id:req.params.id
    })
    .then((success)=>{
      res.json(success)
    })
    .catch((err)=>{
      res.json({Error:err})
    })
}

module.exports = {
    getuser,adduser,getuserbyid,updateuserbyid,deleteuserbyid}


