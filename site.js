// Theme toggle — reads localStorage, toggles [data-theme] on <html>.
(function () {
  var KEY = "yc-theme";
  var root = document.documentElement;

  function apply(theme) {
    if (theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    var btn = document.querySelector(".theme-toggle");
    if (btn) btn.textContent = theme === "dark" ? "Light" : "Dark";
  }

  var saved = localStorage.getItem(KEY) || "light";
  apply(saved);

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".theme-toggle");
    if (!btn) return;
    var next = (localStorage.getItem(KEY) === "dark") ? "light" : "dark";
    localStorage.setItem(KEY, next);
    apply(next);
  });

  // Mark active nav link based on current pathname / filename.
  document.addEventListener("DOMContentLoaded", function () {
    var path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav__link").forEach(function (a) {
      var href = a.getAttribute("href");
      if (href === path) a.classList.add("is-active");
    });
  });
})();
