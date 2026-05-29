import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Login from './pages/Login'
import Signin from './pages/Signin'
import Notebook from './pages/Notebook'

const App = () => {
  return (
    <div>
     <BrowserRouter>

     <Routes>
      <Route path="/" element={<Login/>} />

      <Route path="/signin" element={<Signin/>} />

      <Route path="/notes" element={<Notebook/>} />


     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
