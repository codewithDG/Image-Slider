const pre = document.getElementById("prev");
const next = document.getElementById("next");
const sliderContainer = document.querySelector(".slider"); // Select the container for slides
const slides = document.querySelectorAll(".slide");
let counter = 0;

next.addEventListener("click", () => {
    counter++;
    slideImg();
});

pre.addEventListener("click", () => {
    counter--;
    slideImg();
});

const slideImg = () => {
  
    if (counter < 0) {
        counter = 0; // Loop back to the last slide
    } else if (counter >= slides.length) {
        counter = 0; // Loop back to the first slide
    }

    // Apply the transform to move the container
    sliderContainer.style.transform = `translateX(-${counter * 100}%)`;
};
