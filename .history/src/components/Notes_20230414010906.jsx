import React from 'react' 
import { useSelector,useDispatch } from 'react-redux'
// import { update } from '../states/redux/notesSlice';
import { addNote } from '../states/redux/notesSlice'
import AddNote from './AddNote'

const NoteItem = ({title,description,tag})=>{
    return(
        <div className="col-md-3"> 
        <div class="card my-3"> 
            <div class ="card-body">
            {/* <h5 class ="card-title">{title}</h5> */}
            {/* <p class ="card-text">{description}</p>  */}
    <div className="col-md-5">
        <div className="card my-3">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <h5 className="card-title">{title}</h5><i className="far fa-trash-alt mx-2"></i>
                    <i className="far fa-edit mx-2"></i>
                </div>
                <p className="card-text">{description}</p>

            </div>
        </div></div>
        </div>
        </div>
    </div>
    )
}



const Notes = () => {
    const dispatch= useDispatch();
const notes =  useSelector((state) => state.notes.value)

const newNote = {tag:"asad",title:"shitty",description:"lorem1212121jasn ausb ashd kasd ahsklkjsdn "}
  return (
    
    <div className='row my-3'> 
    <button onClick={()=>{dispatch(addNote(newNote))}}>note sex check</button>
         {notes.map((note)=>{
        return(
        //   <h1 key={  .id}>{note.title}</h1>
            <NoteItem key={note.id} {...note}/>
        )
      })}</div>
  )
}

export default Notes