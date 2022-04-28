// Dotenv
require('dotenv').config();

// For server side rendering 
import App from './client/src/components/App';
const ReactDOMServer = require('react-dom/server');
import React from 'react'; 
import { StaticRouter } from 'react-router-dom/server'; 

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const path = require('path');
const fs = require('fs');


// Middleware
app.use(cors({
    origin: "https://keen-cleaners.herokuapp.com/",
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

if (process.env.NODE_ENV === "production") {
    app.get("*", (req, res) => {
        /*const markup = ReactDOMServer.renderToString(<App />)*/
        res.send("hello world")
        //fs.readFile(path.resolve(__dirname, 'client', 'build', 'index.html'), "utf-8", (err, data) => {
        //    if (err) {
        //        console.warn(err)
        //        return res.status(500).send("Some error has occurred")
        //    } else {
        //        return res.send(data.replace(`<div id="root"></div>`, `<div id="root">${markup}</div>`))
        //    }
        //})
    })

    // Set static folder 
    app.use(express.static('client/build'))

  
}

// Listen to server 
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`))

