import './style.scss'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import Menu from '../../components/menu'

const Single = ()=>{
    const post = {
        id:1,
        title:"test1",
        desc:"describe1",
        img:logo
    }
    return (
        <div className="single">
            <div className="content">
                <img src={post.img} alt="error" />
                <div className="user">
                    <img src={logo} alt="error" />
                    <div className="info">
                        <span className='username'><b>username</b></span>
                        <span className='date'>post date</span>
                    </div>
                    <Link to={'/write?edit = 2'}>
                        <button>Edit</button>
                    </Link>
                    <Link >
                        <button>Delete</button>
                    </Link>
                </div>
                <div className='title'>
                    Love Story (Taylor’s Version)
                </div>
                <div className="text">
                    We were both young when I first saw you
                    I close my eyes and the flashback starts
                    I'm standing there
                    On a balcony in summer air
                    See the lights, see the party, the ball gowns
                    See you make your way through the crowd
                    And say "Hello"
                    Little did I know
                    <br />
                    <br />
                    That you were Romeo, you were throwing pebbles
                    And my daddy said, "Stay away from Juliet"
                    And I was crying on the staircase
                    Begging you, "Please don't go"
                    And I said
                    <br />
                    <br />
                    "Romeo take me somewhere we can be alone
                    I'll be waiting, all there's left to do is run
                    You'll be the prince, and I'll be the princess
                    It's a love story, baby, just say yes"
                    So I sneak out to the garden to see you
                    We keep quiet 'cause we're dead if they knew
                    So close your eyes
                    Escape this town for a little while, oh, oh
                    'Cause you were Romeo, I was a scarlet letter
                    And my daddy said, "Stay away from Juliet"
                    But you were everything to me
                    I was begging you, "Please don't go"
                    And I said 
                    <br />
                    <br />
                    "Romeo, take me somewhere we can be alone
                    I'll be waiting, all there's left to do is run
                    You'll be the prince, and I'll be the princess
                    It's a love story, baby, just say yes"
                    Romeo, save me, they're trying to tell me how to feel
                    This love is difficult, but it's real
                    Don't be afraid, we'll make it out of this mess
                    It's a love story, baby, just say yes
                    Oh, oh-oh
                    I got tired of waiting
                    Wondering if you were ever coming around
                    My faith in you was fading
                    When I met you on the outskirts of town
                    And I said
                    "Romeo, save me, I've been feeling so alone
                    I keep waiting for you, but you never come
                    Is this in my head? I don't know what to think"
                    He knelt to the ground and pulled out a ring
                    And said
                    "Marry me, Juliet, you'll never have to be alone
                    I love you, and that's all I really know
                    I talked to your dad, go pick out a white dress
                    It's a love story, baby, just say yes"
                    Oh, oh-oh
                    Oh, oh-oh, oh
                    'Cause we were both young when I first saw you
                </div>
            </div>
            <div className="menu">
                <Menu></Menu>
            </div>
        </div>
    )
}
    

export default Single