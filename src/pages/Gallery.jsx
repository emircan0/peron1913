import React from 'react';
import { galleryImages, media, menuPosterImages, venueGalleryImages } from '../media';
import Lightbox from '../components/Lightbox';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = React.useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextLightbox = () => setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  const prevLightbox = () => setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <main className="gallery-page">
      <section className="menu-header-section">
        <div className="container">
          <span className="section-kicker">ANILARIMIZ</span>
          <h1>Foto Galeri</h1>
          <div className="title-underline-center white-line"></div>
          <p className="menu-subtitle">Mekanın ruhunu taşıyan kareler</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-video-grid gallery-video-grid-single">
            <div className="gallery-video-card">
              <video src={media.galleryVideo} poster={media.interior} controls muted playsInline preload="metadata" />
            </div>
          </div>

          <div className="gallery-row gallery-vertical">
            {venueGalleryImages.map((item, index) => (
              <div
                key={item.src}
                className="gallery-img-placeholder"
                onClick={() => openLightbox(index)}
                style={{ cursor: 'pointer' }}
              >
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>

          <div className="gallery-poster-section">
            <div className="text-center">
              <span className="section-kicker">MENÜ SEÇENEKLERİ</span>
              <h2>Öğle ve Seçkin Menüler</h2>
              <div className="title-underline-center"></div>
              <p className="gallery-poster-copy">
                İçerik ve fiyatlar değişkenlik gösterebilir. Güncel bilgi için bizimle iletişime geçiniz.
              </p>
            </div>
            <div className="gallery-poster-grid">
              {menuPosterImages.map((item, index) => (
                <figure
                  className="gallery-poster-card"
                  key={item.src}
                  onClick={() => openLightbox(venueGalleryImages.length + index)}
                >
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <Lightbox
            images={galleryImages}
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
    </main>
  );
}
