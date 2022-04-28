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
              {/*<Navbar />*/}
            <div id="main">
                Hello World
                  {/*<Routes>*/}
                  {/*    <Route path="/" element={<Home />} />*/}
                  {/*    <Route path="/about" element={<About />} />*/}
                  {/*    <Route path="/services" element={<Services />} />*/}
                  {/*    <Route path="/contact" element={<Contact />} />*/}
                  {/*</Routes>*/}
              </div>
            {/*<Footer />*/}
         </div>
   );
}

//Keen Cleaner's is a local business based off Airdrie, Alberta, that provides residential house cleaning services. I had the privilege to work with this company and create a user friendly website for its users to go on. I utilized React along with React Router to create the front-end of the website, and used Node and express to implement the back end. If you want to view this project live, please click the following link: https://keen-cleaners.herokuapp.com/

export default App;
