const header = document.querySelector<HTMLElement>("[data-header]");

function syncHeader() {
  if (!header) return;
  const scrolled = window.scrollY > 24;
  header.classList.toggle("is-scrolled", scrolled);
}

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
