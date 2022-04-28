import contact from '../css/contact.css';
import ContactForm from '../components/ContactForm'; 
const Contact = () => {
    return (
        <section id="contact-section">
            <div id="contact-description-container">
                <h2>Contact Us</h2>
                <div className="contact-description" style={{textAlign:"center"}}>Reach out to us by phone, email or submitting the form below.</div>
                <div id="phone-email">
                    <div className="bold bigger" style={{ textAlign: "center", padding:"0px"}}>(825)-733-3031</div>
                    <div className="bold bigger" style={{ textAlign: "center", padding: "0px"}}>keencleanersairdrie@gmail.com</div>
                </div>
                <div className="contact-description">We look forward to hearing from you!</div>
            </div>
            <ContactForm />
        </section>
    );
}

export default Contact; 
