import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function About() {
  return (
    <main className="about-page">
      <section className="menu-header-section">
        <div className="container">
          <span className="section-kicker">HİKAYEMİZ</span>
          <h1>Hakkımızda</h1>
          <div className="title-underline-center white-line"></div>
          <p className="menu-subtitle">Raylardan sofraya uzanan eski İstanbul neşesi</p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-text scroll-reveal">
            <span className="section-kicker">BİZ KİMİZ?</span>
            <h2>Peron 1913</h2>
            <div className="title-underline"></div>
            <p>
              Ailenizle birlikte keyifli vakit geçirmek ve unutulmaz bir yemek deneyimi yaşamak
              için Peron 1913'e bekliyoruz! Restoranımızda, sevdiklerinizle birlikte geçireceğiniz
              her anı özel kılmak için buradayız. Sıcak ve samimi atmosferimizde, unutulmaz
              anılar biriktireceğinizden emin olabilirsiniz.
            </p>
            <p>
              Peron 1913, sizlere özenle hazırlanmış lezzetler sunarak damak zevkinize hitap
              edecek bir deneyim yaşatıyor. Usta şeflerimizin elinden çıkan, taze ve kaliteli
              malzemelerle hazırlanan yemeklerimizle fark yaratıyoruz. Her bir tabakta, lezzet ve
              estetiği bir araya getiriyoruz.
            </p>
            <p>
              Sizleri Peron 1913'ün sıcak atmosferinde ağırlamaktan mutluluk duyacağız. Lezzetli
              yemeklerimiz ve güler yüzlü hizmetimizle, her ziyarette unutulmaz anılar
              biriktirmenize yardımcı olmayı hedefliyoruz.
            </p>
            <a className="dark-button" href="https://wa.me/905344001201" target="_blank" rel="noreferrer">
              Rezervasyon İçin Tıklayınız <ChevronRight size={18} />
            </a>
          </div>
          <div className="about-gallery">
            <div className="about-col">
              <div className="about-img-placeholder">
                <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80" alt="Meyhane Sofrası" />
              </div>
              <div className="about-img-placeholder">
                <img src="https://images.unsplash.com/photo-1550966841-396ad886756b?auto=format&fit=crop&w=600&q=80" alt="Mezeler" />
              </div>
            </div>
            <div className="about-col">
              <div className="about-img-placeholder tall">
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80" alt="Restoran Atmosferi" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
