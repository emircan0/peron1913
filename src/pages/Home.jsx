import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, MessageCircle, MapPin, Instagram } from 'lucide-react';
import { instagramImages, media, venueGalleryImages } from '../media';
import Lightbox from '../components/Lightbox';

export default function Home() {
  const whatsappLink = "https://wa.me/905344001201";
  const mapsLink = "https://www.google.com/maps/dir/?api=1&destination=Peron+1913+Meyhanesi+Fatih+Istanbul";
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  const [lightboxIndex, setLightboxIndex] = React.useState(null);
  const featuredGallery = venueGalleryImages.slice(0, 5);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextLightbox = () => setLightboxIndex((prev) => (prev + 1) % featuredGallery.length);
  const prevLightbox = () => setLightboxIndex((prev) => (prev - 1 + featuredGallery.length) % featuredGallery.length);

  return (
    <main className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero" id="anasayfa">
        <div className="hero-backdrop">
          <video
            ref={videoRef}
            className="hero-media"
            src={media.heroVideo}
            poster={media.interior}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        </div>
        <div className="hero-content fade-in">
          <p className="hero-eyebrow">İSTANBUL'UN KALBİNDE BİR NOSTALJİ</p>
          <h1>Hoş geldiniz</h1>
          <p className="hero-copy">
            Ailenizle birlikte keyifli vakit geçirmek ve unutulmaz bir yemek deneyimi yaşamak için Peron 1913'e bekliyoruz!
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={whatsappLink} target="_blank" rel="noreferrer">
              Rezervasyon Yap
            </a>
            <Link className="secondary-button" to="/menu">
              Menüyü İncele
            </Link>
          </div>
        </div>
      </section>

      {/* 2. HAKKIMIZDA SECTION */}
      <section className="about-section" id="hakkimizda">
        <div className="about-container">
          <div className="about-text scroll-reveal">
            <span className="section-kicker">BİZ KİMİZ?</span>
            <h2>Hakkımızda</h2>
            <div className="title-underline"></div>
            <p>
              Peron 1913, meyhane kültürünü samimi servis, özenli tabaklar ve nostaljik bir
              mekan hissiyle bir araya getiren restoran deneyimi sunar.
            </p>
            <p>
              Mezeden ana yemeğe, fasıl gecelerinden özel kutlamalara kadar her anı keyifli
              ve düzenli bir akışla ağırlamak için tasarlandı. Sıcak ve samimi atmosferimizde, unutulmaz
              anılar biriktireceğinizden emin olabilirsiniz.
            </p>
            <a className="dark-button" href={whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp İle Rezervasyon <ChevronRight size={16} />
            </a>
          </div>
          <div className="about-gallery">
            <div className="about-col">
              <div className="about-img-placeholder">
                <img src={media.entrance} alt="Peron 1913 mekan girişi" />
              </div>
              <div className="about-img-placeholder">
                <img src={media.mezzeDetail} alt="Peron 1913 meze sunumu" />
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

      {/* 3. MENU SECTION */}
      <section className="menu-hero" id="menu">
        <div className="menu-backdrop" style={{ '--menu-bg': `url(${media.socialDinner})` }} />
        <div className="menu-content">
          <h2>Peron 1913 Menü</h2>
          <div className="title-underline-center white-line"></div>
          <p>Usta şeflerimizin elinden çıkan eşsiz lezzetleri keşfedin.</p>
          <Link className="white-button" to="/menu">
            Menümüzü İncelemek İçin Tıklayınız <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* 4. GALERİ SECTION */}
      <section className="gallery-section" id="galeri">
        <div className="gallery-container">
          <div className="text-center">
            <span className="section-kicker">ANILARIMIZ</span>
            <h2>Foto Galeri</h2>
            <div className="title-underline-center"></div>
          </div>
          <div className="gallery-row gallery-vertical">
            {featuredGallery.map((item, index) => (
              <div
                className="gallery-img-placeholder"
                key={item.src}
                onClick={() => openLightbox(index)}
                style={{ cursor: 'pointer' }}
              >
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>

          <Lightbox
            images={featuredGallery}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onNext={nextLightbox}
            onPrev={prevLightbox}
          />
          <div className="slider-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </section>

      {/* 5. İLETİŞİM SECTION */}
      <section className="contact-section" id="iletisim">
        <div className="contact-container">
          <div className="contact-text-area">
            <span className="section-kicker">İLETİŞİME GEÇİN</span>
            <h2>İletişim Bilgilerimiz</h2>
            <div className="title-underline"></div>
            <p className="contact-desc">Rezervasyon ve detaylı bilgi için bizimle iletişime geçin!</p>
            
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
              style={{ border: 0, minHeight: '400px', borderRadius: '8px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Peron 1913 Harita"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 6. INSTAGRAM SECTION */}
      <section className="instagram-section">
        <div className="instagram-images">
          {instagramImages.map((item) => (
            <div className="insta-img-placeholder" key={item.src}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
        <div className="instagram-overlay-card">
          <div className="insta-icon-wrapper">
             <Instagram size={40} color="#E4405F" />
          </div>
          <h3>Bizi Instagram'dan Takip Edin!</h3>
          <a href="https://www.instagram.com/peron19.13?igsh=bTU2dzdmMmI3YTRq" target="_blank" rel="noreferrer">
            @peron19.13
          </a>
        </div>
      </section>

      {/* 7. QUICK CONTACT SECTION */}
      <section className="quick-contact-section">
        <div className="quick-contact-container">
          <div className="quick-col">
            <h4>Peron 1913 Meyhanesi</h4>
            <p>
              Eski İstanbul ruhunu modern bir anlayışla birleştiren Peron 1913, sizi lezzet dolu bir yolculuğa davet ediyor. Samimiyet, lezzet ve nostalji burada buluşuyor.
            </p>
          </div>
          <div className="quick-col">
            <h4>Bize Ulaşın</h4>
            <p><Phone size={16} className="contact-icon-small" /> <a href="tel:+905344001201">0534 400 12 01</a></p>
            <p><MessageCircle size={16} className="contact-icon-small" /> <a href={whatsappLink} target="_blank" rel="noreferrer">0534 400 12 01</a></p>
            <p><MapPin size={16} className="contact-icon-small" /> Koca Mustafapaşa, Akıncı Sk. No:5 Fatih/İstanbul</p>
          </div>
          <div className="quick-col">
            <h4>Hızlı Erişim</h4>
            <a href={mapsLink} target="_blank" rel="noreferrer" className="orange-button full-width">
              Yol Tarifi Al →
            </a>
            <a href="tel:+905344001201" className="dark-button full-width">
              Hemen Ara →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
