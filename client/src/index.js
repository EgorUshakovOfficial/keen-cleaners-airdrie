import React from 'react';
import ReactDOM from 'react-dom'; 
import { createRoot } from 'react-dom/client';
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

