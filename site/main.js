// Bouton de thème : bascule clair/sombre et mémorise le choix.
// Sans JavaScript, le site suit simplement le thème du système.

const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function currentTheme() {
  return root.dataset.theme || (systemDark.matches ? "dark" : "light");
}

function updateLabel() {
  toggle.setAttribute(
    "aria-label",
    currentTheme() === "dark" ? "Passer au thème clair" : "Passer au thème sombre",
  );
}

if (toggle) {
  toggle.hidden = false;
  updateLabel();

  toggle.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    updateLabel();
  });

  systemDark.addEventListener("change", updateLabel);
}
