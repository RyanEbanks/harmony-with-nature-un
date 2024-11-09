import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Home from '../src/components/Home';
import About from '../src/components/About';
// import Timeline from './components/Timeline';
import './App.scss';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/timeline' element={<Timeline />} /> */}
        </Routes>
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
