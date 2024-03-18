import './style.scss'
import img from '../../img/logo.png'
const footer = ()=>{
    return <div className="footer">
        <img className = "logo" src={img} alt="error" />
        <span>This is a Rui's blog Project</span>
        </div>
}
export default footer