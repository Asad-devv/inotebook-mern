import React,{useEffect,useState} from 'react'
import {Link,useLocation } from "react-router-dom"

const Navbar = () => {


  let location = useLocation();
  const [activeLink, setActiveLink] = useState()

  useEffect(() => {
    // Google Analytics
    setActiveLink(location.pathname)
    console.log(activeLink)
  }, [location]);

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
              <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link >
            </li>
            
            <li className="nav-item">
              <Link to="/about" className={`${location.pathname==="/about" }   nav-link`} href="#">About</Link >
            </li>
            
          </ul>
        </div>
      </div>
    </nav>  )
}

export default Navbar