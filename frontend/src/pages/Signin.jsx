import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'


const Signin = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const create =async()=>{
        const response=await axios.post("http://localhost:5000/signin",{name,email,password});
        console.log(response.data.userdata.name);
        if(response){
             alert(`${response.data.message}account succesfully created`);
        }
       
    }
  return (
    <div>
      <h1>Create Account</h1>

      <input type="text" placeholder='Enter your name' onChange={(e)=>{
        
        setName(e.target.value);
      }}/>
<br />
<br />

      <input type="email" placeholder='Enter your email id' onChange={(e)=>{
        
        setEmail(e.target.value);
      }}/>


<br />
<br />

      <input type="password" placeholder='Enter your password' onChange={(e)=>{
        
        setPassword(e.target.value);
      }}/>
<br />
<br />
<button onClick={create}>Signin</button>
<p>Already have an account
<Link to="/">Login</Link>
 </p>
    </div>
  )
}

export default Signin
