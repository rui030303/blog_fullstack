import './style.scss'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext.jsx'
import { useContext } from 'react'

const Navbar = ()=>{
    const {currentUser, logout} = useContext(AuthContext)

    return <div className="navbar">
            <Link to={'/'}>
                <img src={logo} alt="error" />
            </Link>
            <div className="links">
            <Link className='link' to={'/?cat=a'}>
                <h1>A</h1>
            </Link>
            <Link className='link' to={'/?cat=b'}>
                <h1>B</h1>
            </Link>
            <Link className='link' to={'/?cat=c'}>
                <h1>C</h1>
            </Link>
            <Link className='link' to={'/?cat=d'}>
                <h1>D</h1>
            </Link>
            <Link className='link' to={'/?cat=e'}>
                <h1>E</h1>
            </Link>
            {currentUser && <span>{currentUser.username}</span>}
            {currentUser ? <span onClick={async()=>{await logout(currentUser)}}>Logout</span> : <Link to={"/login"}></Link>}
            <span className="write">
                <Link className='link' to={'/write'}>
                    <h1>Write</h1>
                </Link>
            </span>
            </div>

        </div>
}

export default Navbar