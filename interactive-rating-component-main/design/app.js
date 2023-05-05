"use strict";

// Declaration of variables
const rate1 = document.getElementById("rate-1");
const rate2 = document.getElementById("rate-2");
const rate3 = document.getElementById("rate-3");
const rate4 = document.getElementById("rate-4");
const rate5 = document.getElementById("rate-5");
const submitBtn = document.getElementById("submit-btn");
const selectedRating = document.getElementById("thankU__rating");
const review = document.getElementById("review");
const thankU = document.getElementById("thankU");

const onClick = function () {
  // Toogles the Active class
  if (this.id == "rate-1") {
    rate1.classList.toggle("active");
    rate2.classList.remove("active");
    rate3.classList.remove("active");
    rate4.classList.remove("active");
    rate5.classList.remove("active");
  } else {
    if (this.id == "rate-2") {
      rate1.classList.remove("active");
      rate2.classList.toggle("active");
      rate3.classList.remove("active");
      rate4.classList.remove("active");
      rate5.classList.remove("active");
    } else {
      if (this.id == "rate-3") {
        rate1.classList.remove("active");
        rate2.classList.remove("active");
        rate3.classList.toggle("active");
        rate4.classList.remove("active");
        rate5.classList.remove("active");
      } else {
        if (this.id == "rate-4") {
          rate1.classList.remove("active");
          rate2.classList.remove("active");
          rate3.classList.remove("active");
          rate4.classList.toggle("active");
          rate5.classList.remove("active");
        } else {
          rate1.classList.remove("active");
          rate2.classList.remove("active");
          rate3.classList.remove("active");
          rate4.classList.remove("active");
          rate5.classList.toggle("active");
        }
      }
    }
  }

  //   Modifies the text in the para for Thank You Message
  selectedRating.innerText = "You selected " + this.innerText + " out of 5";
  console.log(selectedRating.innerText);
};

// Assigns the variable onCLick (which is the result of the function) to each of the elements to be executed on click
rate1.onclick = onClick;
rate2.onclick = onClick;
rate3.onclick = onClick;
rate4.onclick = onClick;
rate5.onclick = onClick;

const displayThankU = function () {
  if (selectedRating.innerText === "You need to rate us first!") {
    alert("You need to rate us first!");
  } else {
    review.classList.add("invisible");
    thankU.classList.remove("invisible");
  }
  setTimeout(() => {
    document.location.reload();
  }, 10000);
};

submitBtn.onclick = displayThankU;
