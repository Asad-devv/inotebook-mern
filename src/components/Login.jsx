import React,{useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { setAuthToken,setAlert,setError } from '../states/redux/notesSlice'

const Login = ({}) => {
    const  dispatch= useDispatch()
    const getAuth = useSelector((state) => state.notes.authToken);
    const navigate = useNavigate()
    const host = "http://localhost:3000"
    const error = useSelector((state)=>state.notes.error)

    const [credentials,setCredentials] = useState({email:"",password:""})

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(credentials)
          });

    const res=await response.json()
        if(res.error){
            console.log("king")
            dispatch(setAlert(res.error))
            console.log(res.error)
        }
        else{
        dispatch(setAuthToken(res.authtoken))
        dispatch(setAlert('succesfully signed In'))
         navigate("/")
        console.log(res)
        }
    }
  return (
    <div>
        
    <form  onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
        </div>

        <button type="submit" disabled={credentials.password.length<=5 || credentials.email.length<=8 } className="btn btn-primary">Submit</button>
    </form>
</div>
  )
}

export default Login