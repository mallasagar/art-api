const Home=require('../model/home.model.js')

function gethomeuser(req,res,next){
  Home.find()
  .then((home)=>{
    res.json(home)
  })
  .catch((err)=>{
    res.json({Error:err})
  })

}

function addhomeuser(req,res,next){
  console.log("File", req.file)
  const home=new Home(req.body);
   home.save()
   .then((success)=>{
    res.json(success);
   })
   .catch((err)=>{
    res.json({Error:err});
   })
}

function gethomeuserbyid(req,res,next){
    Home.findById(req.params.id)
    .then((users)=>{
      res.json(users)
    })
    .catch((err)=>{
      res.json({Error:err})
    })
}

function updatehomeuserbyid(req,res,next){
Home.updateOne({
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

function deletehomeuserbyid(req,res,next){
    Home.deleteOne({
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
    gethomeuser,addhomeuser,gethomeuserbyid,updatehomeuserbyid,deletehomeuserbyid}


