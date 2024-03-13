import './style.scss'
import { Link, useNavigate } from 'react-router-dom'

const Login = ()=>{
    const navigate = useNavigate();
    return (
        <div className="login"> 
        <h1>Login</h1> 
        <form action="">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <span>Don't you have an account? 
                <Link to = '/register'>Register</Link>
            </span>
            <button onClick={()=>{navigate('/register')}}>Sign Up</button>
            <button>Login</button>
            <span className='error'>error</span>
        </form>
        </div>
    )
}

export default Login