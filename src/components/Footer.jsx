import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Anasayfa', path: '/#anasayfa' },
  { label: 'Hakkımızda', path: '/#hakkimizda' },
  { label: 'Menü', path: '/menu' },
  { label: 'Galeri', path: '/#galeri' },
  { label: 'İletişim', path: '/#iletisim' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <img src="/peron-1913-logo.jpg" alt="Peron 1913" className="footer-logo" />
        <nav aria-label="Alt menü">
          {navItems.map((item) => (
            <Link to={item.path} key={item.path}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="primary-button" href="tel:+905344001201">
          REZERVASYON
        </a>
      </div>
      <div className="footer-bottom">
        <p>Peron 1913 Meyhanesi © 2026. Tüm Hakları Saklıdır.</p>
        <button className="scroll-top" onClick={() => window.scrollTo(0, 0)} aria-label="Başa dön">
          ^
        </button>
      </div>
    </footer>
  );
}
