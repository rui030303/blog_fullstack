import { useState } from 'react';
import './style.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Register = ()=>{
    const navigate = useNavigate();
    const [user, setUser] = useState(
        {
            username:"",
            email:"",
            password:""
        }
    )
    
    const [errorMsg, setErrorMsg] = useState(null)

    const handleChange = (e)=>{
        setUser((prev)=>({...prev, [e.target.name]:e.target.value}))
    }
    
    const registerSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post("http://localhost:3000/register", user)
            navigate("/login")
        }catch(err){
            setErrorMsg(err.response.data);
            console.log(err.response.data);
        }
        
    }

    return (
        <div className="register"> 
        <h1>Sign Up</h1> 
        <form action="">
            <input type="text" placeholder="username" name='username' onChange={handleChange}/>
            <input type="email" placeholder="email" name='email' onChange={handleChange}/>
            <input type="password" placeholder="password" name='password' onChange={handleChange}/>
            <button onClick={registerSubmit}>Register</button>
            <button onClick={()=>{navigate('/login')}}>Login</button>
            {errorMsg &&<span className='error'>{errorMsg}</span>}
            {/* <span className='error'>error</span> */}
        </form>
        </div>
    )
}

export default Register