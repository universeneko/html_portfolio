const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 150;

    document.querySelectorAll('header nav a').forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        link.classList.toggle('active', section.offsetTop <= scrollY && section.offsetTop + section.offsetHeight > scrollY);
    });

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

const revealConfig = {
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
};

ScrollReveal(revealConfig).reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal(revealConfig).reveal('.home-img, .services-container, portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal(revealConfig).reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal(revealConfig).reveal('.home-content p, .about-content', { origin: 'right' });

new Typed('.multiple-text', {
    strings: ['Cantante de música Pop!', 'Compositora', 'Modelo'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
