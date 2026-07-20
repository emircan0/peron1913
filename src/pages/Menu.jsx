import React from 'react';
import { menuPosterImages } from '../media';
import Lightbox from '../components/Lightbox';

const menuCategories = [
  {
    title: 'Izgara Çeşitleri',
    kicker: 'KÖMÜR ATEŞİ',
    items: [
      { name: 'Kuzu Pirzola', price: '1.200 TL' },
      { name: 'Kuzu Şiş', price: '1.100 TL' },
      { name: 'Dana Bonfile', price: '1.350 TL' },
      { name: 'Dana Antrikot', price: '1.100 TL' },
    ],
  },
  {
    title: 'Kebap Çeşitleri',
    kicker: 'USTA İŞİ',
    items: [
      { name: 'Adana Porsiyon', price: '850 TL' },
      { name: 'Urfa Porsiyon', price: '800 TL' },
      { name: 'Patlıcanlı Kebap', price: '' },
    ],
  },
  {
    title: 'Tavuk Çeşitleri',
    kicker: 'SICAK SERVİS',
    items: [
      { name: 'Tavuk Şiş', price: '800 TL' },
      { name: 'Tavuk Kanat Yaprak', price: '800 TL' },
      { name: 'Tavuk Pirzola', price: '800 TL' },
    ],
  },
  {
    title: 'Tava Çeşitleri',
    kicker: 'MUTFAKTAN',
    items: [
      { name: 'Çoban Kavurma', price: '1.000 TL' },
      { name: 'Et Sote', price: '950 TL' },
      { name: 'Tavuk Sote', price: '850 TL' },
    ],
  },
  {
    title: 'Ara Sıcak',
    kicker: 'PAYLAŞMALIK',
    items: [
      { name: 'Yaprak Ciğer', price: '850 TL' },
      { name: 'Güveç Monjore', price: '500 TL' },
      { name: 'İçli Köfte', price: '210 TL' },
      { name: 'Rum Muskası', price: '150 TL' },
      { name: 'Paçanga Böreği', price: '250 TL' },
      { name: 'Güveçte Pazı', price: '' },
      { name: 'Kalamar', price: '650 TL' },
      { name: 'Karides', price: '650 TL' },
      { name: 'Meyve Karışık', price: '450 TL' },
      { name: 'Karpuz', price: '300 TL' },
    ],
  },
  {
    title: 'Izgara Köfteler',
    kicker: 'EDİRNE USULÜ',
    items: [
      { name: 'Kaşarlı Köfte (Edirne)', price: '750 TL' },
      { name: 'Sade Köfte (Edirne)', price: '700 TL' },
    ],
  },
  {
    title: 'Meze Çeşitleri',
    kicker: 'SOFRANIN BAŞLANGICI',
    items: [
      { name: 'Haydari', price: '250 TL' },
      { name: 'Atom', price: '270 TL' },
      { name: 'Şakşuka', price: '250 TL' },
      { name: 'Semiz Otlu', price: '250 TL' },
      { name: 'Yunan Cacığı', price: '' },
      { name: 'Köpe Oğlu', price: '250 TL' },
      { name: 'Girit Ezme (Fesleğenli)', price: '270 TL' },
      { name: 'Humus', price: '' },
      { name: 'Kavun', price: '300 TL' },
      { name: 'Special Mezeler', price: '250 TL' },
    ],
  },
  {
    title: 'Salata Çeşitleri',
    kicker: 'TAZE',
    items: [
      { name: 'Çoban Salata', price: '250 TL' },
      { name: 'Gavur Dağı', price: '300 TL' },
      { name: 'Grek Salata', price: '' },
      { name: 'Mevsim Salata', price: '250 TL' },
      { name: 'Roka Salatası', price: '270 TL' },
      { name: 'Söğüş', price: '250 TL' },
      { name: 'Mevsim Salatası', price: '250 TL' },
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
    title: 'Alkollü İçkiler',
    kicker: 'ŞİŞE SERVİS',
    items: [
      { name: "100'lük Yeni Rakı", price: '3.200 TL' },
      { name: "70'lik Yeni Rakı", price: '2.400 TL' },
      { name: "50'lik Yeni Rakı", price: '2.000 TL' },
      { name: "35'lik Yeni Rakı", price: '1.500 TL' },
      { name: "100'lük Tekirdağ Klasik", price: '3.300 TL' },
      { name: "70'lik Tekirdağ Klasik", price: '2.500 TL' },
      { name: "50'lik Tekirdağ Klasik", price: '2.100 TL' },
      { name: "35'lik Tekirdağ Klasik", price: '1.600 TL' },
      { name: "20'lik Tekirdağ Klasik", price: '1.250 TL' },
      { name: "100'lük Efe Gold", price: '3.950 TL' },
      { name: "70'lik Efe Gold", price: '3.200 TL' },
      { name: "50'lik Efe Gold", price: '2.400 TL' },
      { name: "35'lik Efe Gold", price: '1.950 TL' },
      { name: "20'lik Efe Gold", price: '1.300 TL' },
      { name: "100'lük Tekirdağ Gold", price: '3.950 TL' },
      { name: "70'lik Tekirdağ Gold", price: '3.200 TL' },
      { name: "50'lik Tekirdağ Gold", price: '2.400 TL' },
      { name: "35'lik Tekirdağ Gold", price: '1.950 TL' },
      { name: "20'lik Tekirdağ Gold", price: '1.300 TL' },
      { name: "100'lük Beylerbeyi", price: '4.250 TL' },
      { name: "70'lik Beylerbeyi", price: '3.400 TL' },
      { name: "50'lik Beylerbeyi", price: '2.600 TL' },
      { name: "35'lik Beylerbeyi", price: '2.150 TL' },
      { name: "20'lik Beylerbeyi", price: '1.500 TL' },
      { name: "100'lük Sarı Zeybek", price: '4.500 TL' },
      { name: "70'lik Sarı Zeybek", price: '3.600 TL' },
      { name: "35'lik Sarı Zeybek", price: '2.500 TL' },
      { name: "100'lük Yeni Seri Yeni Rakı", price: '3.500 TL' },
      { name: "70'lik Yeni Seri Yeni Rakı", price: '2.600 TL' },
      { name: "50'lik Yeni Seri Yeni Rakı", price: '2.100 TL' },
      { name: "35'lik Yeni Seri Yeni Rakı", price: '1.600 TL' },
      { name: "20'lik Yeni Seri Yeni Rakı", price: '1.300 TL' },
    ],
  },
  {
    title: 'Viski',
    kicker: 'ŞİŞE SERVİS',
    items: [
      { name: "100'lük Chivas Wisky", price: '5.550 TL' },
      { name: "70'lik Chivas Wisky", price: '3.900 TL' },
      { name: "50'lik Chivas Wisky", price: '3.150 TL' },
      { name: "35'lik Chivas Wisky", price: '2.500 TL' },
      { name: "70'lik Jack Daniels Wisky", price: '3.950 TL' },
      { name: "50'lik Jack Daniels Wisky", price: '3.000 TL' },
      { name: "35'lik Jack Daniels Wisky", price: '2.600 TL' },
      { name: "70'lik Black", price: '3.950 TL' },
      { name: "50'lik Black", price: '3.000 TL' },
      { name: "35'lik Black", price: '2.600 TL' },
    ],
  },
  {
    title: 'Votka',
    kicker: 'ŞİŞE SERVİS',
    items: [
      { name: "70'lik İstanbul", price: '2.500 TL' },
      { name: "50'lik İstanbul", price: '2.100 TL' },
      { name: "35'lik İstanbul", price: '1.650 TL' },
      { name: "70'lik Absolit", price: '3.300 TL' },
      { name: "35'lik Absolit", price: '2.500 TL' },
    ],
  },
  {
    title: 'Biralar',
    kicker: 'ŞİŞE',
    items: [
      { name: 'Tuborg Bira 50cc', price: '250 TL' },
      { name: 'Miler Bira 35cc', price: '300 TL' },
    ],
  },
  {
    title: 'Meşrubatlar',
    kicker: 'FERAHLIK',
    items: [
      { name: 'Soda', price: '80 TL' },
      { name: 'Redbul', price: '300 TL' },
      { name: 'Ayran', price: '100 TL' },
      { name: 'Meşrubatlar', price: '130 TL' },
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
  const [posterIndex, setPosterIndex] = React.useState(null);
  const closePosters = () => setPosterIndex(null);
  const nextPoster = () => setPosterIndex((previous) => (previous + 1) % menuPosterImages.length);
  const previousPoster = () =>
    setPosterIndex((previous) => (previous - 1 + menuPosterImages.length) % menuPosterImages.length);

  return (
    <main className="menu-page">
      <section className="menu-image-section">
        <div className="menu-container">
          <section className="menu-specials" aria-labelledby="menu-specials-title">
            <div className="menu-specials-heading">
              <div>
                <span className="section-kicker">PERON 1913 MENÜ</span>
                <h1 id="menu-specials-title">Öğle ve Seçkin Menüler</h1>
              </div>
              <p>
                Görselleri büyütmek için üzerlerine tıklayabilirsiniz. Rezervasyon öncesi
                güncel içerik ve fiyatı ekibimizden teyit ediniz.
              </p>
            </div>
            <div className="menu-poster-grid">
              {menuPosterImages.map((poster, index) => (
                <figure className="menu-poster-card" key={poster.title}>
                  <button
                    className="menu-poster-button"
                    type="button"
                    onClick={() => setPosterIndex(index)}
                    aria-label={`${poster.title} afişini büyüt`}
                  >
                    <img src={poster.src} alt={poster.alt} loading="lazy" />
                    <span>Detaylı incele</span>
                  </button>
                  <figcaption>
                    <strong>{poster.title}</strong>
                    <p>{poster.description}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="menu-price-notice">
              Öğle ve grup menülerinde içerik ve fiyatlar tarihe, kişi sayısına ve içecek
              seçimine göre değişkenlik gösterebilir. Güncel fiyat bilgisi için iletişime geçiniz.
            </p>
          </section>

          <Lightbox
            images={menuPosterImages}
            currentIndex={posterIndex}
            onClose={closePosters}
            onNext={nextPoster}
            onPrev={previousPoster}
          />

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
              <strong>Fiyat Bilgisi</strong>
              <p>
                Ürün bulunurluğu ve fiyatlar değişkenlik gösterebilir. Güncel bilgi için
                rezervasyon sırasında ekibimize danışınız.
              </p>
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
