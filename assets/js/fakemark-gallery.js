(function () {
  var gallery = document.querySelector(".fm-gallery");
  var galleryTabs = document.querySelectorAll(".fm-tab[data-filter]");

  if (gallery && galleryTabs.length) {
    galleryTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var filter = tab.getAttribute("data-filter");
        galleryTabs.forEach(function (item) {
          var active = item === tab;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-selected", active ? "true" : "false");
        });
        if (filter === "all") {
          gallery.removeAttribute("data-hl");
        } else {
          gallery.setAttribute("data-hl", filter);
        }
      });
    });
  }

  var tableTabs = document.querySelectorAll(".fm-tab[data-sheet]");
  var sheets = document.querySelectorAll(".fm-tsheet");

  if (tableTabs.length && sheets.length) {
    tableTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var name = tab.getAttribute("data-sheet");
        tableTabs.forEach(function (item) {
          var active = item === tab;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-selected", active ? "true" : "false");
        });
        sheets.forEach(function (sheet) {
          sheet.hidden = sheet.getAttribute("data-sheet") !== name;
        });
      });
    });
  }
})();
