import Carousal from '../components/Carousel';
import supplies from '../Images/supplies.svg'
import home from '../css/home.css'; 
const Home = () => {
    return (
        <section id="home-section">
            <div id="home-description-container">
                <h2>Do you need house cleaning?</h2>
                <p className="home-description">Let us do the dirty work while you enjoy a spotless new home</p>
                <div id="logo-hours-container">
                    <img id="cleaning-supplies" src={supplies} />
                    <p id="hours">
                        <span className="bold">Hours of operation</span><br />
                        Monday-Saturday<br />
                        8:00am-9:00pm
                    </p>
                </div>
                <p className="home-description">Our mission is to provide our clients with the with the safest and environmentally friendly cleaning service by using non-toxic , non-allergic chemicals to pets and people while satisfying the needs of residents across Airdrie. We all know that a clean home is the best way to start a week. We will put a smile on everyone's face for a happy family home enviroment.</p>
            </div>
            <h3 style={{ textAlign: "center", margin: "10px 0" }}>What clients are saying</h3>
            <Carousal />
        </section>
    )
}

export default Home; 