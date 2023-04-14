import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { update } from '../states/redux/notesSlice';


const Home = () => {
  const dispatch= useDispatch();
  const tag =  useSelector((state) => state.notes.value.tag)
  console.log(tag)
  return (
    <div>Home
        <button onClick={()=>dispatch(update())} >change tag</button>
        <h1>{tag}</h1>
    </div>
  )
}

export default Home