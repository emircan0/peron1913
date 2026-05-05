import React from 'react';
import { Instagram, MapPin, Phone } from 'lucide-react';

export default function App() {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0a0908',
      color: '#f2ece4',
      fontFamily: "'Montserrat', sans-serif",
      padding: '2rem',
      boxSizing: 'border-box',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Background glow effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 60%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4rem',
        width: '100%',
        maxWidth: '1200px',
        zIndex: 1,
        animation: 'fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }}>
        
        {/* Left Side: Brand and Text */}
        <div style={{ flex: '1 1 400px', maxWidth: '550px', textAlign: 'left' }}>
          <img 
            src="/peron-1913-logo.jpg" 
            alt="Peron 1913" 
            style={{ 
              width: '100px', 
              height: '100px', 
              borderRadius: '50%', 
              marginBottom: '1.5rem',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 0 40px rgba(212, 175, 55, 0.15)',
              objectFit: 'cover'
            }} 
          />
          
          <h1 style={{ 
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
            fontWeight: 400,
            margin: '0 0 1rem 0',
            color: '#d4af37',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            lineHeight: 1
          }}>
            Peron 1913
          </h1>
          
          <p style={{
            fontSize: '1.1rem',
            color: '#a39c90',
            fontWeight: 300,
            lineHeight: 1.8,
            margin: 0
          }}>
            Web sitemiz çok yakında yenilenmiş yüzüyle yayında olacak.<br/>
            Ancak restoranımız tüm zarafetiyle misafirlerimizi ağırlamaya devam ediyor.
          </p>
        </div>

        {/* Right Side: Contact Info */}
        <div style={{
          flex: '1 1 350px',
          maxWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          background: 'rgba(20, 18, 16, 0.65)',
          backdropFilter: 'blur(12px)',
          padding: '2.5rem',
          border: '1px solid rgba(212, 175, 55, 0.15)',
          borderRadius: '4px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
        }}>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '1.6rem',
            margin: '0 0 0.5rem 0',
            color: '#fff',
            borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
            paddingBottom: '0.8rem',
            fontWeight: 400,
            letterSpacing: '1px'
          }}>İletişim & Rezervasyon</h2>
          
          <a href="tel:05344001201" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f2ece4', textDecoration: 'none' }}>
            <Phone size={20} color="#d4af37" />
            <span style={{ fontSize: '1.1rem', letterSpacing: '1px', fontWeight: 500 }}>0534 400 12 01</span>
          </a>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <MapPin size={24} color="#d4af37" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '1rem', lineHeight: 1.5, color: '#a39c90' }}>
              Koca Mustafapaşa, Akıncı Sk. No:5,<br/>34098 Fatih / İstanbul
            </span>
          </div>

          <a href="https://www.instagram.com/peron.1913/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#a39c90', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#d4af37'} onMouseOut={(e) => e.currentTarget.style.color = '#a39c90'}>
            <Instagram size={20} color="#d4af37" />
            <span style={{ fontSize: '1rem', letterSpacing: '0.5px' }}>@peron.1913</span>
          </a>
        </div>
        
      </div>
    </div>
  );
}
