import React from 'react' 
import { useSelector,useDispatch } from 'react-redux'
import { update } from '../states/redux/notesSlice';
const dispatch= useDispatch();
const notes =  useSelector((state) => state.notes.value)



const Notes = () => {
  return (
    <div>Notes</div>
  )
}

export default Notes