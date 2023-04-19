import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
// import {  } from '../states/redux/notesSlice';
import Notes from './Notes';
import AddNote from './AddNote'
import { Link } from 'react-router-dom';

const Home = () => {
  const auth = useSelector((state)=>state.notes.authToken)

  if(auth===""){
    return(

      <>
      <div className="bg-primary py-5">
        <div className="container">
          <h1 className="display-3 text-center text-white mb-3">Welcome to InoteBook</h1>
          <p className="lead text-center text-white">A simple and intuitive note taking app.</p>
          <div className="row mt-5">
            <div className="col-lg-6 mx-auto">
              <div className="card border-0 shadow-lg">
                <div className="card-body">
                  <h2 className="text-center mb-4">Please Login to see your notes</h2>
                  <div className="d-flex justify-content-center mb-4">
        <Link to="/login" className="btn btn-lg btn-primary text-light mx-4 btn-outline-dark shadow ">Login</Link>
        <h3> Or </h3>
        <Link to="/signup" className="btn btn-lg btn-primary mx-4 text-light btn-outline-dark shadow " >Sign Up</Link>
      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 p-4 shadow-lg">
            <h2 >Organize your notes with ease</h2>
            <p>With InoteBook, you can create, edit, and delete notes with just a few clicks. Our app is designed to be easy to use, so you can focus on what matters most: your notes.</p>
          </div>
          <div className="col-md-6 p-4 shadow-lg ">
            <h2 className="">Access your notes from anywhere</h2>
            <p>With our app, your notes are stored securely in the cloud, so you can access them from any device, anywhere in the world. Never lose a note again!</p>
          </div>
        </div>
      </div>
    </>
    
    )
  }


  return (
    <div>
      
      <AddNote/>
      
        <Notes></Notes>
    </div>
  )
}

export default Home