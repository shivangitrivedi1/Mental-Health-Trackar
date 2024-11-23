// import { useState } from 'react'



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       ji
//     </>
//   )
// }

// export default App

// src/App.js
//import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Survey from './pages/Survey';
import Test from './pages/Test';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import MoodTracker from './pages/MoodTracker';

import './App.css';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/test" element={<Test />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mood-tracker" element={<MoodTracker />} /> 
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;

