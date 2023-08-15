export const scrollToCentre = (href: string) => {
  const el = document.querySelector(href.slice(1));

  if (!el) return;

  el.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
};