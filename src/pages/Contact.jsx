import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <main className="page-content bg-white">
      <section className="contact-section content-container">
        <div className="contact-content">
          <h2>İletişim Bilgilerimiz</h2>
          <div className="title-underline"></div>
          <p className="contact-desc">Rezervasyon ve detaylı bilgi için bizimle iletişime geçin!</p>
          
          <div className="contact-info-list">
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-text">
                <strong>İrtibat</strong>
                <span>+90 534 400 12 01</span>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <MessageCircle size={24} />
              </div>
              <div className="contact-text">
                <strong>WhatsApp</strong>
                <span>+90 534 400 12 01</span>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-text">
                <strong>Adres</strong>
                <span>Koca Mustafapaşa, Akıncı Sk. No:5, Fatih / İstanbul</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-map">
          {/* Placeholder for iframe map */}
          <div className="map-placeholder">
            Harita Alanı (Google Maps iframe buraya eklenecek)
          </div>
        </div>
      </section>
      
      <section className="instagram-feed">
        <div className="instagram-cta">
          <div className="insta-icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" width="40" height="40" />
          </div>
          <p>Bizi Instagram'dan Takip Edin!</p>
          <a href="https://www.instagram.com/peron.1913/" target="_blank" rel="noreferrer">
            @peron.1913
          </a>
        </div>
        <div className="instagram-grid">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="placeholder-img insta-img">
              IG Görsel {i + 1}
            </div>
          ))}
        </div>
      </section>
      
      <section className="quick-contact content-container">
        <div className="quick-col">
          <h3>Peron 1913 Meyhanesi</h3>
          <p>
            Ailenizle birlikte keyifli vakit geçirmek ve unutulmaz bir yemek deneyimi yaşamak için Peron 1913'e bekliyoruz! 
            Restoranımızda, sevdiklerinizle birlikte geçireceğiniz her anı özel kılmak için buradayız.
          </p>
        </div>
        <div className="quick-col">
          <h3>İletişim Bilgilerimiz</h3>
          <p>📞 0534 400 12 01</p>
          <p>💬 0534 400 12 01</p>
          <p>📍 Koca Mustafapaşa, Akıncı Sk. No:5, Fatih / İstanbul</p>
        </div>
        <div className="quick-col">
          <h3>Hızlı Menü</h3>
          <a href="https://www.google.com/maps/search/?api=1&query=Koca+Mustafapasa+Akinci+Sk.+No:5+Fatih+Istanbul" target="_blank" rel="noreferrer" className="orange-button full-width">
            Yol Tarifi Al →
          </a>
          <a href="tel:+905344001201" className="dark-button full-width">
            Hemen Ara →
          </a>
        </div>
      </section>
    </main>
  );
}
