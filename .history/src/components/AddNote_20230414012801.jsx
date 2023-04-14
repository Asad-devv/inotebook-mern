import React,{useState} from 'react' 
import { useDispatch } from 'react-redux'
import { addNote } from '../states/redux/notesSlice'


const AddNote = () => {
const dispatch = useDispatch()
    const [note, setNote] = useState({title: "", description: "", tag: "default"})


    const handleClick = (e)=>{

        if(note.title==="" || note.tag===""){
            alert("please fill all fields")
        }
        e.preventDefault();
        dispatch(addNote(note))
        setNote({title:"",description:""})
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
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
            <input type="text" className="form-control" id="description" value={note.describe('first', () => { second })} name="description" onChange={onChange} />
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
    </form>
</div>
    
  )
}

export default AddNote