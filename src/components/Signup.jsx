import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setAuthToken,setAlert, setError } from '../states/redux/notesSlice'
import { useNavigate } from 'react-router-dom'



const Signup = ({ }) => {
    const navigate = useNavigate()
    const  dispatch= useDispatch()
    const getAuth = useSelector((state) => state.notes.authToken);
    const [credentials,setCredentials] = useState({name:"",email:"",password:""})
    // console.log(credentials)
    const host = "http://localhost:3000"



        const onChange = (e)=>{
            setCredentials({...credentials, [e.target.name]: e.target.value})
        }
    
    const handleSubmit= async(e)=>{
        e.preventDefault()
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(credentials)
          });


    
        const res=await response.json()
        if(res.error){
            dispatch(setAlert(res.error))
        }
        else if(credentials.email<=5 || credentials.name.length<=5 || credentials.password.length<=6){dispatch(setAlert('Email,Name and password length should be greater then 5 characters'))}
        
        else{
        console.log(res)
        dispatch(setAuthToken(res.authtoken))
        dispatch(setAlert('You have Succesfully Signed Up'))
        navigate("/")}
    }
  return (
    <div>
    <form  onSubmit={handleSubmit}>
    <div className="mb-3">
            <label htmlFor="password" className="form-label">Name</label>
            <input type="text" className="form-control"  value={credentials.name} onChange={onChange} name="name" id="password" />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
        </div>
        

        <button type="submit" disabled={credentials.email<=5 || credentials.name.length<=3 || credentials.password.length<=6} className="btn btn-primary">Submit</button>
    </form>
</div>
  )
}

export default Signup