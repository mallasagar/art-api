const mongoose=require("mongoose")

const Userhomeschema=new mongoose.Schema({


    name:{
            type:String,
            required:true
    },
    email:{
    
        type:String,
        required:true,
        unique:true
    }
    
    // user index table structure
    
    
    
    
} , {
    timestamps:true
}
);



const User=mongoose.model('User',Userhomeschema)

 module.exports=User;