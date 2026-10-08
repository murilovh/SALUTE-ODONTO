import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const EASE = 'power3.out';

export function initMotion() {
  // Lenis dirigido pelo ticker do GSAP, para o ScrollTrigger ler o mesmo scroll
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  if (import.meta.env.DEV) (window as unknown as { __lenis: Lenis }).__lenis = lenis;

  // Âncoras internas passam pelo Lenis (respeita a altura da navbar)
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector<HTMLElement>(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -72 });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });

  // Títulos: linhas sobem por trás de uma máscara (hierarquia: o título chega primeiro)
  document.fonts.ready.then(() => {
    document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
      const split = SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'pb-[0.08em]' });
      gsap.set(el, { opacity: 1 });
      gsap.from(split.lines, {
        yPercent: 105,
        duration: 1.1,
        stagger: 0.09,
        ease: EASE,
        scrollTrigger: el.hasAttribute('data-split-now') ? undefined : { trigger: el, start: 'top 85%', once: true },
      });
    });
    ScrollTrigger.refresh();
  });

  // Blocos de conteúdo entram em sequência
  ScrollTrigger.batch('[data-reveal]:not([data-split])', {
    start: 'top 88%',
    once: true,
    onEnter: (els) =>
      gsap.fromTo(els, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: EASE }),
  });

  // Parallax leve nas fotos (profundidade, sem distrair)
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((wrap) => {
    const img = wrap.querySelector('img');
    if (!img) return;
    const amount = Number(wrap.dataset.parallax || 8);
    gsap.set(img, { scale: 1 + amount / 50 });
    gsap.fromTo(
      img,
      { yPercent: -amount / 2 },
      {
        yPercent: amount / 2,
        ease: 'none',
        scrollTrigger: { trigger: wrap, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });
}
