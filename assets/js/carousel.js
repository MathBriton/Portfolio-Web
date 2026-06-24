// Carrossel de projetos — Stage 04.
// Sem dependências. Usa scroll nativo + scroll-snap (toque/teclado/mouse),
// botões de navegação e dots. Respeita prefers-reduced-motion.
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initCarousel(root) {
    var viewport = root.querySelector("[data-carousel-viewport]");
    var track = root.querySelector("[data-carousel-track]");
    var prevBtn = root.querySelector("[data-carousel-prev]");
    var nextBtn = root.querySelector("[data-carousel-next]");
    var dotsWrap = root.querySelector("[data-carousel-dots]");
    if (!viewport || !track) return;

    var slides = Array.prototype.slice.call(track.children);
    if (!slides.length) return;

    var behavior = reduceMotion ? "auto" : "smooth";

    function slideStep() {
      // Largura de um slide + gap.
      var first = slides[0];
      var styles = window.getComputedStyle(track);
      var gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
      return first.getBoundingClientRect().width + gap;
    }

    function currentIndex() {
      return Math.round(viewport.scrollLeft / slideStep());
    }

    function scrollToIndex(i) {
      var max = slides.length - 1;
      var idx = Math.max(0, Math.min(max, i));
      viewport.scrollTo({ left: idx * slideStep(), behavior: behavior });
    }

    // ----- Dots -----
    var dots = [];
    if (dotsWrap) {
      slides.forEach(function (_, i) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "carousel__dot";
        b.setAttribute("aria-label", "Ir para o projeto " + (i + 1));
        b.addEventListener("click", function () { scrollToIndex(i); });
        dotsWrap.appendChild(b);
        dots.push(b);
      });
    }

    function updateUI() {
      var idx = currentIndex();
      dots.forEach(function (d, i) {
        d.classList.toggle("is-active", i === idx);
      });
      if (prevBtn) prevBtn.disabled = idx <= 0;
      if (nextBtn) nextBtn.disabled = idx >= slides.length - 1;
    }

    // ----- Botões -----
    if (prevBtn) prevBtn.addEventListener("click", function () { scrollToIndex(currentIndex() - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { scrollToIndex(currentIndex() + 1); });

    // ----- Teclado (com o viewport focado) -----
    viewport.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); scrollToIndex(currentIndex() + 1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); scrollToIndex(currentIndex() - 1); }
    });

    // ----- Sincroniza UI no scroll (toque/mouse) -----
    var ticking = false;
    viewport.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () { updateUI(); ticking = false; });
    }, { passive: true });

    window.addEventListener("resize", updateUI);
    updateUI();
  }

  function boot() {
    document.querySelectorAll("[data-carousel]").forEach(initCarousel);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
