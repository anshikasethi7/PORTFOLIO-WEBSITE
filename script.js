document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Year Update
    document.querySelector('.current-year').textContent = new Date().getFullYear();

    // Smooth Scrolling Feature
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    });

    // Navbar Toggle for Smaller Screens
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        const visibility = navLinks.style.display;
        if (visibility === 'block') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'block';
        }
    });
});
