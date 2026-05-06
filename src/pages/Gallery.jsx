import React from 'react';

export default function Gallery() {
  const placeholders = [
    "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1470333732907-3f17ce602e4d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
  ];

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
          <div className="gallery-row">
            {placeholders.map((src, i) => (
              <div key={i} className="gallery-img-placeholder">
                <img src={src} alt={`Galeri ${i + 1}`} />
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
