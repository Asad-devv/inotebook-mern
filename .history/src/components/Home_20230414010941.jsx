import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
// import { update } from '../states/redux/notesSlice';
import Notes from './Notes';



const Home = () => {
  const dispatch= useDispatch();
  const notes =  useSelector((state) => state.notes.value)
  console.log(notes)
  return (
    <div>
      
      <AddNote/>
      
        <Notes></Notes>
    </div>
  )
}

export default Home