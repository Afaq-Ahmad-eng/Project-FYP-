/*import React, { useState } from 'react';
import './TravelForm.css';
import { 
  FaMoneyBillWave, 
  FaRegMoneyBillAlt, 
  FaMoneyCheckAlt, 
  FaUser, 
  FaUserFriends, 
  FaUsers, 
  FaGlobeAmericas,
  FaPaperPlane 
} from 'react-icons/fa';
import { GiFamilyHouse } from 'react-icons/gi';

const TravelForm = () => {
  const [formData, setFormData] = useState({
    destination: '',
    days: '',
    budget: '',
    companions: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Generating trip with:', formData);
    // Add your trip generation logic here
    alert('Your custom trip is being generated!');
  };

  return (
    <div className="travel-form">
      <h1 className="form-title">Tell us your travel preferences</h1>
      <p className="form-subtitle">
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </p>

      <div className="form-section">
        <h2 className="section-title">
          <FaGlobeAmericas className="section-icon" />
          What is destination of choice?
        </h2>
        <select 
          className="form-select"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="Swat"></option>
          <option value="Naran kaghan"></option>
          <option value="Muree"></option>
        </select>
      </div>




      <div className="form-section">
        <h2 className="section-title">How many days are you planning your trip?</h2>
        <input
          type="number"
          className="form-input"
          placeholder="Ex. 3"
          name="days"
          value={formData.days}
          onChange={handleChange}
          min="1"
          required
        />
      </div>
 
    


      <div className="form-section">
        <h2 className="section-title">What is Your Budget?</h2>
        <div className="options-grid">
          {[
            { value: 'cheap', label: 'Cheap', desc: 'Stay conscious of costs', icon: <FaMoneyBillWave className="option-icon" /> },
            { value: 'moderate', label: 'Moderate', desc: 'Keep cost on the average side', icon: <FaRegMoneyBillAlt className="option-icon" /> },
            { value: 'luxury', label: 'Luxury', desc: 'Don\'t worry about cost', icon: <FaMoneyCheckAlt className="option-icon" /> }
          ].map((option) => (
            <label key={option.value} className="option-card">
              <input
                type="radio"
                name="budget"
                value={option.value}
                checked={formData.budget === option.value}
                onChange={handleChange}
                className="radio-input"
                required
              />
              <div className="option-content">
                {option.icon}
                <h3>{option.label}</h3>
                <p>{option.desc}</p>
              </div>
            </label>
          ))}
        </div>
      </div>




      <div className="form-section">
        <h2 className="section-title">Who do you plan on traveling with on your next adventure?</h2>
        <div className="options-grid">
          {[
            { value: 'solo', label: 'Just Me', desc: 'A sole traveler in exploration', icon: <FaUser className="option-icon" /> },
            { value: 'couple', label: 'A Couple', desc: 'Two travelers in tandem', icon: <FaUserFriends className="option-icon" /> },
            { value: 'family', label: 'Family', desc: 'A group of fun loving adventurers', icon: <GiFamilyHouse className="option-icon" /> },
            { value: 'friends', label: 'Friends', desc: 'A bunch of thrill-seekers', icon: <FaUsers className="option-icon" /> }
          ].map((option) => (
            <label key={option.value} className="option-card">
              <input
                type="radio"
                name="companions"
                value={option.value}
                checked={formData.companions === option.value}
                onChange={handleChange}
                className="radio-input"
                required
              />
              <div className="option-content">
                {option.icon}
                <h3>{option.label}</h3>
                <p>{option.desc}</p>
              </div>
            </label>
          ))}
        </div>
      </div>









      <div className="form-section generate-trip-section">
        <button
          className="generate-trip-button"
          onClick={handleSubmit}
        >
          <FaPaperPlane className="button-icon" />
          Generate My Trip
        </button>
      </div>
    </div>
  );
};

export default TravelForm;  */






import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Services from './Routes/Services';
import Signup from './Routes/Signup';
import BudgetManager from './components/BudgetManager';
import ExperienceForm from './components/ExperienceForm';
import Phrasebook from './components/Phrasebook';


function App() {
  const location = useLocation();

  // ⬅️ Include '/translate' here
  const hideNavbarRoutes = ['/budget', '/share-experience', '/translate', ];

  return (
    <div className="App">
      {/* ✅ Conditionally render Navbar */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/budget" element={<BudgetManager />} />
        <Route path="/share-experience" element={<ExperienceForm />} />
        <Route path="/translate" element={<Phrasebook />} />
        
      </Routes>
    </div>
  );
}

export default App;



/*home.js*/
/*
import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Hero from "../components/Hero";
import heroImage from "../Assets/12.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import SearchBar from "../components/Searchbar";

export default function Home() {
  useEffect(() => {
    const delay = Math.floor(Math.random() * (8000 - 5000 + 1)) + 5000;

    const showToastTimer = setTimeout(() => {
      toast.info(
        <div>
          🈯 <strong>Translator is ready to help you</strong> —&nbsp;
          <Link to="/translate" style={{ color: "#fff", textDecoration: "underline" }}>
            Open Translator
          </Link>
        </div>,
        {
          position: "top-center", // We use top-center as a base
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          className: "toast-center", // custom class to center vertically
          bodyClassName: "toast-body-center",
        }
      );
    }, delay);

    return () => clearTimeout(showToastTimer);
  }, []);

  return (
    <>
      <Hero
        cName="hero"
        heroImage={heroImage}
        title="Your Journey your story"
        text="Choose your favrite destination"
        buttontext="Travel Plan"
        url="/services"
        btnclass="show"
      />

      <ToastContainer />

      <SearchBar />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

*/


/* about.js */
/*
import React from 'react'
import Hero from '../components/Hero'
import heroImage  from '../Assets/16.jpg';
import Aboutus from '../components/Aboutus';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Hero 
            cName="hero-mid"
            heroImage={heroImage}
            title="About Us"
            /* text and btn is hide only in about section by css line 32  
            text="Choose your favrite destination"
            buttontext="Travel Plan"
            url="/"
            btnclass="show"
            />

          <Aboutus/>
          <Footer/>  
    </div>
  )
}

*/
