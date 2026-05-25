import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
  React.useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null) return null;

  const currentImage = images[currentIndex];

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="lightbox-overlay" onClick={handleBackdropClick}>
      <button className="lightbox-close" onClick={onClose} aria-label="Kapat">
        <X size={32} />
      </button>
      
      <button className="lightbox-nav prev" onClick={onPrev} aria-label="Önceki">
        <ChevronLeft size={48} />
      </button>

      <div className="lightbox-content">
        <img src={currentImage.src} alt={currentImage.alt} />
      </div>

      <button className="lightbox-nav next" onClick={onNext} aria-label="Sonraki">
        <ChevronRight size={48} />
      </button>

      <div className="lightbox-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
