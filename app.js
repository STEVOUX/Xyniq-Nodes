<!-- ===========================
FILE: app.js  (shared)
=========================== -->
// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const list = document.querySelector('.nav-list');
if (toggle && list) {
  toggle.addEventListener('click', () => list.classList.toggle('show'));
}

// Active nav link
const path = location.pathname.replace(/\/+$/, '');
document.querySelectorAll('.nav-list a').forEach(a => {
  const href = a.getAttribute('href').replace(/\/+$/, '');
  if (href === path || (path === '' && href === '/')) a.classList.add('active');
});

// Current year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
