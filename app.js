// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (toggle && navList) {
  toggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
}

// Active nav page highlighting
const currentPage = location.pathname.split("/").pop();
document.querySelectorAll(".nav-list a").forEach(a => {
  if (a.getAttribute("href") === currentPage) {
    a.classList.add("active");
  }
});

// Footer Year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.animationDelay='.1s';
      e.target.classList.add('visible');
    }
  })
},{threshold:0.1});
faders.forEach(f=>observer.observe(f));

// Pricing toggle
const toggleSwitch = document.querySelector(".toggle-switch");
if(toggleSwitch){
  toggleSwitch.addEventListener("click", ()=>{
    toggleSwitch.classList.toggle("active");
    document.querySelectorAll(".price-change").forEach(el=>{
      if(toggleSwitch.classList.contains("active")){
        el.textContent = el.dataset.year;  // yearly
      } else {
        el.textContent = el.dataset.month; // monthly
      }
    });
  });
}

// ORDER POPUP
const openOrder = document.querySelectorAll(".order-btn");
const popup = document.querySelector(".popup-overlay");
const closePopup = document.querySelector(".popup-close");

openOrder.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    popup.style.display="flex";
  });
});
if(closePopup){
  closePopup.addEventListener("click", ()=>{
    popup.style.display="none";
  });
}
