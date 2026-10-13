/**
 * MTVZN PHOTOGRAPHY — MAIN SCRIPT
 * Photographie Nightlife & Événementiel (@mtvzn_)
 */

const PHOTOS = [
  // --- CLUBS & THE HOUSE ---
  {
    id: "the-house-mainstage",
    title: "Mainstage The House",
    series: "The House @ Mirano",
    cat: "clubs",
    thumb: "assets/images/thumbs/the-house-mainstage.jpg",
    full: "assets/images/full/the-house-mainstage.jpg",
    insta: false
  },
  {
    id: "mirano-round1-energy",
    title: "Round 1 — Mirano Continental",
    series: "Mirano Brussels",
    cat: "clubs",
    thumb: "assets/images/thumbs/mirano-round1-energy.jpg",
    full: "assets/images/full/mirano-round1-energy.jpg",
    insta: false
  },
  {
    id: "party-laser-green",
    title: "Faisceau Vert & Dancefloor",
    series: "The House",
    cat: "clubs",
    thumb: "assets/images/thumbs/party-laser-green.jpg",
    full: "assets/images/full/party-laser-green.jpg",
    insta: true
  },
  {
    id: "dj-deck-groove",
    title: "Au Cœur du Mix",
    series: "The House",
    cat: "clubs",
    thumb: "assets/images/thumbs/dj-deck-groove.jpg",
    full: "assets/images/full/dj-deck-groove.jpg",
    insta: false
  },
  {
    id: "beams-the-house",
    title: "Stroboscopes & Faisceaux",
    series: "The House",
    cat: "clubs",
    thumb: "assets/images/thumbs/beams-the-house.jpg",
    full: "assets/images/full/beams-the-house.jpg",
    insta: true
  },
  {
    id: "vip-sparklers-eristoff",
    title: "Service Bouteilles & Étincelles",
    series: "Nightlife VIP",
    cat: "clubs",
    thumb: "assets/images/thumbs/vip-sparklers-eristoff.jpg",
    full: "assets/images/full/vip-sparklers-eristoff.jpg",
    insta: false
  },
  {
    id: "club-atmosphere",
    title: "Plongée dans les Basses",
    series: "The House",
    cat: "clubs",
    thumb: "assets/images/thumbs/club-atmosphere.jpg",
    full: "assets/images/full/club-atmosphere.jpg",
    insta: true
  },
  {
    id: "the-house-wristband-peace",
    title: "Bracelets The House",
    series: "Club Culture",
    cat: "clubs",
    thumb: "assets/images/thumbs/the-house-wristband-peace.jpg",
    full: "assets/images/full/the-house-wristband-peace.jpg",
    insta: false
  },
  {
    id: "closing-hour-magic",
    title: "Dernières Heures de Nuit",
    series: "The House",
    cat: "clubs",
    thumb: "assets/images/thumbs/closing-hour-magic.jpg",
    full: "assets/images/full/closing-hour-magic.jpg",
    insta: true
  },
  {
    id: "red-laser-mood",
    title: "Faisceau Rouge",
    series: "The House",
    cat: "clubs",
    thumb: "assets/images/thumbs/red-laser-mood.jpg",
    full: "assets/images/full/red-laser-mood.jpg",
    insta: true
  },
  {
    id: "house-may-vibe-1",
    title: "The House Session Mai",
    series: "The House",
    cat: "clubs",
    thumb: "assets/images/thumbs/house-may-vibe-1.jpg",
    full: "assets/images/full/house-may-vibe-1.jpg",
    insta: false
  },

  // --- SCÈNE & CONCERTS ---
  {
    id: "crowd-smartphone-lights",
    title: "Océan de Flashs",
    series: "Live & Concert",
    cat: "live",
    thumb: "assets/images/thumbs/crowd-smartphone-lights.jpg",
    full: "assets/images/full/crowd-smartphone-lights.jpg",
    insta: false
  },
  {
    id: "live-mic-chiaroscuro",
    title: "Clair-obscur au Micro",
    series: "Live Showcase",
    cat: "live",
    thumb: "assets/images/thumbs/live-mic-chiaroscuro.jpg",
    full: "assets/images/full/live-mic-chiaroscuro.jpg",
    insta: false
  },
  {
    id: "live-percussionist-laser",
    title: "Djembe & Laser Vert",
    series: "Live Performance",
    cat: "live",
    thumb: "assets/images/thumbs/live-percussionist-laser.jpg",
    full: "assets/images/full/live-percussionist-laser.jpg",
    insta: false
  },
  {
    id: "stage-flame-rap",
    title: "Showcase & Pyrotechnie",
    series: "Live Hip-Hop",
    cat: "live",
    thumb: "assets/images/thumbs/stage-flame-rap.jpg",
    full: "assets/images/full/stage-flame-rap.jpg",
    insta: false
  },
  {
    id: "live-showcase-rapper",
    title: "Intensité Scénique",
    series: "Underground Live",
    cat: "live",
    thumb: "assets/images/thumbs/live-showcase-rapper.jpg",
    full: "assets/images/full/live-showcase-rapper.jpg",
    insta: false
  },
  {
    id: "stage-crew-crimson",
    title: "Crew en Lumière Rouge",
    series: "Live Showcase",
    cat: "live",
    thumb: "assets/images/thumbs/stage-crew-crimson.jpg",
    full: "assets/images/full/stage-crew-crimson.jpg",
    insta: false
  },
  {
    id: "confetti-explosion",
    title: "Explosion de Confettis",
    series: "The House",
    cat: "live",
    thumb: "assets/images/thumbs/confetti-explosion.jpg",
    full: "assets/images/full/confetti-explosion.jpg",
    insta: true
  },
  {
    id: "purple-fog-stage",
    title: "Brumes Violettes",
    series: "The House",
    cat: "live",
    thumb: "assets/images/thumbs/purple-fog-stage.jpg",
    full: "assets/images/full/purple-fog-stage.jpg",
    insta: true
  },
  {
    id: "stage-dj-lights",
    title: "Ombres & DJ",
    series: "The House",
    cat: "live",
    thumb: "assets/images/thumbs/stage-dj-lights.jpg",
    full: "assets/images/full/stage-dj-lights.jpg",
    insta: false
  },

  // --- BALS & GALAS ---
  {
    id: "gala-shoulders-spotlight",
    title: "Porté sous le Spot Violet",
    series: "Gala & Bal Étudiant",
    cat: "galas",
    thumb: "assets/images/thumbs/gala-shoulders-spotlight.jpg",
    full: "assets/images/full/gala-shoulders-spotlight.jpg",
    insta: false
  },
  {
    id: "casino-dancefloor-laugh",
    title: "Casino Night & Éclat de Rire",
    series: "Soirée Thématique",
    cat: "galas",
    thumb: "assets/images/thumbs/casino-dancefloor-laugh.jpg",
    full: "assets/images/full/casino-dancefloor-laugh.jpg",
    insta: false
  },
  {
    id: "gala-evening-dresses",
    title: "Élégance & Sourires",
    series: "Bal Étudiant",
    cat: "galas",
    thumb: "assets/images/thumbs/gala-evening-dresses.jpg",
    full: "assets/images/full/gala-evening-dresses.jpg",
    insta: false
  },
  {
    id: "emerald-dress-twirl",
    title: "Tourbillon de Velours",
    series: "Soirée Gala",
    cat: "galas",
    thumb: "assets/images/thumbs/emerald-dress-twirl.jpg",
    full: "assets/images/full/emerald-dress-twirl.jpg",
    insta: false
  },
  {
    id: "gala-golden-beams",
    title: "Faisceaux Dorés",
    series: "Soirée Étudiante",
    cat: "galas",
    thumb: "assets/images/thumbs/gala-golden-beams.jpg",
    full: "assets/images/full/gala-golden-beams.jpg",
    insta: false
  },
  {
    id: "dom-perignon-vip-lounge",
    title: "Lounge VIP Dom Pérignon",
    series: "Soirée Privée",
    cat: "galas",
    thumb: "assets/images/thumbs/dom-perignon-vip-lounge.jpg",
    full: "assets/images/full/dom-perignon-vip-lounge.jpg",
    insta: false
  },

  // --- PORTRAITS FLASH ---
  {
    id: "nightlife-portrait-1",
    title: "Regard Brut au Flash Direct",
    series: "Nightlife",
    cat: "portraits",
    thumb: "assets/images/thumbs/nightlife-portrait-1.jpg",
    full: "assets/images/full/nightlife-portrait-1.jpg",
    insta: true
  },
  {
    id: "flash-glitter-duo",
    title: "Duo Paillettes & Regard Complice",
    series: "Soirée Club",
    cat: "portraits",
    thumb: "assets/images/thumbs/flash-glitter-duo.jpg",
    full: "assets/images/full/flash-glitter-duo.jpg",
    insta: false
  },
  {
    id: "crimson-portrait-duo",
    title: "Flash Rouge Adidas",
    series: "The House",
    cat: "portraits",
    thumb: "assets/images/thumbs/crimson-portrait-duo.jpg",
    full: "assets/images/full/crimson-portrait-duo.jpg",
    insta: true
  },
  {
    id: "crowd-energy-smile",
    title: "Sourires Dancefloor",
    series: "The House",
    cat: "portraits",
    thumb: "assets/images/thumbs/crowd-energy-smile.jpg",
    full: "assets/images/full/crowd-energy-smile.jpg",
    insta: true
  },
  {
    id: "hype-energy-man",
    title: "Signe Rock & Énergie Nuit",
    series: "The House",
    cat: "portraits",
    thumb: "assets/images/thumbs/hype-energy-man.jpg",
    full: "assets/images/full/hype-energy-man.jpg",
    insta: true
  },
  {
    id: "magenta-glow-shaka",
    title: "Magenta Shaka",
    series: "The House",
    cat: "portraits",
    thumb: "assets/images/thumbs/magenta-glow-shaka.jpg",
    full: "assets/images/full/magenta-glow-shaka.jpg",
    insta: true
  },
  {
    id: "flash-duo-club",
    title: "Instantané au Club",
    series: "The House",
    cat: "portraits",
    thumb: "assets/images/thumbs/flash-duo-club.jpg",
    full: "assets/images/full/flash-duo-club.jpg",
    insta: true
  },
  {
    id: "crowd-wristband-peace",
    title: "Connexion & Signe V",
    series: "The House",
    cat: "portraits",
    thumb: "assets/images/thumbs/crowd-wristband-peace.jpg",
    full: "assets/images/full/crowd-wristband-peace.jpg",
    insta: false
  },
  {
    id: "confetti-phone-drop",
    title: "Pluie de Confettis",
    series: "The House",
    cat: "portraits",
    thumb: "assets/images/thumbs/confetti-phone-drop.jpg",
    full: "assets/images/full/confetti-phone-drop.jpg",
    insta: false
  },
  {
    id: "dancefloor-rhythm",
    title: "Chaleur de la Nuit",
    series: "The House",
    cat: "portraits",
    thumb: "assets/images/thumbs/dancefloor-rhythm.jpg",
    full: "assets/images/full/dancefloor-rhythm.jpg",
    insta: true
  },
  {
    id: "portrait-duo-flash",
    title: "Duo Flash Direct",
    series: "The House",
    cat: "portraits",
    thumb: "assets/images/thumbs/portrait-duo-flash.jpg",
    full: "assets/images/full/portrait-duo-flash.jpg",
    insta: true
  }
];

