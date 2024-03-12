import './style.scss'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'

const Navbar = ()=>{
    return <div className="navbar">
            <img src={logo} alt="error" />
            <div className="links">
            <Link className='link' to={'/?cat=cinema'}>
                <h1>CINEMA</h1>
            </Link>
            <Link className='link' to={'/?cat=cinema'}>
                <h1>CINEMA</h1>
            </Link>
            <Link className='link' to={'/?cat=cinema'}>
                <h1>CINEMA</h1>
            </Link>
            <Link className='link' to={'/?cat=cinema'}>
                <h1>CINEMA</h1>
            </Link>
            <Link className='link' to={'/?cat=cinema'}>
                <h1>CINEMA</h1>
            </Link>
            <span>John</span>
            <span>Logout</span>
            <span className="write">
                <Link className='link' to={'/write'}>
                    <h1>Write</h1>
                </Link>
            </span>
            </div>

        </div>
}

export default Navbar