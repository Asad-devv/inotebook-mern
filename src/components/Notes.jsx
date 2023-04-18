import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { update } from '../states/redux/notesSlice';
import {deleteNote, editNote, fetchNotes, deleteNoteOnClient, editNoteOnClient,setAlert } from '../states/redux/notesSlice'



const NoteItem = ({ title, description, tag, _id ,setEditableNote}) => {

    const dispatch = useDispatch();
    return (
        <div className='card my-3 mx-3 col-md-3 bg-light shadow-lg ' >
            <div className='card-body my-2 '>
                <div className='d-flex align-items-center justify-content-between'>
                    <h4 className='card-title  font-weight-bold text-dark'>{title}</h4>
                    <div>
                        <i

                            className='far  fa-trash-alt mx-2 text-danger'
                            onClick={() => {
                                dispatch(deleteNote(_id));
                                dispatch(deleteNoteOnClient(_id));
                                dispatch(setAlert('successfully deleted a note'))

                            }}
                            style={{ cursor: 'pointer' }}

                        ></i>
                        <i
                            data-bs-toggle='modal'
                            style={{ cursor: 'pointer' }}

                            data-bs-target='#exampleModal'
                            className=' pe-auto far fa-edit mx-2 text-primary'
                            onClick={() => {
                                setEditableNote({
                                    tag: tag,
                                    title: title,
                                    description: description,
                                    _id : _id
                                })
                             
                            }}
                        ></i>
                    </div>
                </div>
                <p className=' font-weight-bold card-text  text-secondary'>{description}</p>
                {tag && <span className='badge bg-primary'>{tag}</span>}
            </div>
        </div>

    )
}



const Notes = () => {
    const [editableNote, setEditableNote] = useState({   tag: "",
    title: "",
    description: ""})
    const dispatch = useDispatch();


    const auth = useSelector((state) => state.notes.authToken)
    const handleClick = (e) => {
        dispatch(setAlert('successfully edited a note'))
        dispatch(editNoteOnClient(editableNote));
        dispatch(editNote(editableNote));
    }
    useEffect(() => {
        dispatch(fetchNotes())

    }, [dispatch,])


    const onChange = (e) => {
        setEditableNote({ ...editableNote, [e.target.name]: e.target.value })
    }
    const notes = useSelector((state) => state.notes)


    if (notes.status === "loading") {
        return <h1>Loading Notes Data</h1>
    }


    if (auth === "") {
        return (
            <h1 className='text-center' >Please Login to see you notes</h1>)
    }
    return (

        <>
            <h1 className='text-center'>Your Notes</h1>
            <div className='row my-3'>
                <div className='col'>
                    <div className='d-flex flex-wrap'>
                        {notes?.notes?.length >= 1 &&
                            notes?.notes?.map((note, index) => {
                                return <NoteItem setEditableNote={setEditableNote}  key={note._id} {...note} />;
                            })}
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="exampleModalLabel">Edit Note</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" name="title" value={editableNote.title} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" name="description" value={editableNote.description} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="tag" name="tag" value={editableNote.tag} onChange={onChange} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">

                            <button

                                disabled={editableNote.title.length<5 || editableNote.description.length<5}
                                onClick={handleClick} type="button"   className="btn btn-primary"
                                data-bs-dismiss="modal">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Notes