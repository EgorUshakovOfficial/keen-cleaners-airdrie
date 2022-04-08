// Dotenv
require('dotenv').config();


const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');

// Middleware
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Node mailer 
let transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

const mailOptions = {
    from: 'noreplykeencleaners@gmail.com',
    to: "keencleanersairdrie@gmail.com",
    subject: `Client sent new message`,
};

// Routes
app.post('/contact', (req, res) => {
    console.log(req.body);
    const { name, email, message } = req.body;
    let number = req.body.number || "none";

    mailOptions.html = `
    <div>
        <div>Name: ${name}</div>
        <div>Email: ${email}</div>
        <div>Number: ${number}</div>
        <div>Message: ${message}</div>

    </div>
    `;

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.json({ err })
        } else {
            res.json({success: "Message was successfully sent!"})
        }
    })
    
})

// Listen to server 
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`))

