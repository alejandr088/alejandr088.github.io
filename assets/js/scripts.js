const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isExpanded);
  menu.classList.toggle('open');
});

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.remove('bg-black/40', 'backdrop-blur-md');
    navbar.classList.add('bg-black', 'shadow-lg');
  } else {
    navbar.classList.remove('bg-black', 'shadow-lg');
    navbar.classList.add('bg-black/40', 'backdrop-blur-md');
  }
});
