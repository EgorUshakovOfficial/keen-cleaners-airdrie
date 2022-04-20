import services from '../css/services.css';
import ServicePhotos from '../components/ServicePhotos';
const Services = () => {
    return (
        <section id="services-section">
            <div id="service-info-container">
                <h2>Services</h2>
                <p className="service-description">We offer residentials house cleaning services and complete through deep clean of any and all areas of the house. We are also open to special requests</p>
                <p className="service-description">Our rates are $25/hr up to 5hrs per session.</p>
                <p className="service-description">After 5hrs automatic $200 until finished</p>
            </div>
            <ServicePhotos />
        </section>
    )
}

export default Services; 
