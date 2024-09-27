let currentSlide = 0;

function moveSlide(step) {
    const slider = document.getElementById('slider');
    const totalSlides = slider.children.length;

    currentSlide += step;

    // Loop to the first or last slide when necessary
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // Move the slider horizontally
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
 function startSlideShow(){
 slideInterval =setInterval(() =>{
    moveSlide(1);
 },6000);
 }


 
 function stopSlideShow(){
    clearInterval(slideInterval);
 }

 startSlideShow();


 const slideContainer = document.querySelector('.slider-container');

 slideContainer.addEventListener('mouseover', stopSlideShow);
 slideContainer.addEventListener('mouseleave', startSlideShow);




 