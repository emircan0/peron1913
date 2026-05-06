import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Anasayfa', path: '/#anasayfa' },
  { label: 'Hakkımızda', path: '/#hakkimizda' },
  { label: 'Menü', path: '/menu' },
  { label: 'Galeri', path: '/#galeri' },
  { label: 'İletişim', path: '/#iletisim' },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const closeNav = () => setNavOpen(false);

  const handleLinkClick = (path) => {
    closeNav();
    if (path.startsWith('/#') && location.pathname === '/') {
      const id = path.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <div className="top-strip">
        <div className="top-strip-left">
          <Phone size={14} />
          <a href="tel:+905344001201">0534 400 12 01</a>
        </div>
        <div className="top-strip-right">
          <span>Rezervasyon ve detaylı bilgi için bizimle iletişime geçin!</span>
        </div>
      </div>
      <header className="site-header">
        <div className="header-container">
          <Link to="/" className="brand" onClick={() => handleLinkClick('/#anasayfa')}>
            <img src="/peron-1913-logo.jpg" alt="Peron 1913" />
            <div className="brand-text">
              <span className="brand-name">PERON 1913</span>
              <span className="brand-sub">MEYHANESİ</span>
            </div>
          </Link>

          <nav className={navOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Ana menü">
            {navItems.map((item) => (
              <Link 
                to={item.path} 
                key={item.path} 
                onClick={() => handleLinkClick(item.path)}
                className={location.pathname === item.path ? 'active-link' : ''}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-right">
            <a className="primary-button" href="https://wa.me/905344001201" target="_blank" rel="noreferrer">
              REZERVASYON
            </a>
            <button
              className="nav-toggle"
              type="button"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
