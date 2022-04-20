import { useState } from 'react';

const ContactForm = () => {
    // States 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(""); 

    const handleSubmit = e => {
        e.preventDefault();

        // Send email
        fetch("https://keen-cleaners.herokuapp.com/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                number,
                message
            }),
            credentials: "include"
        })
            .then(res => res.json())
            .then(data => {
                if (data.err) {
                    setError("Error! Message was unable to send")
                } else {
                    setSuccess(data.success)
                }
            })
            .catch(err => console.log(err)); 
    }

    return (
        <form id="contact-form" action="/contact" method="post" onSubmit={handleSubmit}>
            {error && <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>{error}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>}
            {success && <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>{success}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>}
            <div className="field-div">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)}required />
            </div>
            <div className="field-div">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)}required />
            </div>
            <div className="field-div">
                <label for="phone-number">Phone number</label>
                <input type="text" id="phone-number" name="phoneNumber" placeholder="(###)-###-####" value={number} onChange={e => setNumber(e.target.value)} />
            </div>
            <div className="field-div">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="4" cols="50" value={message} onChange={e => setMessage(e.target.value)} required>
                    Enter your message...
                </textarea>
            </div>
            <button type="submit" id="submit">Submit</button>
        </form>
    ); 
}

export default ContactForm;
