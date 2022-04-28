import services from '../css/services.css';
import ServicePhotos from '../components/ServicePhotos';
const Services = () => {
    return (
        <section id="services-section">
            <div id="service-info-container">
                <h2>Services</h2>
                <p className="service-description" style={{textAlign: "center"}}>We offer residential house cleaning services including:</p>
                <div id="service-list-container">
                    <ul className="service-list">
                        <li>general cleaning </li>
                        <li>deep cleaning </li>
                        <li>green cleaning </li>
                        <li>wall cleaning </li>
                        <li>interior window cleaning</li>
                    </ul>
                </div>
                <p className="service-description" style={{textAlign:"center"}}>We cater to personal requests.</p>
            </div>
            <ServicePhotos />
            <div id="services-rates">
                <h2>Pricing</h2>
                <p className="service-description" style={{paddingBottom:"10px"}}>$25/hr for first time cleaning.<br/>$150-$200/session for every additional cleaning.</p>
            </div>
        </section>
    )
}

export default Services; 
