import services from '../css/services.css';
import ServicePhotos from '../components/ServicePhotos';
const Services = () => {
    return (
        <section id="services-section">
            <h2>Services</h2>
            <p className="description">We offer residential house cleaning services and clean</p>
            <ServicePhotos />
            <p className="description">We specifically</p>
            <ul id="services-list">
                <li>dust and clean floors</li>
                <li>scrub and wash showerheads, toilets, and sinks in bathrooms</li>
                <li>scrub windows inside houses </li>
                <li>wipe down stoves and countertops</li>
                <li>dust and vacuum bedrooms</li>
                <li>Vacuum carpeted stairs or rugs</li>
            </ul>
        </section>
    )
}

export default Services; 
