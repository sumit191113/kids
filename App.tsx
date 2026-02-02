
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AlphabetsList from './pages/AlphabetsList';
import AlphabetDetail from './pages/AlphabetDetail';
import Numbers from './pages/Numbers';
import About from './pages/About';
import { Privacy, Terms, Disclaimer, Contact } from './pages/TrustPages';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Alphabet Routes */}
        <Route path="/alphabets" element={<AlphabetsList />} />
        <Route path="/alphabets/a" element={<AlphabetDetail />} />
        
        {/* Numbers Routes */}
        <Route path="/numbers" element={<Numbers />} />
        
        {/* Trust Pages - Strictly No Ads inside components */}
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Catch all redirect to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default App;
