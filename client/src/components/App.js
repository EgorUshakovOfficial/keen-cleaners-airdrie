import { 
    Routes, 
    Route
} from 'react-router-dom';
import Navbar from './NavBar';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Footer from './Footer';
import Home from '../pages/Home';
import React from 'react';
import app from '../css/app.css';
const App = () => {
    return (
          <div className="App">
            <Navbar />
            <div id="main">
                <Home />
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/contact" element={<Contact />} />
                  </Routes>
              </div>
            <Footer />
         </div>
   );
}

export default App;
