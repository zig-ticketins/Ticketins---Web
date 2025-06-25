document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        var topLine = document.getElementById('top-line');
        var middleLine = document.getElementById('middle-line');
        var bottomLine = document.getElementById('bottom-line');
        
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('max-h-0');
            mobileMenu.classList.toggle('max-h-[2000px]');
            mobileMenu.classList.toggle('opacity-0');
            mobileMenu.classList.toggle('opacity-100');
            
            // Toggle hamburger animation
            if (menuToggle.classList.toggle('is-active')) {
                // Transform to X
                topLine.style.transform = 'translateY(3px) rotate(45deg)';
                middleLine.style.opacity = '0';
                bottomLine.style.transform = 'translateY(-6px) rotate(-45deg)';
            } else {
                // Revert to hamburger
                topLine.style.transform = '';
                middleLine.style.opacity = '';
                bottomLine.style.transform = '';
            }
        });

        // Close menu when clicking links
        const mobileLinks = mobileMenu.querySelectorAll('a, button');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('max-h-0', 'opacity-0');
                mobileMenu.classList.remove('max-h-[2000px]', 'opacity-100');
                menuToggle.classList.remove('is-active');
                // Revert hamburger animation
                topLine.style.transform = '';
                middleLine.style.opacity = '';
                bottomLine.style.transform = '';
            });
        });
    }
});