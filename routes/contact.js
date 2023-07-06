
var express = require('express');
var router = express.Router();

const contactcontroller = require('../controller/contactcontroller');
// const ObjectId=mongodb.ObjectId
const multer =require('multer')

const mystorage=multer.diskStorage({
    filename:function(req,file,cb){
        const file_name=file.originalname;
        cb(null,file_name);
    },
    destination:function(req,file, cb){
        cb(null,process.cwd()+"/public/images/")
    }
})

const upload = multer({ 
    storage:mystorage
 })



router.route('/')
.get(contactcontroller.getcontactuser)
router.route('/')
    .post(upload.single("image"),contactcontroller.addcontactuser)



router.route("/:id")
    .get(contactcontroller.getcontactuserbyid)
    .put(contactcontroller.updatecontactuserbyid)
    .delete(contactcontroller.deletecontactuserbyid)






module.exports = router;
