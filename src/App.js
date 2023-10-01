import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect} from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home'
import Servizi from './pages/ServiziPage';
import ConversioniSerraturePage from './pages/ConversioniSerraturePage';
import ZanzarierePage from './pages/ZanzarierePage';
import RiparazioniPage from './pages/RiparazioniPage';
import SostituzioniPage from './pages/SostituzioniPage';
import PrivacyCookiePolicy from './pages/PrivacyCookiesPolicy';


const App = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
    <Router>

     
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servizi/*" element={<Servizi />} />
          <Route path="/servizi/conversioni-serrature-porte-blindate" element={<ConversioniSerraturePage />} />
          <Route path="/servizi/fornitura-e-installazioni-zanzariere" element={<ZanzarierePage />} />
          <Route path="/servizi/riparazioni-e-sostituzioni-basculanti-e-sezionali" element={<RiparazioniPage />} />
          <Route path="/servizi/sostituzione-serrature-di-tutti-i-tipi" element={<SostituzioniPage />} />
          <Route path="/privacy-cookie-policy" element={<PrivacyCookiePolicy />} />

        </Routes>

        <Footer />
     
    </Router>
    
        <div>  
        {/* 👇️ scroll to top on button click */}
        <button
        className='toTheTop'
          onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }}
          style={{
            position: 'fixed',
            padding: '0.5rem 0.8rem',
            fontSize: '15px',
            bottom: '60px',
            right: '40px',
            backgroundColor: '#555',
            color: '#fff',
            textAlign: 'center',
            border: '1px solid #555 '
          }}
        >
          &uarr;
        </button>
      </div>
      </>
  );
};

export default App;
