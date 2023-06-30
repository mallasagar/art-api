var express = require('express');
var router = express.Router();
const usercontroller = require('../controller/user.controller');
// const ObjectId=mongodb.ObjectId





router.route('/')
.get(usercontroller.getuser)
.post(usercontroller.adduser)



router.route("/:id")
    .get(usercontroller.getuserbyid)
    .put(usercontroller.updateuserbyid)
    .delete(usercontroller.deleteuserbyid)



module.exports = router;
