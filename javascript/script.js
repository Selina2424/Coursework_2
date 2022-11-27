let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

let slide1Index = 1;
showSlides1(slide1Index);

// Next/previous controls
function plusSlides(n) {
  showSlides1(slide1Index += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slide1Index = n);
}

function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slide1Index = 1}
  if (n < 1) {slide1Index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide1Index-1].style.display = "block";
  dots[slide1Index-1].className += " active";
}
