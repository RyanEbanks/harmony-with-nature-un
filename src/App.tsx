import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Library from './components/Library';
// import Sponsors from './components/Sponsors';
import Timeline from './components/Timeline';
import Donate from './components/Donate';
import News from './components/News';
import Rights from './components/Rights'; // Ensure this is the correct import
import Assemblies from './components/Assemblies';
import Policy from './components/Policy';
import Law from './components/Law';
import SignIn from './components/SignIn';
import Posts from './components/Posts';
import events from './lawData';
import policyEvents from './policyData';
import './App.css';
import TwoFactor from './components/TwoFactor';
import PostDetail from './components/PostDetail';
import NotFound from './components/NotFound';
import { Provider } from 'react-redux';
import { store } from './store';

const App: React.FC = () => {
  const url = process.env.REACT_APP_API_URL;
  const [law, setLaw] = useState<keyof typeof events>('US');
  const [policy, setPolicy] = useState<keyof typeof policyEvents>('General');

  return (
    <Provider store={store}>
    <Router>
      <div className='App font-poppins'>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/rights-of-nature' element={<Rights setLaw={setLaw} setPolicy={setPolicy} />} />
            {/* <Route path='/timeline' element={<Timeline />} /> */}
            {/* <Route path='/assemblies' element={<Assemblies />} /> */}
            <Route path='/news' element={<News url={url}/>} />
            <Route path='/news/:id' element={<PostDetail url={url} />} />
            {/* <Route path='/library' element={<Library />} /> */}
            {/* <Route path='/sponsors' element={<Sponsors />} /> */}
            <Route path='/donate' element={<Donate />} />
            <Route path='/law' element={<Law law={law} />} />
            <Route path='/policy' element={<Policy policy={policy} />} />
            <Route path='/login' element={<SignIn url={url}/>} />
            <Route path='/upload' element={<Posts url={url}/>} />
            <Route path='/two-factor-authentication' element={<TwoFactor url={url}/>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </Provider>
  );
};

export default App;
