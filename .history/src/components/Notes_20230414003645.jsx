import React from 'react' 
import { useSelector,useDispatch } from 'react-redux'
// import { update } from '../states/redux/notesSlice';



const NoteItem = ({title,description,tag})=>{
    return(
        <div className="col-md-3"> 
        <div class="card my-3"> 
            <div class ="card-body">
            <h5 class ="card-title">{title}</h5>
            <p class ="card-text">{description}</p> 
            </div>
        </div>
    </div>
    )
}



const Notes = () => {
    const dispatch= useDispatch();
const notes =  useSelector((state) => state.notes.value)
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