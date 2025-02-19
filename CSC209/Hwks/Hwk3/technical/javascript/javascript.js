/* let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
*/
const images = [
    "image1.jpeg",
    "image2.webp", 
    "triumphant-success-reaching-new-heights-of-achievement-ai-generative-photo.jpg"
];

let slideIndex = 0;

// Function to generate slideshow <div> elements
function generateSlideshow() {
    const container = document.getElementById('slideshowContainer');
    images.forEach((image, index) => {
        const div = document.createElement('div');
        div.classList.add('mySlides');
        if (index === slideIndex) {
            div.classList.add('active');
        }
        div.innerHTML = `<img src="${image}" alt="Slide ${index + 1}" style="width:100%; height:100%;">`;
        container.appendChild(div);
    });
}

// Function to change slides
function changeSlide(n) {
    const slides = document.querySelectorAll('.mySlides');
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
}

// Initialize the slideshow
generateSlideshow();