let activeFilter = 'all';
let currentList = [...PHOTOS];
let activeLightboxIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  setupNav();
  setupGallery();
  setupLightbox();
  setupForm();
});

function setupNav() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

function setupGallery() {
  const grid = document.getElementById('galleryGrid');
  const countTag = document.getElementById('photoCount');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function render() {
    if (!grid) return;
    grid.innerHTML = '';

    currentList.forEach((photo, idx) => {
      const card = document.createElement('div');
      card.className = 'gallery-card';
      card.dataset.idx = idx;

      card.innerHTML = `
        <img src="${photo.thumb}" alt="${photo.title}" loading="lazy" />
        <div class="gallery-card-info">
          <div class="card-title">${photo.title}</div>
          <div class="card-meta">${photo.series}</div>
        </div>
      `;

      card.addEventListener('click', () => {
        openLightbox(idx);
      });

      grid.appendChild(card);
    });

    if (countTag) {
      countTag.textContent = `${currentList.length} clichés sélectionnés`;
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      activeFilter = filter;

      if (filter === 'all') {
        currentList = [...PHOTOS];
      } else if (filter === 'instagram') {
        currentList = PHOTOS.filter(p => p.insta);
      } else {
        currentList = PHOTOS.filter(p => p.cat === filter);
      }

      render();
    });
  });

  render();
}

