import React from 'react' 
import { useSelector,useDispatch } from 'react-redux'
import { update } from '../states/redux/notesSlice';
const dispatch= useDispatch();
const notes =  useSelector((state) => state.notes.value)


const NoteItem = ()=>{

}



const Notes = () => {
  return (
    <div>  {notes.map((note)=>{
        return(
        //   <h1 key={note.id}>{note.title}</h1>
            <NoteItem key={note.id} {}/>
        )
      })}</div>
  )
}

export default Notes