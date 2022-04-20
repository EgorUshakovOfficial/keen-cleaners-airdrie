import contact from '../css/contact.css';
import ContactForm from '../components/ContactForm'; 
const Contact = () => {
    return (
        <section id="contact-section">
            <div id="contact-description-container">
                <h2>Contact Us</h2>
                <div className="contact-description">Reach out to us by phone, email or by submitting the form below</div>
                <div className="contact-description">We look forward to hearing from you</div>
                <div id="phone-email">
                    <div className="bold bigger" style={{ textAlign: "center" }}>(403)-123-4567</div>
                    <div className="bold bigger" style={{ textAlign: "center" }}>keencleanersairdrie@gmail.com</div>
                </div>
            </div>
            <ContactForm />
        </section>
    );
}

export default Contact; 
