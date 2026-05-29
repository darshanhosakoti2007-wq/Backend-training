const User=require("../model/user");
const bcrypt=require("bcrypt");
require("dotenv").config()

const jwt=require("jsonwebtoken")


const createAccount=async (req,res)=>{

    try{
            const {name,email,password}=req.body
            const checkuser=await User.findOne({email})
            
            if(checkuser){
                return res.status(401).send("user is already login")
            }
        const hashpassword=await bcrypt.hash(password,12);
    const userdata=await User.create({
        name,email,password:hashpassword
    })
    res.json({
        message:"account create succesful",
        userdata
})
    }
    catch(e){
        res.send(e);
    }
}


const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const userdata=await User.findOne({email});
       
        const hashpassword=await bcrypt.compare(password,userdata.password);
        if(!hashpassword){
            throw new Error("User is not found");
        }

        const token=await jwt.sign(
            {id:userdata._id},
            process.env.secret_key,
            {expiresIn:"24h"}

        )
       
        res.json({
            message:"welcome to kle college",
            userdata,
            token:token
        })
    }


    catch(error){
        res.send({message:error.message});
    }
    
}
module.exports={createAccount,login}

