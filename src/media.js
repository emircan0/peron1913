import heroVideo from '../img/hero-video.mp4';
import galleryVideo from '../img/WhatsApp Video 2026-05-06 at 11.29.53.mp4';
import ambientAudio from '../img/fonPeron.mp3';

import entrance from '../img/WhatsApp Image 2026-05-06 at 11.30.10.jpeg';
import interior from '../img/WhatsApp Image 2026-05-06 at 11.33.14.jpeg';
import mezzeDetail from '../img/WhatsApp Image 2026-05-06 at 11.30.26.jpeg';
import liverPlate from '../img/WhatsApp Image 2026-05-06 at 11.30.26 (1).jpeg';
import grillSkewers from '../img/WhatsApp Image 2026-05-06 at 11.30.26 (2).jpeg';
import borekPlate from '../img/WhatsApp Image 2026-05-06 at 11.30.26 (3).jpeg';
import cheesePlate from '../img/WhatsApp Image 2026-05-06 at 11.30.27.jpeg';
import borekClose from '../img/WhatsApp Image 2026-05-06 at 11.30.27 (1).jpeg';
import galleryLezzetAni from '../img/gallery-lezzet-ani.jpg';
import galleryMezeKeyfi from '../img/gallery-meze-keyfi.jpg';
import galleryTazeLezzet from '../img/gallery-taze-lezzet.jpg';
import gallerySofradaTaze from '../img/gallery-sofrada-taze.jpg';
import galleryAninTadi from '../img/gallery-anin-tadi.jpg';
import menuSeckinPoster from '../img/menu-seckin-poster.jpg';
import ogleMenuBalikPoster from '../img/ogle-menu-balik-poster.jpg';
import ogleMenuKlasikPoster from '../img/ogle-menu-klasik-poster.jpg';
import ogleMenuAlkolsuzPoster from '../img/ogle-menu-alkolsuz-poster.jpg';

import socialToast from '../img/optimized/social-toast.jpg';
import socialTable from '../img/optimized/social-table.jpg';
import socialDinner from '../img/optimized/social-dinner.jpg';
import socialMezze from '../img/optimized/social-mezze.jpg';
import socialKebap from '../img/optimized/social-kebap.jpg';
import socialClaypot from '../img/optimized/social-claypot.jpg';
import collage from '../img/optimized/collage.jpg';
import kebapPlate from '../img/optimized/kebap-plate.jpg';
import mezzePoster from '../img/optimized/mezze-poster.jpg';
import claypotPoster from '../img/optimized/claypot-poster.jpg';

export const media = {
  heroVideo,
  galleryVideo,
  ambientAudio,
  entrance,
  interior,
  mezzeDetail,
  liverPlate,
  grillSkewers,
  borekPlate,
  cheesePlate,
  borekClose,
  socialToast,
  socialTable,
  socialDinner,
  socialMezze,
  socialKebap,
  socialClaypot,
  collage,
  kebapPlate,
  mezzePoster,
  claypotPoster,
  galleryLezzetAni,
  galleryMezeKeyfi,
  galleryTazeLezzet,
  gallerySofradaTaze,
  galleryAninTadi,
  menuSeckinPoster,
  ogleMenuBalikPoster,
  ogleMenuKlasikPoster,
  ogleMenuAlkolsuzPoster,
};

export const menuPosterImages = [
  {
    src: menuSeckinPoster,
    alt: 'Peron 1913 seçkin menü afişi',
    title: 'Seçkin Menü',
    description: '5 parça meze, salata, ara sıcak, seçmeli ana yemek ve meyve tabağı.',
  },
  {
    src: ogleMenuBalikPoster,
    alt: 'Peron 1913 balık seçenekli öğle menüsü afişi',
    title: 'Öğle Menüsü - Balık Seçenekli',
    description: 'Başlangıç, 3 meze, salata, muska böreği, levrek veya çipura ızgara ve meyve tabağı.',
  },
  {
    src: ogleMenuKlasikPoster,
    alt: 'Peron 1913 klasik öğle menüsü afişi',
    title: 'Öğle Menüsü - Klasik',
    description: 'Başlangıç, 3 meze, salata, muska böreği; tavuk şiş, köfte veya Adana seçimi ve meyve tabağı.',
  },
  {
    src: ogleMenuAlkolsuzPoster,
    alt: 'Peron 1913 alkolsüz öğle menüsü afişi',
    title: 'Öğle Menüsü - Alkolsüz',
    description: 'Seçmeli ana yemekli öğle sofrası; limonata, meyve suyu ve su seçenekleriyle.',
  },
];

export const venueGalleryImages = [
  { src: galleryLezzetAni, alt: 'Peron 1913 Lezzet Anı' },
  { src: galleryMezeKeyfi, alt: 'Peron 1913 Meze Keyfi' },
  { src: galleryTazeLezzet, alt: 'Peron 1913 Taze Lezzet' },
  { src: gallerySofradaTaze, alt: 'Peron 1913 Sofrada Taze' },
  { src: galleryAninTadi, alt: 'Peron 1913 Anın Tadı' },
  { src: entrance, alt: 'Peron 1913 mekan girişi' },
  { src: interior, alt: 'Peron 1913 iç mekan ve masa düzeni' },
  { src: mezzeDetail, alt: 'Peron 1913 meze detayı' },
  { src: liverPlate, alt: 'Peron 1913 yaprak ciğer tabağı' },
  { src: grillSkewers, alt: 'Peron 1913 ızgara şişler' },
  { src: borekPlate, alt: 'Peron 1913 ara sıcak tabağı' },
  { src: cheesePlate, alt: 'Peron 1913 peynir ve söğüş tabağı' },
  { src: borekClose, alt: 'Peron 1913 börek sunumu' },
  { src: kebapPlate, alt: 'Peron 1913 kebap tabağı' },
  { src: claypotPoster, alt: 'Peron 1913 güveçte özel tarif' },
  { src: socialTable, alt: 'Peron 1913 sofra paylaşımı' },
  { src: socialDinner, alt: 'Peron 1913 akşam yemeği paylaşımı' },
];

export const galleryImages = [...venueGalleryImages, ...menuPosterImages];

export const instagramImages = [
  { src: socialToast, alt: 'Peron 1913 kadeh paylaşımı' },
  { src: socialDinner, alt: 'Peron 1913 akşam sofrası' },
  { src: socialMezze, alt: 'Peron 1913 meze paylaşımı' },
  { src: socialKebap, alt: 'Peron 1913 kebap paylaşımı' },
];
