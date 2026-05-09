import React from 'react';
import { galleryImages, media } from '../media';

export default function Gallery() {
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
              <video src={media.venueVideo} poster={media.interior} controls muted playsInline preload="metadata" />
            </div>
          </div>

          <div className="gallery-row">
            {galleryImages.map((item) => (
              <div key={item.src} className="gallery-img-placeholder">
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
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
