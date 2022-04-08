import contact from '../css/contact.css';
import ContactForm from '../components/ContactForm'; 
const Contact = () => {
    return (
        <section id="contact-section">
            <h2>Contact Us</h2>
            <ContactForm />
            <div id="or-div">or</div>
            <div id="other-contact-">
                <div id="phone-email-contact">Reach out to us by <span className="bold">phone: 587-438-1585</span> or <span className="bold">email: egorushakov13@gmail.com</span></div>
                <div id="social-media-container">We are also active on social media. We have Facebook <a href="#"><i class="fa-brands fa-facebook-f"></i></a> and Instagram <a href="#"><i class="fab fa-instagram"></i></a></div>
            </div>
        </section>
    );
}

export default Contact; 
