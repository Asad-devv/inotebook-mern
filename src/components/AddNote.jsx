import React,{useState} from 'react' 
import { useDispatch,useSelector } from 'react-redux'
import {addNoteOnClient, addNote,fetchNotes,setAlert } from '../states/redux/notesSlice'


const AddNote = () => {
const dispatch = useDispatch()
    const [note, setNote] = useState({title: "", description: "", tag: "default"})
    const error = useSelector((state)=>state.notes.error)
    const auth = useSelector((state)=>state.notes.authToken)
    // console.log(auth)


    const handleClick = (e)=>{

        if(note.title==="" || note.tag===""){
            alert("please fill all fields")
        }
        e.preventDefault();
        
        dispatch(addNote(note))
        dispatch(setAlert('successfully added a new note'))
        // console.log("error",error)
        dispatch(fetchNotes())
        

        setNote({title:"",description:""})
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
if(auth===""){
    return(
        <>
        <div className='d-flex flex-column container'>
        <h1>Welcome to InoteBook</h1>
        <h3>Please login to see your notes</h3>
        </div>
        </>
    )
}


  return (
    
    <div className="container my-3">
    <h2>Add a Note</h2>
    <form className="my-3">
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" value={note.title} id="title" name="title" aria-describedby="emailHelp" onChange={onChange} /> 
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" value={note.description} name="description" onChange={onChange} />
        </div>
        <button type="submit" disabled={note.title.length<5 || note.description.length<5} className="btn btn-primary" onClick={handleClick}>Add note</button>
    </form>

</div>
    
  )
}

export default AddNote