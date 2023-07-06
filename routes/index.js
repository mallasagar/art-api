var express = require('express');
var router = express.Router();
const indexuser = require('../controller/home.controller');

const multer =require('multer')
const mystorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../public/images')
    },
    filename: function (req, file, cb) {
     const file_name=file.originalname;
     cb(null,file_name)
    }
  })
  
const upload=multer({storage:mystorage})
router.route('/')
.get(indexuser.gethomeuser)
.post( upload.single("image"),indexuser.addhomeuser)

router.route("/:id")
    .get(indexuser.gethomeuserbyid)
    .put(indexuser.updatehomeuserbyid)
    .delete(indexuser.deletehomeuserbyid)



module.exports = router;
