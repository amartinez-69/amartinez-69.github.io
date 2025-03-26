let slideIndex = 1;

let images = ["files/image1.jpeg", "files/image2.webp", "files/triumphant-success-reaching-new-heights-of-achievement-ai-generative-photo.jpg"];

let captions = ['This is me choosing the images for this assignment.', 'This is me eating dinner while doing this assignment.', 'This will be me when I finish this assignment'];

function loadSlides() {
    let slideshowContainer = document.getElementById("slideshow");

    for (let i = 0; i < images.length; i++) {
        let slideDiv = document.createElement("div");
        slideDiv.className = "mySlides";

        let slideNum = document.createElement("div");
        slideNum.className = 'numberText';
        slideNum.textContent = `${i + 1} / ${images.length}`;

        let img = document.createElement("img");
        img.src = images[i];
        img.style = "width:100%"
        img.alt = "Slide " + (i + 1);

        let caption = document.createElement("div");
        caption.className = 'text';
        caption.textContent = captions[i];

        slideDiv.appendChild(caption);
        slideDiv.appendChild(img);
        slideDiv.appendChild(slideNum);
        slideshowContainer.appendChild(slideDiv);
    }
  }


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

loadSlides()
showSlides(slideIndex);