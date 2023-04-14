import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {Home,Navbar,About} from "./components"
import { Route, Routes } from "react-router-dom"




function App() {

  return (
      <>
      <Navbar/>
      <div className="container">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      </Routes>
      </div>

    </>
  );
}
export default App
