import EmblaCarousel from 'embla-carousel';

export function initTestimonials(root: HTMLElement, reduceMotion: boolean) {
  const viewport = root.querySelector<HTMLElement>('[data-embla-viewport]');
  if (!viewport) return;

  const embla = EmblaCarousel(viewport, {
    align: 'start',
    loop: false,
    duration: reduceMotion ? 0 : 28,
  });

  const prev = root.querySelector<HTMLButtonElement>('[data-embla-prev]');
  const next = root.querySelector<HTMLButtonElement>('[data-embla-next]');
  const status = root.querySelector<HTMLElement>('[data-embla-status]');
  const slides = embla.slideNodes();

  const update = () => {
    if (prev) prev.disabled = !embla.canScrollPrev();
    if (next) next.disabled = !embla.canScrollNext();
    const inView = embla.slidesInView();
    slides.forEach((s, i) => s.setAttribute('aria-hidden', String(!inView.includes(i))));
    if (status) status.textContent = `Depoimento ${embla.selectedScrollSnap() + 1} de ${embla.scrollSnapList().length}`;
  };

  prev?.addEventListener('click', () => embla.scrollPrev());
  next?.addEventListener('click', () => embla.scrollNext());
  embla.on('select', update).on('init', update).on('reInit', update).on('slidesInView', update);
  update();
}
