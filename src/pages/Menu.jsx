import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <main className="menu-page">
      <section className="menu-header-section">
        <div className="container">
          <Link to="/" className="back-link">
            <ChevronLeft size={20} /> Anasayfaya Dön
          </Link>
          <h1>Menümüz</h1>
          <div className="title-underline-center"></div>
          <p className="menu-subtitle">Seçkin lezzetlerimizi inceleyin</p>
        </div>
      </section>

      <section className="menu-image-section">
        <div className="menu-container">
          <div className="menu-image-placeholder">
            {/* Buraya gelişmiş menü görseli eklenecek */}
            <div className="placeholder-content">
              <img 
                src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1200&q=80" 
                alt="Peron 1913 Menü" 
                className="full-menu-img"
              />
              <div className="image-overlay">
                <span>Peron 1913 Menü</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="menu-footer-cta">
        <p>Özel günleriniz ve toplu yemekleriniz için bizimle iletişime geçebilirsiniz.</p>
        <a href="https://wa.me/905344001201" target="_blank" rel="noreferrer" className="primary-button">
          Masayı Ayırtın
        </a>
      </section>
    </main>
  );
}
