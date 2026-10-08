import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';

Alpine.plugin(collapse);
(window as unknown as { Alpine: typeof Alpine }).Alpine = Alpine;
Alpine.start();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Carrossel de depoimentos: carrega só quando a seção existe
const carousel = document.querySelector<HTMLElement>('[data-embla]');
if (carousel) {
  import('./testimonials').then(({ initTestimonials }) => initTestimonials(carousel, reduceMotion));
}

// Navbar ganha fundo depois de sair do topo (funciona com ou sem animações)
const nav = document.querySelector<HTMLElement>('[data-nav]');
const sentinel = document.querySelector('[data-nav-sentinel]');
if (nav && sentinel) {
  new IntersectionObserver(([entry]) => nav.toggleAttribute('data-scrolled', !entry.isIntersecting)).observe(sentinel);
}

// Botão flutuante do WhatsApp aparece quando o CTA do hero sai da tela
const fab = document.querySelector<HTMLElement>('[data-fab]');
const heroCta = document.querySelector('[data-hero-cta]');
if (fab && heroCta) {
  new IntersectionObserver(([entry]) => {
    const show = !entry.isIntersecting && entry.boundingClientRect.top < 0;
    fab.toggleAttribute('data-show', show);
  }).observe(heroCta);
}

// Movimento: só carrega GSAP/Lenis quando o visitante não pediu menos movimento
if (!reduceMotion) {
  import('./motion').then(({ initMotion }) => initMotion());
}
