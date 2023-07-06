const Contact =require('../model/contactmodel')

function getcontactuser(req,res,next){
      Contact.find()
      .exec()
        .then((success)=>{
                res.json(success)
        })
        .catch((err)=>{
            res.json({Error:err});
           })
    //   .then((contact)=>{
    //     res.json(contact);
    //   })
    //   .catch((err)=>{
    //     res.json({Error:err});
    //   })

}

function addcontactuser(req,res,next){
  console.log("File", req.file)
  const contact=new Contact(req.body);
   contact.save()
   .then((success)=>{
    res.json(success);
   })
   .catch((err)=>{
    res.json({Error:err});
   })
}

function getcontactuserbyid(req,res,next){
    Contact.findById(req.params.id)
    .then((contact)=>{
      res.json(contact)
    })
    .catch((err)=>{
      res.json({Error:err})
    })
}

function updatecontactuserbyid(req,res,next){
Contact.updateOne({
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

function deletecontactuserbyid(req,res,next){
    Contact.deleteOne({
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
    getcontactuser,addcontactuser,getcontactuserbyid,updatecontactuserbyid,deletecontactuserbyid}


