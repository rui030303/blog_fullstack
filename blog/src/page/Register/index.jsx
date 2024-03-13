import './style.scss'
import { Link, useNavigate } from 'react-router-dom'

const Register = ()=>{
    const navigate = useNavigate();
    return (
        <div className="register"> 
        <h1>Sign Up</h1> 
        <form action="">
            <input type="text" placeholder="username"/>
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password"/>
            <button onClick={()=>{navigate('/register')}}>Register</button>
            <button onClick={()=>{navigate('/login')}}>Login</button>
            <span className='error'>error</span>
        </form>
        </div>
    )
}

export default Register