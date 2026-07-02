// ==============================
// ACTIVE MENU LINK ON SCROLL
// ==============================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveMenuLink() {
  let currentSectionId = 'home';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 130;

    if (window.scrollY >= sectionTop) {
      currentSectionId = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');

    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveMenuLink);
window.addEventListener('load', setActiveMenuLink);

// ==============================
// SCROLL TO TOP BUTTON
// ==============================
const scrollTopButton = document.querySelector('.scroll-top');

function toggleScrollTopButton() {
  if (window.scrollY > 520) {
    scrollTopButton.classList.add('visible');
  } else {
    scrollTopButton.classList.remove('visible');
  }
}

if (scrollTopButton) {
  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

window.addEventListener('scroll', toggleScrollTopButton);
window.addEventListener('load', toggleScrollTopButton);
