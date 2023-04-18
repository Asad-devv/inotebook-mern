import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
// import { update } from '../states/redux/notesSlice';
import Notes from './Notes';
import AddNote from './AddNote'

const Home = () => {

//   console.log(notes)
  return (
    <div>
      
      <AddNote/>
      
        <Notes></Notes>
    </div>
  )
}

export default Home