// =====================
// JS BASE – TUTAFEST
// Estructura general sin detalles visuales
// =====================

// Utilidad: selector rápido
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// =====================
// 1. CONFIRMACIÓN DE ASISTENCIA
// =====================
const confirmBtn = $('.confirm-btn');

if (confirmBtn) {
  confirmBtn.addEventListener('click', () => {
    // Placeholder: luego se reemplaza por WhatsApp / Form / Modal
    alert('Función de confirmación de asistencia');
  });
}

// =====================
// 2. GALERÍA / CARRUSEL
// =====================
const carouselTrack = $('.carousel-track');
const dotsContainer = $('.carousel-dots');
let currentIndex = 0;

// Generar dots dinámicamente según la cantidad de imágenes
function generateDots() {
  if (!carouselTrack || !dotsContainer) return;
  
  const items = carouselTrack.children;
  dotsContainer.innerHTML = '';
  
  for (let i = 0; i < items.length; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot';
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateCarousel(i);
    });
    dotsContainer.appendChild(dot);
  }
}

function updateCarousel(index) {
  if (!carouselTrack) return;

  const itemWidth = carouselTrack.children[0].offsetWidth + 16;
  carouselTrack.scrollTo({
    left: itemWidth * index,
    behavior: 'smooth'
  });

  const dots = $$('.dot');
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
}

// Auto-avance cada 3 segundos
function startAutoSlide() {
  setInterval(() => {
    const items = carouselTrack.children;
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel(currentIndex);
  }, 3000);
}

// Inicializar carrusel
generateDots();
startAutoSlide();

// =====================
// 3. BOTONES TIPS / REGALOS (BASE)
// =====================
$$('.tip-card button').forEach(button => {
  button.addEventListener('click', () => {
    // Placeholder modal / info
    alert('Información adicional');
  });
});

const giftBtn = $('.gifts button');
if (giftBtn) {
  giftBtn.addEventListener('click', () => {
    alert('Información de regalos');
  });
}

// =====================
// 4. COMPARTIR FOTOS
// =====================
const shareBtn = $('.share button');
if (shareBtn) {
  shareBtn.addEventListener('click', () => {
    // Placeholder link externo
    alert('Redirección a Google Fotos');
  });
}
class TimelineController {
      constructor() {
        this.columns = document.querySelectorAll('.timeline-column');
        this.observer = null;
        this.init();
      }

      init() {
        this.setupIntersectionObserver();
      }

      setupIntersectionObserver() {
        const observerOptions = {
          root: null,
          rootMargin: '0px 0px -100px 0px',
          threshold: 0.1
        };

        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.animateColumn(entry.target);
              this.observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        this.columns.forEach(column => {
          this.observer.observe(column);
        });
      }

      animateColumn(column) {
        // Animar path SVG de la columna
        const path = column.querySelector('.path-line');
        if (path) {
          const length = path.getTotalLength();
          path.style.setProperty('--path-length', length);
          path.classList.add('path-animated');
        }

        // Animar nodos con delays
        const nodes = column.querySelectorAll('.timeline-node');
        nodes.forEach((node, index) => {
          setTimeout(() => {
            node.classList.add('visible');
          }, index * 150);
        });
      }
    }

    // Inicializar controller
    const timelineController = new TimelineController();

  