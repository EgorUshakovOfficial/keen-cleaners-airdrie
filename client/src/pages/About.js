import about from '../css/about.css';
import React from 'react';

const About = () => {
    return (
        <section id="about-section">
            <div id="about-description-container">
                <h1>About Us</h1>
                <p class="about-description" style={{textAlign:"center"}}>Keen Cleaners is a local residential cleaning company based in Airdrie, Alberta. Our cleaners are young, experienced professionals who endeavour to bring proper hygiene and cleanliness to your home. We pride ourselves in doing the dirty work that no one likes to do. Our process invovles using harmless and effective cleaning products without the concern of illness or allergies. We are consistent, detailed and thorough. Our standard is never less than excellent.</p>
            </div>
            <div id="about-photo-div">
                <img src={require('../Images/mopping.jpg')} />
            </div>
        </section>
    ); 
}

export default About; 
