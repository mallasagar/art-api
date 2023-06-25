var express = require('express');
var router = express.Router();

router.route('/')
.get(function(req,res,next){
    res.send("respond with a body")
})
.post(function(req,res,next){
    res.send("respond with a body")
})
.put(function(req,res,next){
    res.send("respond with a body")
})
.delete(function(req,res,next){
    res.send("respond with a body")
})


// CRUD with id
router.route('/id')
.get(function(req,res,next){
    res.send("respond with a body")
})
.post(function(req,res,next){
    res.send("respond with a body")
})
.put(function(req,res,next){
    res.send("respond with a body")
})
.delete(function(req,res,next){
    res.send("respond with a body")
})


module.exports = router;
