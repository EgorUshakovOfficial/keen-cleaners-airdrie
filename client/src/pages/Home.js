import Carousal from '../components/Carousel';
import supplies from '../Images/supplies.svg'
import home from '../css/home.css';
import React from 'react';

const Home = () => {
    return (
        <section id="home-section">
            <div id="home-description-container">
                <h2>NEED A HOUSE CLEANING?</h2>
                <p className="home-description" style={{textAlign:"center"}}>Let us do the dirty work while you enjoy a spotless new home!</p>
                <div id="logo-hours-container">
                    <img id="cleaning-supplies" src={supplies} />
                    <p id="hours" style={{ textAlign: "center" }}>
                        <span className="bold">Hours of Operation</span><br />
                        Monday-Saturday<br />
                        8:00am-9:00pm
                    </p>
                </div>
                <p className="home-description" style={{textAlign: "center"}}>Our mission is to provide our clients with the safest and most environmentally friendly cleaning service. We use non-toxic, pet and people friendly cleaning products across all areas of the house. We know that a clean home is the best way to start a week. Our aim is to satisfy all customers in Airdrie and surrounding regions.  We guarantee to put a smile on your face for a pleasant home enviroment.</p>
            </div>
            <h3 style={{ textAlign: "center", margin: "10px 0" }}>What clients are saying</h3>
            <Carousal />
        </section>
    )
}

export default Home; 