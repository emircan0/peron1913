import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuCategories = [
  {
    title: 'Izgaralar',
    kicker: 'KÖMÜR ATEŞİ',
    items: [
      { name: 'Kuzu Pirzola', price: '1.000 TL' },
      { name: 'Kuzu Şiş', price: '900 TL' },
    ],
  },
  {
    title: 'Kebap Çeşitleri',
    kicker: 'USTA İŞİ',
    items: [
      { name: 'Adana Porsiyon', price: '700 TL' },
      { name: 'Urfa Porsiyon', price: '700 TL' },
      { name: 'Patlıcanlı Kebap', price: '900 TL' },
    ],
  },
  {
    title: 'Tavuk Çeşitleri',
    kicker: 'SICAK SERVİS',
    items: [
      { name: 'Tavuk Şiş', price: '600 TL' },
      { name: 'Tavuk Kanat Yaprak', price: '600 TL' },
      { name: 'Tavuk Pirzola', price: '600 TL' },
    ],
  },
  {
    title: 'Tava ve Sote',
    kicker: 'MUTFAKTAN',
    items: [
      { name: 'Çoban Kavurma', price: '800 TL' },
      { name: 'Et Sote', price: '700 TL' },
      { name: 'Tavuk Sote', price: '650 TL' },
    ],
  },
  {
    title: 'Izgara Köfteler',
    kicker: 'EDİRNE USULÜ',
    items: [
      { name: 'Kaşarlı Köfte', price: '650 TL' },
      { name: 'Sade Köfte', price: '650 TL' },
    ],
  },
  {
    title: 'Mezeler',
    kicker: 'SOFRANIN BAŞLANGICI',
    items: [
      { name: 'Haydari', price: '220 TL' },
      { name: 'Atom', price: '220 TL' },
      { name: 'Şakşuka', price: '230 TL' },
      { name: 'Semiz Otlu', price: '230 TL' },
      { name: 'Yunan Cacığı', price: '220 TL' },
      { name: 'Köpe Oğlu', price: '220 TL' },
      { name: 'Girit Ezme', price: '230 TL' },
      { name: 'Special Mezeler', price: '240 TL' },
    ],
  },
  {
    title: 'Ara Sıcaklar',
    kicker: 'PAYLAŞMALIK',
    items: [
      { name: 'Yaprak Ciğer', price: '650 TL' },
      { name: 'İçli Köfte', price: '200 TL' },
      { name: 'Rum Muskası', price: '120 TL' },
      { name: 'Kalamar', price: '600 TL' },
      { name: 'Karides', price: '600 TL' },
    ],
  },
  {
    title: 'Salatalar',
    kicker: 'TAZE',
    items: [
      { name: 'Çoban Salata', price: '230 TL' },
      { name: 'Gavurdağı Salata', price: '250 TL' },
      { name: 'Mevsim Salata', price: '230 TL' },
      { name: 'Roka Salatası', price: '250 TL' },
      { name: 'Söğüş', price: '200 TL' },
    ],
  },
  {
    title: 'Dürümler',
    kicker: 'PRATİK LEZZET',
    items: [
      { name: 'Adana Dürüm', price: '350 TL' },
      { name: 'Urfa Dürüm', price: '350 TL' },
    ],
  },
  {
    title: 'Soğuk İçecekler',
    kicker: 'FERAHLIK',
    items: [
      { name: 'Soda', price: '60 TL' },
      { name: 'Ayran', price: '70 TL' },
      { name: 'Meşrubatlar', price: '40 TL' },
      { name: 'Red Bull', price: '250 TL' },
    ],
  },
  {
    title: 'Bira',
    kicker: 'ŞİŞE',
    items: [
      { name: 'Tuborg 50 cl', price: '220 TL' },
      { name: 'Miller 35 cl', price: '250 TL' },
    ],
  },
  {
    title: 'Rakı',
    kicker: 'ŞİŞE SERVİS',
    items: [
      { name: "Yeni Rakı 100'lük", price: '2.800 TL' },
      { name: "Yeni Rakı 70'lik", price: '2.250 TL' },
      { name: "Yeni Rakı 50'lik", price: '1.700 TL' },
      { name: "Yeni Rakı 35'lik", price: '1.250 TL' },
      { name: "Tekirdağ Klasik 100'lük", price: '3.000 TL' },
      { name: "Tekirdağ Klasik 70'lik", price: '2.350 TL' },
      { name: "Tekirdağ Gold 100'lük", price: '3.450 TL' },
      { name: "Efe Gold 100'lük", price: '3.450 TL' },
      { name: "Beylerbeyi 100'lük", price: '3.800 TL' },
      { name: "Sarı Zeybek 70'lik", price: '3.500 TL' },
    ],
  },
  {
    title: 'Viski ve Vodka',
    kicker: 'ŞİŞE SERVİS',
    items: [
      { name: "Chivas Regal 100'lük", price: '4.600 TL' },
      { name: "Chivas Regal 70'lik", price: '3.500 TL' },
      { name: "Jack Daniels 100'lük", price: '4.700 TL' },
      { name: "Jack Daniels 70'lik", price: '3.900 TL' },
      { name: "Johnnie Walker Black 100'lük", price: '4.500 TL' },
      { name: "Johnnie Walker Black 70'lik", price: '3.800 TL' },
      { name: "Absolut 70'lik", price: '3.000 TL' },
    ],
  },
];

