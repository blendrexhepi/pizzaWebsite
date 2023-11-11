import { Link } from "react-router-dom"
import bannerimg from "../assets/pexels-roman-odintsov-4553111.jpg"
import "../styles/home.css"

export const Home = () => {
    return (
        <div className="home" style={{backgroundImage: `url(${bannerimg})`}}>
           <div className="header" >
                <h1>Pizza's Passion</h1>
                <p>PIZZA TO FIT ANY TASTE</p>
                   <Link to="/menu" >
                       <button>ORDER NOW</button> 
                   </Link>
           </div>
        </div>
    )
}