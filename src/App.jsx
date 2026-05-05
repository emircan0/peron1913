import React from 'react'
import {
  CalendarDays,
  ChevronRight,
  Clock3,
  GlassWater,
  Instagram,
  MapPin,
  Menu,
  Music2,
  Phone,
  Sparkles,
  Utensils,
  Wine,
  X,
} from 'lucide-react'

const menuHighlights = [
  {
    title: 'Meyhane Sofrası',
    text: 'Paylaşımlı mezeler, deniz ürünleri ve zamansız ara sıcaklar için ayrılmış seçkin alan.',
  },
  {
    title: 'A la Carte',
    text: 'Et, balık ve mevsim tabaklarını daha rafine bir restoran akışıyla sunan bölüm.',
  },
  {
    title: 'İmza Lezzetler',
    text: 'Peron 1913 mutfağına özel reçeteler, günlük ürünler ve dönemsel öneriler.',
  },
]

const galleryItems = [
  'Ana salon',
  'Meyhane masası',
  'Canlı müzik',
  'Özel davet',
  'Bar & servis',
  'Teras atmosferi',
]

export default function App() {
  const [navOpen, setNavOpen] = React.useState(false)

  const closeNav = () => setNavOpen(false)

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#anasayfa" aria-label="Peron 1913 anasayfa">
          <img src="/peron-1913-logo.jpg" alt="Peron 1913" />
          <span>
            <strong>Peron 1913</strong>
            <small>Restoran & Meyhane</small>
          </span>
        </a>

        <nav className={navOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Ana menü">
          <a onClick={closeNav} href="#hikaye">Hikaye</a>
          <a onClick={closeNav} href="#menu">Menü</a>
          <a onClick={closeNav} href="#galeri">Galeri</a>
          <a onClick={closeNav} href="#iletisim">İletişim</a>
        </nav>

        <a className="header-action" href="tel:+900000000000">
          <Phone size={17} />
          Rezervasyon
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Menüyü aç veya kapat"
          onClick={() => setNavOpen((value) => !value)}
        >
          {navOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero" id="anasayfa">
        <div className="hero-media" aria-hidden="true">
          <img src="/peron-1913-logo.jpg" alt="" />
        </div>

        <div className="hero-content">
          <p className="eyebrow">İstanbul meyhane kültürüne seçkin bir durak</p>
          <h1>Peron 1913</h1>
          <p className="hero-copy">
            Kurumsal çizgisi güçlü, sıcaklığı yerinde, iyi sofra ve iyi müzik etrafında
            tasarlanmış restoran-meyhane deneyimi.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#iletisim">
              Rezervasyon Planla
              <ChevronRight size={18} />
            </a>
            <a className="secondary-button" href="#menu">
              Menü Alanlarını Gör
            </a>
          </div>
        </div>

        <div className="hero-info" aria-label="Kısa bilgiler">
          <span>
            <Clock3 size={18} />
            16:00 - 02:00
          </span>
          <span>
            <Music2 size={18} />
            Fasıl & canlı performans
          </span>
          <span>
            <MapPin size={18} />
            Konum bilgisi eklenecek
          </span>
        </div>
      </section>

      <section className="intro-section" id="hikaye">
        <div>
          <p className="section-kicker">Hikaye</p>
          <h2>Eski İstanbul ruhu, bugünün servis disipliniyle buluşuyor.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Peron 1913 için hazırlanan bu altyapı, marka hikayesini, menüleri, mekan
            fotoğraflarını, etkinlik duyurularını ve rezervasyon akışını sonradan kolayca
            güncelleyebileceğiniz şekilde düzenlendi.
          </p>
          <p>
            Görsel dil; siyah-beyaz logonun nostaljik karakterini, kurumsal ve elit bir
            restoran atmosferiyle dengeleyen koyu, sıcak ve sakin bir yapı üzerine kuruldu.
          </p>
        </div>
      </section>

      <section className="signature-band">
        <div className="metric">
          <strong>1913</strong>
          <span>Marka referansı</span>
        </div>
        <div className="metric">
          <strong>6</strong>
          <span>Hazır içerik alanı</span>
        </div>
        <div className="metric">
          <strong>100%</strong>
          <span>Vercel uyumlu</span>
        </div>
      </section>

      <section className="content-section" id="menu">
        <div className="section-heading">
          <p className="section-kicker">Menü</p>
          <h2>Lezzet kategorileri için hazır vitrin.</h2>
          <p>
            Bu alanlar gerçek menüler geldiğinde fiyat, açıklama, kategori ve görsellerle
            genişletilebilir.
          </p>
        </div>

        <div className="menu-grid">
          {menuHighlights.map((item, index) => (
            <article className="menu-card" key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <Utensils size={24} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-panel">
          <Sparkles size={28} />
          <h2>Özel geceler, davetler ve canlı müzik akışı için ayrı anlatım alanı.</h2>
          <p>
            Doğum günü, şirket yemeği, fasıl gecesi veya özel kutlama duyurularını bu
            bölümde öne çıkarabilirsiniz.
          </p>
        </div>
        <div className="experience-list">
          <div>
            <CalendarDays size={22} />
            <span>Etkinlik takvimi</span>
          </div>
          <div>
            <Wine size={22} />
            <span>İçecek seçkisi</span>
          </div>
          <div>
            <GlassWater size={22} />
            <span>Kurumsal davetler</span>
          </div>
        </div>
      </section>

      <section className="content-section" id="galeri">
        <div className="section-heading">
          <p className="section-kicker">Galeri</p>
          <h2>Görseller geldiğinde şık bir portfolyo düzeni hazır.</h2>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div className="gallery-tile" key={item}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="iletisim">
        <div>
          <p className="section-kicker">İletişim</p>
          <h2>Rezervasyon ve ulaşım bilgileri için kurumsal kapanış alanı.</h2>
          <p>
            Telefon, adres, harita, Instagram ve WhatsApp bağlantıları netleştiğinde bu
            bölüm doğrudan canlı yayına uygun hale gelir.
          </p>
        </div>

        <div className="contact-actions">
          <a href="tel:+900000000000">
            <Phone size={20} />
            +90 000 000 00 00
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <Instagram size={20} />
            Instagram
          </a>
          <a href="https://maps.google.com/" target="_blank" rel="noreferrer">
            <MapPin size={20} />
            Haritada Aç
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>Peron 1913</span>
        <span>Restoran & Meyhane</span>
      </footer>
    </main>
  )
}
