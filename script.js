import { animate, stagger, splitText } from 'https://esm.sh/animejs'; /* ANIME.JS */

document.addEventListener("DOMContentLoaded", () => {

  /* NAVIGATION TOGGLE FOR MOBILE */
  const hamburger = document.getElementById("hamburger");
  const header = document.querySelector("header");

  if (hamburger && header) {
    hamburger.addEventListener("click", () => {
      header.classList.toggle("open");
    });
  }

  /* MODAL (CERT PAGE) */
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");

  if (modal && modalImg) {
    window.openModal = function (src) {
      modal.classList.remove("hidden");
      modalImg.src = src;
    };

    modal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }

  /* TEXT ANIMATION */
  const h1 = document.querySelector("h1");

  if (h1) {
    const { chars } = splitText(h1, { words: false, chars: true });

    animate(chars, {
      y: [
        { to: '-2.75rem', ease: 'outExpo', duration: 600 },
        { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
      ],
      rotate: {
        from: '-1turn'
      },
      delay: stagger(50),
      ease: 'inOutCirc',
    });
  }

});