document.getElementById('menu-button').addEventListener('click', function() {
    
    function toggleNavbar() {
        navbar.classList.toggle('hidden');
        menuIcon.classList.toggle('open');
    }
    const menuButton = document.getElementById('menu-button');const navbar = document.getElementById('navbar');
    const menuIcon = document.getElementById('menu-icon');

    navbar.classList.toggle('hidden');

    function checkScreenSize() {
        if (window.innerWidth <= 767) {
            menuButton.addEventListener('click', toggleNavbar);
        } else {
            menuButton.removeEventListener('click', toggleNavbar);

            navbar.classList.add('hidden');
            menuIcon.classList.remove('open');
        }
    }

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);
});
