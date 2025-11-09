// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (toggle && navList) {
  toggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
}

// Highlight active nav link
const current = location.pathname.split("/").pop();
document.querySelectorAll(".nav-list a").forEach(a => {
  if (a.getAttribute("href") === current) {
    a.classList.add("active");
  }
});

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
