import axios from 'axios';
import './style.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Login = ()=>{
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username:"",
        password:""
    })
    const [errorMsg, setErrorMsg] = useState(null)
    const handleChange = (e)=>{
        setUser((prev)=>({...prev, [e.target.name]:e.target.value}))
    }

    const loginSubmit = async (e)=>{
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/login", user);
            navigate('/')
        } catch (err) {
            // setErrorMsg(err.response.data)
            console.log(err);
        }
    }


    return (
        <div className="login"> 
        <h1>Login</h1> 
        <form onSubmit={loginSubmit} action="">
            <input required type="text" placeholder="username" name='username' onChange={handleChange}/>
            <input required type="password" placeholder="password" name='password' onChange={handleChange}/>
            <span>Don't you have an account? 
                <Link to = '/register'>Register</Link>
            </span>
            {/* <button type='button' onClick={()=>{navigate('/register')}}>Sign Up</button> */}
            <button type="submit">Login</button>
            {errorMsg && <span className='error'>{errorMsg}</span>}
        </form>
        </div>
    )
}

export default Login