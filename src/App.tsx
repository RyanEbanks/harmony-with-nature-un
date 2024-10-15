import React from 'react';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Home from '../src/components/Home';
// import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Footer/>
      {/* <Routes>
    <Route path='/' element={
      <>
      <Navbar/>
      <Footer/>
      </>
    } />
      </Routes> */}
    </div>
  );
}

export default App;
