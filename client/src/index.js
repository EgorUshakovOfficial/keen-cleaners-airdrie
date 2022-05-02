import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom'; 
// Root element 
const container = document.getElementById("root");

// Render
ReactDOM.render(
    <Router>
        <App />
    </Router>,
container);

//Keen Cleaner's is a local business based off Airdrie, Alberta, that provides residential house cleaning services. I had the privilege to work with this company and create a user friendly website for its users to go on. I utilized React along with React Router to create the front-end of the website, and used Node and express to implement the back end. If you want to view this project live, please click the following link: https://keen-cleaners.herokuapp.com/


