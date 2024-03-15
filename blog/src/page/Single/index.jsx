import './style.scss'
import logo from '../../img/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../../components/menu'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Single = ()=>{
    const [post, setPost] = useState({})
    const postID = useLocation().pathname.split('/')[2]
    const navigate = useNavigate()
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
            const res = await axios.delete(`http://localhost:3000/posts/${postID}`)
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
                        <span className='username'><b>{post.username}</b></span>
                        <span className='date'>post date</span>
                    </div>
                    <Link to={'/write?edit = 2'}>
                        <button>Edit</button>
                    </Link>
                    <Link >
                        <button onClick={deletePost}>Delete</button>
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
                <Menu></Menu>
            </div>
        </div>
    )
}
    

export default Single