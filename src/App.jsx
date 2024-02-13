import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar'
import Home from './pages/home'
import Footer from './components/footer'

import './styles/main.sass'

function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>

      <Footer />
    </Router>

  )
}

export default App