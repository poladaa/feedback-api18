"use strict";
const container = document.querySelector(".container");
const ratingEls = document.querySelectorAll(".rating");
const btn = document.querySelector(".btn");
////
let selectedRating = "";

ratingEls.forEach((rating) => {
  rating.addEventListener("click", (event) => {
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    // event.target.classList.add("active");
    // event.target.parentNode.classList.add("active");
    rating.classList.add("active");
  });
});

btn.addEventListener("click", () => {
  if (selectedRating !== "") {
    container.innerHTML = `
    <strong>Thank you!</strong>
    <br>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <br>
    <p>მე მიყვარს სალი</p>
    `;
  }
});

function removeActive() {
  ratingEls.forEach((rating) => {
    rating.classList.remove("active");
  });
}
