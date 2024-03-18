import './style.scss'
import logo from '../../img/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../../components/menu'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../context/authContext'

const Single = ()=>{
    const [post, setPost] = useState({})
    const postID = useLocation().pathname.split('/')[2]
    const navigate = useNavigate()
    const {currentUser} = useContext(AuthContext)
    const fetchData = async ()=>{
        try {
            const res = await axios.get(`http://localhost:3000/posts/${postID}`)
            setPost(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{fetchData()}, [postID])

    const deletePost = async ()=>{
        try {
            const res = await axios.delete(`http://localhost:3000/posts/${postID}`,{ withCredentials: true })
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="single">
            <div className="content">
                <img src={post.img} alt='postImg error' />
                <div className="user">
                    <img src={post.userImg} alt="uesrImg error" />
                    <div className="info">
                        {post.length > 0 && <span className='username'><b>{post[0].username}</b></span>}
                        <span className='date'>post date</span>
                    </div>
                    <Link to={'/write?edit = 2'} state={post}>
                        {post.length > 0 && currentUser.id === post[0].uid &&<button>Edit</button>}
                    </Link>
                    <Link >
                        {post.length > 0 && currentUser.id === post[0].uid &&<button onClick={deletePost}>Delete</button>}
                    </Link>
                </div>
                <div className='title'>
                    {post.title}
                </div>
                <div className="text">
                    {post.desc}
                    
                </div>
            </div>
            <div className="menu">
                {post.length>0 && <Menu cat = {post[0].cat}></Menu>}
            </div>
        </div>
    )
}
    

export default Single