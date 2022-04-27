import {
    BrowserRouter as Router, 
    Routes, 
    Route
} from 'react-router-dom';
import Navbar from './NavBar';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Footer from './Footer';
import Home from '../pages/Home'; 
import app from '../css/app.css';
const App = () => {
  return (
    <Router>
        <div className="App">
              <Navbar />
              <div id="main">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<div>An error occurred</div>} />
                  </Routes>
              </div>
              <Footer />
        </div>
    </Router>
  );
}

export default App;