function setupLightbox() {
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');

  if (!modal) return;

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', () => changePhoto(-1));
  nextBtn.addEventListener('click', () => changePhoto(1));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changePhoto(-1);
    if (e.key === 'ArrowRight') changePhoto(1);
  });
}

function openLightbox(index) {
  activeLightboxIndex = index;
  updateLightbox();
  const modal = document.getElementById('lightboxModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function changePhoto(dir) {
  activeLightboxIndex += dir;
  if (activeLightboxIndex < 0) {
    activeLightboxIndex = currentList.length - 1;
  } else if (activeLightboxIndex >= currentList.length) {
    activeLightboxIndex = 0;
  }
  updateLightbox();
}

function updateLightbox() {
  const photo = currentList[activeLightboxIndex];
  if (!photo) return;

  const img = document.getElementById('lightboxImg');
  const title = document.getElementById('lightboxTitle');
  const indexTag = document.getElementById('lightboxIndex');

  img.src = photo.full;
  title.textContent = `${photo.title} (${photo.series})`;
  indexTag.textContent = `${String(activeLightboxIndex + 1).padStart(2, '0')} / ${String(currentList.length).padStart(2, '0')}`;
}

function setupForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('formName').value;
    const phone = document.getElementById('formPhone').value;
    const date = document.getElementById('formDate').value;
    const formula = document.getElementById('formFormula').value;
    const msg = document.getElementById('formMsg').value;

    const formulaLabels = {
      '90': 'Soirée & Set DJ (~2h-3h) — 90€',
      '160': 'Nuit Complète (4h-6h) — 160€',
      '35': 'Tarif Horaire — 35€/h',
      'autre': 'Sur-mesure'
    };

    const text = `Salut Matteo !\nJe te contacte pour une réservation photo :\n- Nom/Event : ${name}\n- Date : ${date}\n- Mon contact : ${phone}\n- Formule : ${formulaLabels[formula] || formula}\n\nDétails :\n${msg}`;

    // Propose WhatsApp first as it's the fastest
    const whatsappUrl = `https://wa.me/3248591780?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  });
}
