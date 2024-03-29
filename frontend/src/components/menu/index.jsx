import './style.scss'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
const Menu = ({cat})=>{
    const [posts, setPosts] = useState([])
    // const cat =useLocation().search
    const fetchData = async ()=>{
        try {
           const res = await axios.get(`https://blog-rui-backend.onrender.com/posts/?cat=${cat}`)
           setPosts(res.data)
        } catch (err) {
            console.log(err);
        } 
    }
    useEffect(()=>{fetchData()}, [cat])
    return(
        <div className='menu'>
            {posts.map(item=>
                <div className = 'post' key={item.id}>
                    <div className="img">
                        <img src={item.img} alt="error" />
                    </div>
                    <div className="info">
                        <Link to={`/posts/${item.id}`}>
                            <h1>{item.title}</h1>
                        </Link>
                        <button>Read More</button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Menu