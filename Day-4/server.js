const express= require("express");
var cors =require('cors');


const app= express();
app.use(cors())
const mongoose= require("mongoose");
require("dotenv").config()

const port=process.env.port


const {createAccount,login}=require("./controllers/user")
const {createNotebook,getNotes,updateNotebook,deleteNotebook}=require("./controllers/notes")
const auth=require("./middleware/auth")

app.use(express.json());

app.post("/signin",createAccount);

app.post("/login",login); 

app.post("/CreateNotebook",createNotebook);

app.get("/allNotes",getNotes);

app.put("/update/:id",updateNotebook);

app.delete("api/delete/:id",deleteNotebook);


mongoose.connect(process.env.mongo_url)
.then(()=>{
    console.log("Database is connected")
    app.listen(port,()=>{
    console.log(`Server is running is port number ${port}`);
});
})
.catch((e)=>{
    console.log("somthing went wrong",e)
})
