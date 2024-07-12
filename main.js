const themeToggle = document.getElementById('theme-toggle');
const backToTopButton = document.getElementById('back-to-top');
const bodyElement = document.body;

themeToggle.addEventListener('click', () => {
    let currentTheme = bodyElement.getAttribute('data-themes-mode');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Add animation class
    bodyElement.classList.add('theme-transition');

    // Update theme mode
    bodyElement.setAttribute('data-themes-mode', newTheme);

    // Update theme-toggle icon
    themeToggle.textContent = currentTheme + '_mode';

    // Remove animation class after a delay
    setTimeout(function() {
        bodyElement.classList.remove('theme-transition')
    }, 100)
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });  // Smooth scroll to top
});