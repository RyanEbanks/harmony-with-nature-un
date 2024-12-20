import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Library from './components/Library';
import './App.css';
import Sponsors from './components/Sponsors';
import Timeline from './components/Timeline';
import Donate from './components/Donate';
import News from './components/News';
import Rights from './components/Rights';
import Assemblies from './components/Assemblies';

function App() {
  return (
    <Router>
    <div className='App font-poppins'>
      <Navbar />
      <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/rights-of-nature' element={<Rights />} />
        <Route path='/timeline' element={<Timeline />} />
        <Route path='/assemblies' element={<Assemblies />} />
        <Route path='/news' element={<News />} />
        <Route path='/library' element={<Library />} />
        <Route path='/sponsors' element={<Sponsors />} />
        <Route path='/donate' element={<Donate />} />
        {/* <Route path='/timeline' element={<Timeline />} /> */}
      </Routes>
      <Footer />
      </div>
    </div>
  </Router>
  );
}

export default App;
