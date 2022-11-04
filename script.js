const evaluation = document.querySelectorAll(".container--rating--rating");
const submit = document.querySelector(".container--button-submit");
const containerTwo = document.querySelector(".container-two")

const ratingValue = document.querySelector(".rating-value")
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

evaluation.forEach((button) => {
   button.addEventListener("click", () => {
      evaluation.forEach(element => {
         element.classList.toggle("container--rating--rating")
         element.classList.remove("active")
      })
      button.classList.toggle("container--rating--rating")
      button.classList.toggle("active")
   })
})

submit.addEventListener("click", () => {
   containerTwo.classList.toggle("container-two-display")
})

one.addEventListener("click", () => {
   ratingValue.textContent = "1";
})
two.addEventListener("click", () => {
   ratingValue.textContent = "2";
})
three.addEventListener("click", () => {
   ratingValue.textContent = "3";
})
four.addEventListener("click", () => {
   ratingValue.textContent = "4";
})
five.addEventListener("click", () => {
   ratingValue.textContent = "5";
})