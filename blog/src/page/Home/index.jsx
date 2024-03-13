import './style.scss'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
const Home = ()=>{
    const posts = [
        {
            id:1,
            title:"test1",
            desc:"describe1",
            img:logo
        },
        {
            id:2,
            title:"test2",
            desc:"describe2",
            img:logo
        },
        {
            id:3,
            title:"test3",
            desc:"describe3",
            img:logo
        }
    ]
    return (
        <div className="home">
            {posts.map(item=>
                <div className = 'post' key={item.id}>
                    <div className="img">
                        <img src={item.img} alt="error" />
                    </div>
                    <div className="info">
                        <Link to={`/single/${item.id}`}>
                            <h1>{item.title}</h1>
                        </Link>
                        <p>{item.desc}</p>
                        <button>Read More</button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Home