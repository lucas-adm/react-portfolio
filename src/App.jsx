import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './scrollToTop'

import Navbar from './components/navbar'

import Home from './pages/home'
import Experience from './pages/experience'
import Certificates from './pages/certificates'
import Certificate from './pages/certificate'
import About from './pages/about'

import Footer from './components/footer'

import './styles/main.sass'

function HeaderControl() {
  const location = useLocation();
  const [shouldRenderHeader, setShouldRenderHeader] = useState(true);

  useEffect(() => {
    setShouldRenderHeader(!location.pathname.startsWith('/certificados/'));
  }, [location.pathname]);

  return (
    <>
      {shouldRenderHeader && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/experiencia" element={<Experience />} />
        <Route exact path="/certificados" element={<Certificates />} />
        <Route exact path="/certificados/:course/:certified/:hasBack" element={<Certificate />} />
        <Route exact path="/sobre" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router hashType="slash">
      <ScrollToTop />
      <HeaderControl />
    </Router>
  )
}


export default App