
// Hero Slider Auto-Play Logic
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Advance index
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  // Show current slide
  slides[slideIndex - 1].style.display = "block";

  // Change every 4 seconds
  setTimeout(showSlides, 4000);
}

// Background slider for About page
const aboutImages = [
  "images/about1.jpg",
  "images/about2.jpg",
  "images/about3.jpg"
];

let aboutIndex = 0;
const aboutSection = document.querySelector(".about-hero");

if (aboutSection) {
  setInterval(() => {
    aboutSection.style.backgroundImage = `url('${aboutImages[aboutIndex]}')`;
    aboutIndex = (aboutIndex + 1) % aboutImages.length;
  }, 3000);
}
