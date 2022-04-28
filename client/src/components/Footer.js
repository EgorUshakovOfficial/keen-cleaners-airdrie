import footer from '../css/footer.css';
import React from 'react'; 
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <Link to="/contact" id="footer-contact-link">contact</Link>
            <span id="social-media">
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
            </span>
        </footer>
    )
}

export default Footer; 
