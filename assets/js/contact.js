// Copiar e-mail — Stage 06.
(function () {
  "use strict";
  document.querySelectorAll("[data-copy-email]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var email = btn.getAttribute("data-copy-email");
      var done = function () {
        var original = btn.textContent.trim();
        btn.textContent = btn.getAttribute("data-copied-label") || "Copiado!";
        btn.classList.add("is-copied");
        setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove("is-copied");
        }, 2000);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done).catch(function () {});
      }
    });
  });
})();
