import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AmbientAudio from './components/AmbientAudio';
import SeoMeta from './components/SeoMeta';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <SeoMeta />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
      <AmbientAudio />
      <Footer />
    </div>
  );
}
