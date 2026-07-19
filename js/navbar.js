// Shared navigation behaviour

const siteHeader = document.querySelector('header');

// Two thresholds, not one — stops the header flickering open/closed near one line
const ENTER_SCROLLED_AT = 60;
const EXIT_SCROLLED_AT = 20;

let isScrolled = false;
let ticking = false;

function updateHeaderState() {
    const y = window.scrollY;

    if (!isScrolled && y > ENTER_SCROLLED_AT) {
        isScrolled = true;
        siteHeader.classList.add('header-scrolled');
    } else if (isScrolled && y < EXIT_SCROLLED_AT) {
        isScrolled = false;
        siteHeader.classList.remove('header-scrolled');
    }

    ticking = false;
}

function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(updateHeaderState);
        ticking = true;
    }
}

if (siteHeader) {
    updateHeaderState();
    window.addEventListener('scroll', onScroll, { passive: true });
}

// Mobile hamburger toggle — shows nav links when .nav-open is added
const navToggle = document.getElementById('navToggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
        const isOpen = mainNav.classList.toggle('nav-open');
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Auto-close the menu if resized past mobile width
    window.addEventListener('resize', function () {
        if (window.innerWidth > 860 && mainNav.classList.contains('nav-open')) {
            mainNav.classList.remove('nav-open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
}
