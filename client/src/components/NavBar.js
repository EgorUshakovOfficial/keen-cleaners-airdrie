import { Link } from 'react-router-dom';
import logo from '../Images/logo.svg';
import navbar from '../css/navbar.css';
import React from 'react';

const Navbar = () => {
    // State
    const [navMobState, setNavMobState] = React.useState("close")

    // Handle navigate 
    //const handleNavigate = () => {
    //    let navBar = document.getElementById("navbar")
    //    let windowWidth = window.innerWidth
    //    let mediaValue = 450

    //    if (windowWidth <= mediaValue) {
    //        // Update state of navigation bar in mobile 
    //        navBar.style.visibility = "hidden"
    //        setNavMobState("close")
    //    }
    //}
 
    // Handle click
    //const handleClick = e => {
    //    let navBar = document.getElementById("navbar")

    //    let value = e.target.getAttribute("value")
    //    // Consider when navbar is open or closed and style accordingy 
    //    switch (value) {
    //        case "open":
    //            navBar.style.visibility = "visible"
    //            setNavMobState("open")
    //            break;
    //        case "close":
    //            navBar.style.visibility = "hidden"
    //            setNavMobState("close")
    //            break;
    //    }
    //}

    //const handleResize = () => {
    //    let navBar = document.getElementById("navbar")
        
    //    // media query trigger value
    //    const mediaValue = 450
     
    //    if (window.innerWidth > mediaValue) {
    //        navBar.style.visibility = "visible"
    //    } else {
    //        let value = navBar.getAttribute("value")
    //        navBar.style.visibility = (value === "open") ? "visible" : "hidden"
    //    }
    //}

    //React.useEffect(() => {
    //    window.addEventListener("resize", handleResize)
    //    return () => window.removeEventListener("resize", handleResize)
    //}, [])

    return (
        <header id="header">
            {/*<Link to="/">*/}
            {/*    <div id="logo">*/}
            {/*        <img id="image" src={logo} placeholder="Logo is not showing" />*/}
            {/*    </div>*/}
            {/*</Link>*/}
            <nav id="navbar" >
                {/*<i class="fa-solid fa-close" value="close" onClick={handleClick}></i>*/}
                {/*<Link to="/about" onClick={handleNavigate}>About</Link>*/}
                {/*<Link to="/services" onClick={handleNavigate}>Services</Link>*/}
                {/*<Link to="/contact" onClick={handleNavigate}>Contact Us</Link>*/}
            </nav>
            <i class="fa-solid fa-bars" value="open" ></i>
        </header>
    )
}

export default Navbar; 
