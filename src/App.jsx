import React, { useEffect } from 'react'; // <== adicionado useEffect
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Topbar from './layout/Topbar';
import Header from './layout/Header';
import Footer from './layout/Footer';

import Home from './pages/Home';
import SobreNos from './pages/SobreNos';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Router>
      <Topbar />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
