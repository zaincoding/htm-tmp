var topButton = document.querySelector('.top');
window.onscroll = function () {
    if (topButton) {
        if (window.scrollY > 100) {
            topButton.style.display = "block";
        }
        else {
            topButton.style.display = "none";
        }
    }
};
