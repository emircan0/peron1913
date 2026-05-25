import React from 'react';
import { menuPosterImages } from '../media';
import Lightbox from '../components/Lightbox';

const menuCategories = [
  {
    title: 'Izgara Çeşitleri',
    kicker: 'KÖMÜR ATEŞİ',
    items: [
      { name: 'Kuzu Pirzola', price: '1.000 TL' },
      { name: 'Kuzu Şiş', price: '900 TL' },
      { name: 'Dana Bonfile', price: '1.400 TL' },
      { name: 'Dana Antrikot', price: '1.250 TL' },
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
      { name: 'Tavuk Pirzola', price: '570 TL' },
    ],
  },
  {
    title: 'Balıklar',
    kicker: 'DENİZDEN TAZE',
    items: [
      { name: 'Çipura', price: '650 TL' },
      { name: 'Levrek', price: '650 TL' },
    ],
  },
  {
    title: 'Tava ve Sote',
    kicker: 'MUTFAKTAN',
    items: [
      { name: 'Çoban Kavurma', price: '800 TL' },
      { name: 'Et Sote', price: '750 TL' },
      { name: 'Tavuk Sote', price: '700 TL' },
    ],
  },
  {
    title: 'Izgara Köfteler',
    kicker: 'EDİRNE USULÜ',
    items: [
      { name: 'Kaşarlı Köfte', price: '650 TL' },
      { name: 'Sade Köfte', price: '600 TL' },
    ],
  },
  {
    title: 'Mezeler',
    kicker: 'SOFRANIN BAŞLANGICI',
    items: [
      { name: 'Haydari', price: '230 TL' },
      { name: 'Atom', price: '230 TL' },
      { name: 'Şakşuka', price: '230 TL' },
      { name: 'Semiz Otlu', price: '230 TL' },
      { name: 'Yunan Cacığı', price: '230 TL' },
      { name: 'Köpe Oğlu', price: '230 TL' },
      { name: 'Girit Ezme (Fesleğenli)', price: '230 TL' },
      { name: 'Special Mezeler', price: '240 TL' },
    ],
  },
  {
    title: 'Ara Sıcaklar',
    kicker: 'PAYLAŞMALIK',
    items: [
      { name: 'Güveçte Dana Kokoreç', price: '600 TL' },
      { name: 'Yaprak Ciğer', price: '650 TL' },
      { name: 'Güveç Monjore', price: '450 TL' },
      { name: 'İçli Köfte', price: '200 TL' },
      { name: 'Rum Muskası', price: '140 TL' },
      { name: 'Güveçte Pazı', price: '300 TL' },
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
    title: 'Meyveler',
    kicker: 'MEVSİMİNDEN',
    items: [
      { name: 'Meyve Karışık', price: '250 TL' },
      { name: 'Kavun', price: '250 TL' },
      { name: 'Karpuz', price: '250 TL' },
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
      { name: 'Meşrubatlar', price: '110 TL' },
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
      { name: "Yeni Seri Yeni Rakı 100'lük", price: '3.000 TL' },
      { name: "Yeni Seri Yeni Rakı 70'lik", price: '2.350 TL' },
      { name: "Yeni Seri Yeni Rakı 50'lik", price: '1.900 TL' },
      { name: "Yeni Seri Yeni Rakı 35'lik", price: '1.400 TL' },
      { name: "Yeni Seri Yeni Rakı 20'lik", price: '950 TL' },
      { name: "Tekirdağ Klasik 100'lük", price: '3.000 TL' },
      { name: "Tekirdağ Klasik 70'lik", price: '2.350 TL' },
      { name: "Tekirdağ Klasik 50'lik", price: '1.900 TL' },
      { name: "Tekirdağ Klasik 35'lik", price: '1.400 TL' },
      { name: "Tekirdağ Klasik 20'lik", price: '950 TL' },
      { name: "Tekirdağ Gold 100'lük", price: '3.450 TL' },
      { name: "Tekirdağ Gold 70'lik", price: '2.600 TL' },
      { name: "Tekirdağ Gold 50'lik", price: '2.100 TL' },
      { name: "Tekirdağ Gold 35'lik", price: '1.650 TL' },
      { name: "Tekirdağ Gold 20'lik", price: '1.000 TL' },
      { name: "Efe Gold 100'lük", price: '3.450 TL' },
      { name: "Efe Gold 70'lik", price: '2.600 TL' },
      { name: "Efe Gold 50'lik", price: '2.100 TL' },
      { name: "Efe Gold 35'lik", price: '1.650 TL' },
      { name: "Efe Gold 20'lik", price: '1.000 TL' },
      { name: "Beylerbeyi 100'lük", price: '3.800 TL' },
      { name: "Beylerbeyi 70'lik", price: '2.950 TL' },
      { name: "Beylerbeyi 50'lik", price: '2.300 TL' },
      { name: "Beylerbeyi 35'lik", price: '1.750 TL' },
      { name: "Beylerbeyi 20'lik", price: '1.200 TL' },
      { name: "Sarı Zeybek 70'lik", price: '3.500 TL' },
      { name: "Sarı Zeybek 35'lik", price: '2.500 TL' },
      { name: "Sarı Zeybek 20'lik", price: '2.100 TL' },
    ],
  },
  {
    title: 'Viski ve Votka',
    kicker: 'ŞİŞE SERVİS',
    items: [
      { name: "Chivas Regal 100'lük", price: '4.600 TL' },
      { name: "Chivas Regal 70'lik", price: '3.800 TL' },
      { name: "Chivas Regal 50'lik", price: '2.950 TL' },
      { name: "Chivas Regal 35'lik", price: '2.500 TL' },
      { name: "Jack Daniels 100'lük", price: '4.700 TL' },
      { name: "Jack Daniels 70'lik", price: '3.900 TL' },
      { name: "Jack Daniels 50'lik", price: '3.000 TL' },
      { name: "Jack Daniels 35'lik", price: '2.700 TL' },
      { name: "Johnnie Walker Black 100'lük", price: '4.500 TL' },
      { name: "Johnnie Walker Black 70'lik", price: '3.800 TL' },
      { name: "Johnnie Walker Black 50'lik", price: '3.000 TL' },
      { name: "Johnnie Walker Black 35'lik", price: '2.600 TL' },
      { name: "İstanbul Votka 70'lik", price: '2.250 TL' },
      { name: "İstanbul Votka 50'lik", price: '1.700 TL' },
      { name: "İstanbul Votka 35'lik", price: '1.250 TL' },
      { name: "Absolut 70'lik", price: '3.000 TL' },
      { name: "Absolut 35'lik", price: '2.700 TL' },
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
