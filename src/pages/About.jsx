import React from 'react';
import { ChevronRight } from 'lucide-react';
import { media } from '../media';

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
                <img src={media.entrance} alt="Peron 1913 dış mekan ve giriş" />
              </div>
              <div className="about-img-placeholder">
                <img src={media.liverPlate} alt="Peron 1913 sıcak tabak sunumu" />
              </div>
            </div>
            <div className="about-col">
              <div className="about-img-placeholder tall">
                <img src={media.interior} alt="Peron 1913 iç mekan atmosferi" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
