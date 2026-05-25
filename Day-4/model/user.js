const mongoose=require("mongoose");
const validator=require("validator");
const userscheme=  new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        lowercase:true,
        unique:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email");
            }
        }
    },
    password:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("password is weak");
            }
        }
    }
})

module.exports=mongoose.model("user",userscheme);
 