import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom'; 
// Root element 
const container = document.getElementById("root");

// Render
ReactDOM.hydrate(
    <Router>
        <App />
    </Router>,
container);

