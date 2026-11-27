"use strict";
(() => {
  const cave = document.querySelector(".cave-background");
  if (!cave) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let pending = false;
  function update() {
    cave.style.transform = reducedMotion.matches ? "none" : `translateY(${-window.scrollY * 0.3}px)`;
    pending = false;
  }
  window.addEventListener("scroll", () => {
    if (!pending) { pending = true; window.requestAnimationFrame(update); }
  }, { passive: true });
  reducedMotion.addEventListener("change", update);
  update();
})();
