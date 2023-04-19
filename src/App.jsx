import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {Home,Navbar,About,Login,Signup,Alert} from "./components"
import { Route, Routes } from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux'
import { setAuthToken } from './states/redux/notesSlice'
""

function App() {
  

  const [authToken, setAuthToken] = useState("")
  return (
      <>
      <Navbar/>
      
      <div className="contaianer">
        <div className='h-50'>
      <Alert/>
      </div>
      <Routes>
      <Route path="/" element={
        
      <Home />
      
      } />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login authToken = {authToken} setAuthToken={setAuthToken} />} />
      <Route path="/signup" element={<Signup authToken = {authToken} setAuthToken={setAuthToken} />} />


      </Routes>
      </div>

    </>
  );
}
export default App
