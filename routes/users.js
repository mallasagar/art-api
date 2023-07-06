var express = require('express');
// const ObjectId=mongodb.ObjectId

const multer =require('multer')
const upload=multer({
    dest:"./public/images"
})
var router = express.Router();
const usercontroller = require('../controller/user.controller');





router.route('/')
.get(usercontroller.getuser)
.post( upload.single("image"),usercontroller.adduser)



router.route("/:id")
    .get(usercontroller.getuserbyid)
    .put(usercontroller.updateuserbyid)
    .delete(usercontroller.deleteuserbyid)



module.exports = router;
