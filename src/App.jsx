import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './scrollToTop'

import Navbar from './components/navbar'

import Home from './pages/home'
import Experience from './pages/experience'
import Certificates from './pages/certificates'
import Certificate from './pages/certificate'

import Footer from './components/footer'

import './styles/main.sass'

function HeaderFooterControl() {
  const location = useLocation();
  const [shouldRenderHeaderFooter, setShouldRenderHeaderFooter] = useState(true);

  useEffect(() => {
    setShouldRenderHeaderFooter(!location.pathname.startsWith('/certificados/'));
  }, [location.pathname]);

  return (
    <>
      {shouldRenderHeaderFooter && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/experiencia" element={<Experience />} />
        <Route exact path="/certificados" element={<Certificates />} />
        <Route exact path="/certificados/:course/:certified/:hasBack" element={<Certificate />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <HeaderFooterControl />
    </Router>
  )
}


export default App