import React from 'react';
import { Phone, MessageCircle, MapPin, Instagram } from 'lucide-react';

export default function Contact() {
  const whatsappLink = "https://wa.me/905344001201";

  return (
    <main className="contact-page">
      <section className="menu-header-section">
        <div className="container">
          <span className="section-kicker">BİZE ULAŞIN</span>
          <h1>İletişim</h1>
          <div className="title-underline-center white-line"></div>
          <p className="menu-subtitle">Rezervasyon ve detaylı bilgi için bizimle iletişime geçin</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-text-area">
            <span className="section-kicker">İRTİBAT</span>
            <h2>İletişim Bilgilerimiz</h2>
            <div className="title-underline"></div>
            <p className="contact-desc">Sizi Peron 1913 sofralarında ağırlamaktan mutluluk duyarız.</p>
            
            <div className="contact-info-list">
              <a href="tel:+905344001201" className="contact-item">
                <div className="contact-icon-box">
                  <Phone size={22} color="#fff" />
                </div>
                <div className="contact-details">
                  <strong>İrtibat</strong>
                  <span>0534 400 12 01</span>
                </div>
              </a>
              
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="contact-item">
                <div className="contact-icon-box">
                  <MessageCircle size={22} color="#fff" />
                </div>
                <div className="contact-details">
                  <strong>WhatsApp</strong>
                  <span>0534 400 12 01</span>
                </div>
              </a>
              
              <div className="contact-item">
                <div className="contact-icon-box">
                  <MapPin size={22} color="#fff" />
                </div>
                <div className="contact-details">
                  <strong>Adres</strong>
                  <span>Koca Mustafapaşa, Akıncı Sk. No:5, Fatih / İstanbul</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-map-area">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.085353100234!2d28.92576137664684!3d40.99201947135246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab98418086057%3A0xc3b5e408d249d378!2sAk%C4%B1nc%C4%B1%20Sk.%20No%3A5%2C%20Cerrahpa%C5%9Fa%2C%2034098%20Fatih%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1714979123456!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '430px', borderRadius: '14px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Peron 1913 Harita"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="instagram-section">
        <div className="instagram-images">
          <div className="insta-img-placeholder">
            <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=400&q=80" alt="Instagram 1" />
          </div>
          <div className="insta-img-placeholder">
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=80" alt="Instagram 2" />
          </div>
          <div className="insta-img-placeholder">
            <img src="https://images.unsplash.com/photo-1470333732907-3f17ce602e4d?auto=format&fit=crop&w=400&q=80" alt="Instagram 3" />
          </div>
          <div className="insta-img-placeholder">
            <img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80" alt="Instagram 4" />
          </div>
        </div>
        <div className="instagram-overlay-card">
          <div className="insta-icon-wrapper">
             <Instagram size={40} color="#E4405F" />
          </div>
          <h3>Bizi Instagram'dan Takip Edin!</h3>
          <a href="https://www.instagram.com/peron.1913/" target="_blank" rel="noreferrer">
            @peron.1913
          </a>
        </div>
      </section>
    </main>
  );
}
