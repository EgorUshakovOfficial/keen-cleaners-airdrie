import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom'; 
// Root element 
const container = document.getElementById("root");

// Root 
const root = createRoot(container);

// Initial render
root.render(
    <Router>
        <App />
    </Router>
);


