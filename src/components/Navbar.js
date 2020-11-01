import React,{useState} from 'react'
import { Link } from "react-router-dom"
import { FaHotel } from 'react-icons/fa';
import { FaAlignRight } from 'react-icons/fa'
export default function Navbar() {
    const [isOpen, setIsOpen]=useState(false)
    const handleToggle = () =>{
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    return (
        <nav className="navbar">
           <div className="nav-center">
             <div className="nav-header">
                <Link to="/"><FaHotel/></Link>
                <button onClick={handleToggle} className="nav-btn"><FaAlignRight/></button>
             </div>

             <ul className={isOpen?"nav-links show-nav":"nav-links"}>
                <li><Link to="/">Home</Link></li>
                 <li><Link to="/rooms">Rooms</Link></li>
             </ul>
           </div>
        </nav>
    )
}
