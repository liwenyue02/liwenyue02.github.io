/* ==========================================================================
   Portfolio CIMV page — interactive features
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- Flip cards: click toggles .is-flipped ---------- */
  /* Per the breakpoint-contract rule: click is the SOLE persistent
     driver; CSS hover on desktop only adds a light tilt (no rotation).
     This avoids the CSS-hover vs JS-click double-trigger race that
     appeared in earlier BFM-Zero-style implementations on narrow widths. */
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".pm-flip").forEach(function (card) {
      card.addEventListener("click", function () {
        card.classList.toggle("is-flipped");
      });
      card.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          card.classList.toggle("is-flipped");
        }
      });
    });

    /* ---------- Hover-zoom colored blocks: click locks zoom on mobile ---------- */
    document.querySelectorAll(".pm-fb").forEach(function (block) {
      block.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 900px)").matches) {
          document.querySelectorAll(".pm-fb.is-zoomed").forEach(function (b) {
            if (b !== block) b.classList.remove("is-zoomed");
          });
          block.classList.toggle("is-zoomed");
        }
      });
    });

    /* ---------- Tabs: showTab(id) ---------- */
    function showTab(id, tabsRoot) {
      if (!tabsRoot) {
        // Walk up to the nearest pm-tabs ancestor
        var btn = document.querySelector('.pm-tab-btn[data-tab="' + id + '"]');
        if (!btn) return;
        tabsRoot = btn.closest(".pm-tabs");
      }
      if (!tabsRoot) return;
      tabsRoot.querySelectorAll(".pm-tab-btn").forEach(function (b) {
        b.classList.toggle("is-active", b.getAttribute("data-tab") === id);
      });
      tabsRoot.querySelectorAll(".pm-tab-panel").forEach(function (p) {
        p.classList.toggle("is-active", p.getAttribute("data-panel") === id);
      });
    }
    window.showTab = showTab;

    // Wire buttons via onclick in HTML too, but also add data-tab version
    document.querySelectorAll(".pm-tab-btn[data-tab]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        showTab(btn.getAttribute("data-tab"), btn.closest(".pm-tabs"));
      });
    });
  });
})();
