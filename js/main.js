var formEl = document.querySelector(".form");
var inputNum = document.querySelector(".input_number");
var outputNum = document.querySelector(".output_number");
var selectEl = document.querySelector(".select_item");

formEl.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var sumOfNum = inputNum.value * selectEl.value;
  outputNum.textContent = sumOfNum;
});
