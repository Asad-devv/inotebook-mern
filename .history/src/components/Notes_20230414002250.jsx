import React from 'react' 
import { useSelector,useDispatch } from 'react-redux'
import { update } from '../states/redux/notesSlice';
const dispatch= useDispatch();
const notes =  useSelector((state) => state.notes.value)


const NoteItem = ({title,description,tag})=>{
    return(
        <h2>a</h2>
    )
}



const Notes = () => {
  return (
    <div>  {notes.map((note)=>{
        return(
        //   <h1 key={note.id}>{note.title}</h1>
            <NoteItem key={note.id} {...note}/>
        )
      })}</div>
  )
}

export default Notes