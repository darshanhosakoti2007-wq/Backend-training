
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

import { useState } from 'react'
const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const login=async() => {
        const response=await axios.post("http://localhost:5000/login",{email,password});
  
        alert(response.data.message)
    }
  return (
    <div>
      <h1>Login Account</h1>
      <input type="text" placeholder='Enter your email id' onChange={(e)=>{
        
        setEmail(e.target.value);
      }}/>

    <br />
    <br />

       <input type="password" placeholder='Enter your password' onChange={(e)=>{
       
        setPassword(e.target.value);
      }}/>
    <br />
    <br />

    <button onClick={login}>Login</button>

    <p>Don't have an account-
        <Link to="/signin"> Signin</Link>
       </p>

    </div>
  )
}

export default Login
