import React from 'react'
import SignIn from './pages/SignIn'
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import SignUp from './pages/SignUp'
const app = initializeApp(firebaseConfig);

const App = () => {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>} />
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
