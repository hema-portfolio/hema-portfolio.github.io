// Preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

particlesJS.load('hero-particles', 'particles.json', function () {
    console.log('particles.json configuration loaded successfully');
});
particlesJS.load('skills-particles', 'particles.json', function () {
    console.log('Skills particles loaded!');
});
// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});