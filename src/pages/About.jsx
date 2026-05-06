import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function About() {
  return (
    <main className="page-content bg-white">
      <section className="about-section content-container">
        <div className="about-content">
          <h2>Hakkımızda</h2>
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
            biriktirmenize yardımcı olmayı hedefliyoruz. Ailenizle birlikte güzel anlar yaşamak
            ve lezzet dolu bir deneyim için Peron 1913'e bekliyoruz!
          </p>
          <a className="dark-button" href="https://wa.me/905344001201" target="_blank" rel="noreferrer">
            Rezervasyon İçin Tıklayınız <ChevronRight size={18} />
          </a>
        </div>
        <div className="about-images">
          <div className="img-col">
            <div className="placeholder-img">Görsel Alanı</div>
            <div className="placeholder-img">Görsel Alanı</div>
          </div>
          <div className="img-col">
            <div className="placeholder-img tall">Görsel Alanı</div>
          </div>
        </div>
      </section>
    </main>
  );
}
