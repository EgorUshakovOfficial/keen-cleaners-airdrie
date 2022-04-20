import about from '../css/about.css';
const About = () => {
    return (
        <section id="about-section">
            <div id="about-description-container">
                <h1>About us</h1>
                <p class="about-description">We are a cleaning company located in Airdrie, AB, who have been cleaning residential houses since November of 2021. Initially, this company comprised one person. Now, it consists of more than one person, who share the same beliefs and views on cleaning. We believe every house deserves a thorough scrubbing with minimization of harmful cleaning chemicals and maximization of natural cleaning products, such as lemons and vinegar. We pay meticulous attention to dirt and to removing it to the best of our ability when we clean. Overall, we are on a mission to eliminate harmful cleaning products and uplift residential house cleaning through consistent keen attention to detail and environment friendly, natural cleaning products.</p>
            </div>
            <div id="about-photo-div">
                <img src={require('../Images/mopping.jpg')} />
            </div>
        </section>
    ); 
}

export default About; 