const categoryId = (title) =>
  title
    .toLocaleLowerCase('tr-TR')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ı/g, 'i')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export default function Menu() {
  return (
    <main className="menu-page">
      <section className="menu-header-section">
        <div className="container">
          <Link to="/" className="back-link">
            <ChevronLeft size={20} /> Anasayfaya Dön
          </Link>
          <h1>Menü</h1>
          <div className="title-underline-center"></div>
          <p className="menu-subtitle">Seçkin lezzetlerimizi inceleyin</p>
        </div>
      </section>

      <section className="menu-image-section">
        <div className="menu-container">
          <div className="menu-intro-panel">
            <div>
              <span className="section-kicker">PERON 1913 MENÜ</span>
              <h2>Mezeden ızgaraya, sofranın ritmi burada</h2>
            </div>
            <p>
              Soğuk mezeler, ara sıcaklar, kömür ateşinden tabaklar ve masa eşlikçileri
              sade bir akışla bir araya geldi.
            </p>
          </div>

          <nav className="menu-category-nav" aria-label="Menü kategorileri">
            {menuCategories.map((category) => (
              <a href={`#${categoryId(category.title)}`} key={category.title}>
                {category.title}
              </a>
            ))}
          </nav>

          <div className="menu-layout">
            <aside className="menu-note-panel">
              <span>PERON 1913</span>
              <strong>Eski İstanbul meyhane sofrası</strong>
              <p>Fiyatlar menü kaynağındaki güncel listeye göre düzenlenmiştir.</p>
            </aside>

            <div className="menu-category-list">
              {menuCategories.map((category) => (
                <section className="menu-category" id={categoryId(category.title)} key={category.title}>
                  <div className="menu-category-heading">
                    <div>
                      <span className="section-kicker">{category.kicker}</span>
                      <h2>{category.title}</h2>
                    </div>
                    <span className="menu-category-count">{category.items.length} seçenek</span>
                  </div>
                  <div className="menu-card-grid">
                    {category.items.map((item) => (
                      <article className="menu-card" key={`${category.title}-${item.name}`}>
                        <div className="menu-card-body">
                          <h3>{item.name}</h3>
                          <span className="menu-card-rule" aria-hidden="true" />
                          <strong>{item.price}</strong>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="menu-footer-cta">
        <p>Özel günleriniz ve toplu yemekleriniz için bizimle iletişime geçebilirsiniz.</p>
        <a href="https://wa.me/905344001201" target="_blank" rel="noreferrer" className="primary-button">
          Masayı Ayırtın
        </a>
      </section>
    </main>
  );
}
