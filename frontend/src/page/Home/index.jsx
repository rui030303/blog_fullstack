import './style2.scss'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = ()=>{
    const [posts, setPosts] = useState([])
    const cat = useLocation().search
    const fetchData = async ()=>{
        try {
           const res = await axios.get(`http://localhost:3000/posts${cat}`)
           setPosts(res.data)
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(()=>{fetchData()}, [cat])
   
    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }
    return (
        <div className="home">
            {posts.map(item=>
                <div className = 'post' key={item.id}>
                    <div className="img">
                        <img src={`../../../public/uploads/${item.img}`} alt="error" />
                    </div>
                    <div className="info">
                        <Link to={`/posts/${item.id}`}>
                            <h1>{item.title}</h1>
                        </Link>
                        <p>{getText(item.desc)}</p>
                        <button>Read More</button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Home