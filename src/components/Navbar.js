import "../styles/navbar.css"
import { useState } from "react";
import logo from "../assets/pizza.jpg"
import { Link } from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';

export const Navbar = () => {
    const [openLinks, setLinks] = useState(false);

    const toggleNavbar = () => {
        setLinks(!openLinks)

    }
    return (
        <div className="navbar">
            <div className="leftSide">
            <img src={logo} alt="error" />
            </div>
            <div className="rightSide"  >
                <div className="links" id={openLinks ? "close" : ""}>
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/contactus">Contact</Link>
                </div>
                 <button onClick={toggleNavbar}>
                        <ReorderIcon/>
                    </button> 
            </div>
        </div>
    )
}