import React,{useEffect,useState} from 'react'
import {Link,useLocation,useNavigate } from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux'
import { setAuthToken } from '../states/redux/notesSlice'


const Navbar = () => {
const dispatch = useDispatch()
const auth = useSelector((state) => state.notes.authToken);
const navigate = useNavigate()
  let location = useLocation();
  const [activeLink, setActiveLink] = useState()

  useEffect(() => {
    // Google Analytics
  }, [location]);

const handleLogout = ()=>{
  dispatch(setAuthToken(''))
  navigate("/")
}

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className={`${location.pathname==="/" && "active"}   nav-link`} aria-current="page" href="#">Home</Link >
            </li>
            
            <li className="nav-item">
              <Link to="/about" className={`${location.pathname==="/about" && "active"}   nav-link`} href="#">About</Link >
            </li>
            
          </ul>
          
          <form className="d-flex"> 
          {auth===""?
          <>
                    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link> </>:
                    <button className="btn btn-primary mx-1" onClick={handleLogout}>Logout</button>
             }   </form>
        </div>
      </div>
    </nav>  )
}

export default Navbar