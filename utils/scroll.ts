// utils/scroll.ts
let smoothscroll: { polyfill: () => void; };

if (typeof window !== 'undefined') {
  smoothscroll = require('smoothscroll-polyfill');
  smoothscroll.polyfill();
}

export const smoothScroll = (targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
};
