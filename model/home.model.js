const mongoose=require("mongoose")

const Homeschema=new mongoose.Schema({


    name:{
            type:String,
            required:true
    },
    email:{
    
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        default:null
    }
    
    // user index table structure
    
    
    
    
} , {
    timestamps:true
}
);

const Home=mongoose.model('home',Homeschema)

 module.exports=Home;