import { Link } from 'react-router-dom';
import logo from '../Images/logo.svg';
import navbar from '../css/navbar.css'; 

const Navbar = () => {
    return (
        <header id="header">
            <div id="logo">
                <img id="image" src={logo} placeholder="Logo is not showing" />
            </div>
            <nav id="navbar">
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </header>
    )
}

export default Navbar; 
