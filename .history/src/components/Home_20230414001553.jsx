import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { update } from '../states/redux/notesSlice';


const Home = () => {
  const dispatch= useDispatch();
  const notes =  useSelector((state) => state.notes.value)
  console.log(notes)
  return (
    <div>
      
      <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class ="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class ="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
      
      Home
        <button onClick={()=>dispatch(update())} >change tag</button>
        <h1>Your Notes</h1>
        {notes.map(()=>{
          returm
        })}
    </div>
  )
}

export default Home