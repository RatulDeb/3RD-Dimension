const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");
const yearLabel = document.querySelector("#current-year");

if (yearLabel) {
  yearLabel.textContent = new Date().getFullYear();
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
      navigation.classList.remove("is-open");
    });
  });
}

const sidebar = document.querySelector("#services-sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebarClose = document.querySelector(".sidebar-close");

function setSidebar(open) {
  if (!sidebar) return;
  sidebar.classList.toggle("is-open", open);
  const layout = document.querySelector(".services-layout");
  if (layout) layout.classList.toggle("sidebar-collapsed", !open);
  if (sidebarToggle) {
    sidebarToggle.setAttribute("aria-expanded", String(open));
    sidebarToggle.setAttribute("aria-label", open ? "Hide services options" : "Show services options");
    sidebarToggle.classList.toggle("is-open", open);
  }
}

if (sidebar && sidebarToggle) {
  sidebarToggle.addEventListener("click", () => {
    setSidebar(!sidebar.classList.contains("is-open"));
  });
}

if (sidebar && sidebarClose) {
  sidebarClose.addEventListener("click", () => {
    setSidebar(false);
  });
}
