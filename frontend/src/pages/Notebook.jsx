import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Notebook = () => {
  const [notes,setNotes]=useState([]);
  const getnotes=async () => {
    const response= await axios.get("http://localhost:5000/allNotes");
    // console.log(response.data.allnotebooks[0]); 
    setNotes(response.data.allnotebooks);
  }
 

  useEffect(()=>{getnotes()},[])  

  return (
    <div>
      <h1>Availble notes...</h1> 
      {/* <button onClick={getnotes}>Get all Notes</button> */}

      {notes.map((element, index) => {
        // console.log(element.heading);
        // console.log(element.content);
      return (
        <>
          <h3>{element.heading}</h3>
          <p>{element.content}</p>
          <button onClick={update}>Update</button>
          <button >Delete</button>
          <hr>
          </hr>
        </>
      )
          
      })}
    </div> 
  )
}

export default Notebook