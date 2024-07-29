// https://github.com/bradtraversy/contact-keeper
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import React from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from './context/contact/ContactState';

const App = () => {
  return (
    <ContactState>
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
        </React.Fragment>
      </BrowserRouter>
    </ContactState>
  );
};

export default App;
