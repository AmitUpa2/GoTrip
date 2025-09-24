// navbar
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navButtons = document.querySelector(".nav-buttons");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  navButtons.classList.toggle("show");
});

//Slider
const slider = document.querySelector(".slider");
let slides = document.querySelectorAll(".slide");
const nextbtn = document.getElementById("next");
const prevbtn = document.getElementById("prev");

let index = 1;
let allowTransition = true;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
firstClone.id = "first-clone";
lastClone.id = "last-clone";

slider.appendChild(firstClone);
slider.insertBefore(lastClone, slides[0]);

slides = document.querySelectorAll(".slide");

slider.style.transform = `translateX(-${index * 100}%)`;

function moveToSlide(i) {
  if (!allowTransition) return;
  allowTransition = false;
  index = i;
  slider.style.transition = "transform 1s ease-in-out";
  slider.style.transform = `translateX(-${index * 100}%)`;
}

slider.addEventListener("transitionend", () => {
  if (slides[index].id === "last-clone") {
    slider.style.transition = "none";
    index = slides.length - 2;
    slider.style.transform = `translateX(-${index * 100}%)`;
  } else if (slides[index].id === "first-clone") {
    slider.style.transition = "none";
    index = 1;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }
  allowTransition = true;
});

nextbtn.addEventListener("click", () => moveToSlide(index + 1));
prevbtn.addEventListener("click", () => moveToSlide(index - 1));

setInterval(() => {
  moveToSlide(index + 1);
}, 4000);

// Heart like button toggle
// document.querySelectorAll(".heart-btn").forEach((button) => {
//   button.addEventListener("click", () => {
//     const pressed = button.getAttribute("aria-pressed") === "true";
//     button.setAttribute("aria-pressed", !pressed);
//     button.classList.toggle("liked");
//   });
// });

// const cardsContainer = document.getElementById("cardsContainer");
// const prevBtn = document.getElementById("prevBtn");
// const b = document.getElementById("b");
// const cardWidth = 288;

// // Scroll smooth helper function
// function scrollCards(distance) {
//   cardsContainer.scrollBy({ left: distance, behavior: "smooth" });
// }
// // Navigate left / previous 4 cards width
// prevBtn.addEventListener("click", () => {
//   scrollCards(-cardWidth * 4);
// });
// // Navigate right / next 4 cards width
// b.addEventListener("click", () => {
//   scrollCards(cardWidth * 4);
// });

// // Accessibility: allow arrow keys on the container to scroll cards
// cardsContainer.addEventListener("keydown", (e) => {
//   if (e.key === "ArrowRight") {
//     e.preventDefault();
//     scrollCards(cardWidth);
//   } else if (e.key === "ArrowLeft") {
//     e.preventDefault();
//     scrollCards(-cardWidth);
//   }
// });
