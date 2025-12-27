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
// CARRUSEL MEJORADO
// =====================

class CarouselController {
  constructor() {
    this.carouselTrack = document.querySelector('.carousel-track');
    this.dots = document.querySelectorAll('.carousel-dots .dot');
    this.currentIndex = 0;
    this.autoSlideInterval = null;
    this.isTransitioning = false;

    // Validar que existan elementos
    if (!this.carouselTrack || this.dots.length === 0) {
      console.warn('Carousel: Elements not found');
      return;
    }

    this.init();
  }

  init() {
    this.setupDotListeners();
    this.setupScrollListener();
    this.startAutoSlide();
    window.addEventListener('resize', () => this.handleResize());
  }

  setupDotListeners() {
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        this.goToSlide(index);
      });
      dot.style.cursor = 'pointer';
    });
  }

  setupScrollListener() {
    let scrollTimeout;
    this.carouselTrack.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        this.updateActiveDot();
      }, 100);
    });
  }

  goToSlide(index) {
    if (!this.carouselTrack || this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentIndex = index;

    const itemWidth = this.carouselTrack.children[0].offsetWidth;
    const gap = 16;
    const scrollPosition = index * (itemWidth + gap);

    this.carouselTrack.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });

    this.updateDots();

    setTimeout(() => {
      this.isTransitioning = false;
    }, 600);
  }

  updateDots() {
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });
  }

  updateActiveDot() {
    if (!this.carouselTrack || this.dots.length === 0) return;

    const itemWidth = this.carouselTrack.children[0]?.offsetWidth;
    if (!itemWidth) return;

    const gap = 16;
    const scrollLeft = this.carouselTrack.scrollLeft;
    const index = Math.round(scrollLeft / (itemWidth + gap));
    const clampedIndex = Math.max(0, Math.min(index, this.dots.length - 1));

    if (clampedIndex !== this.currentIndex) {
      this.currentIndex = clampedIndex;
      this.updateDots();
    }
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      if (this.dots.length > 0) {
        const nextIndex = (this.currentIndex + 1) % this.dots.length;
        this.goToSlide(nextIndex);
      }
    }, 3000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  restartAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  handleResize() {
    this.updateActiveDot();
  }
}

// Inicializar cuando está listo
document.addEventListener('DOMContentLoaded', () => {
  const carousel = new CarouselController();
});


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

  