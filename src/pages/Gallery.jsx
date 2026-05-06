import React from 'react';

export default function Gallery() {
  const placeholders = Array.from({ length: 8 });

  return (
    <main className="page-content bg-white">
      <section className="gallery-section content-container text-center">
        <h2>Foto Galeri</h2>
        <div className="title-underline-center"></div>
        <div className="gallery-grid">
          {placeholders.map((_, i) => (
            <div key={i} className="placeholder-img gallery-img">
              Görsel {i + 1}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
