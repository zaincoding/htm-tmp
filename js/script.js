document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.getElementById('hamburger'); // Hamburger button
    var navMenu = document.getElementById('nav-menu'); // The menu to be toggled
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('active'); // Toggle the menu visibility
        });
    }
});
