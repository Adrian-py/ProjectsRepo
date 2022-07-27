// Getting each DOM element
const bill = document.querySelector("#bill-form"),
  tip = document.querySelectorAll(".splitter-form__inputs__percent__input"),
  people = document.querySelector("#people-form"),
  form = document.querySelector(".splitter-form"),
  resultTip = document.querySelector("#splitter-form__results__tip__num"),
  resultTotal = document.querySelector("#splitter-form__results__total__num"),
  errorMessage = document.querySelector(
    ".splitter-form__inputs__people__error"
  ),
  resetButton = document.querySelector("#splitter-form__reset");

// To check whether the percentages are filled and returing the tip percentage
function checkTip() {
  let tipPercentage = -1;
  tip.forEach((input) => {
    if (input.getAttribute("type") == "radio" && input.checked) {
      switch (input.id) {
        case "splitter__radio__five":
          tipPercentage = 5;
          break;
        case "splitter__radio__ten":
          tipPercentage = 10;
          break;
        case "splitter__radio__fifteen":
          tipPercentage = 15;
          break;
        case "splitter__radio__twenty-five":
          tipPercentage = 25;
          break;
        case "splitter__radio__fifty":
          tipPercentage = 50;
          break;
      }
    } else if (input.getAttribute("type") == "number" && input.value != 0) {
      tipPercentage = parseInt(input.value);
    }
  });
  return tipPercentage;
}

// Rounding function
function roundToFixed(number, digits) {
  let decimalPlaces = Math.pow(10, digits);
  return Math.round(number * decimalPlaces) / decimalPlaces;
}

// Displaying the result to the DOM
function showResult(tipResult, totResult) {
  resultTip.innerHTML = "$" + tipResult;
  resultTotal.innerHTML = "$" + totResult;
}

// To uncheck or reset all other buttons if another button is selected
// Also to change the colors of the buttons when pressed
tip.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.getAttribute("type") == "radio")
      e.parentNode.classList.add("active-button");
    else e.parentNode.classList.add("active-button--custom");

    tip.forEach((t) => {
      if (t.id != e.id) {
        if (t.getAttribute("type") == "radio") {
          t.parentNode.classList.remove("active-button");
          t.checked = false;
        } else {
          t.parentNode.classList.remove("active-button--custom");
          t.value = "";
        }
      }
    });
  });
});

// To check if all the fields are filled whenever an input is changed
// This is to enable automatic tip calculation
form.addEventListener("change", () => {
  let tipPercentage = checkTip();
  if (bill.value != 0 && people.value != 0 && tipPercentage != -1) {
    errorMessage.classList.add("disabled");
    resetButton.classList.remove("disabled-button");

    people.style.border = "none";
    let tipResult = (bill.value * tipPercentage) / 100 / people.value,
      totResult = bill.value / people.value + tipResult;
    showResult(roundToFixed(tipResult, 2), roundToFixed(totResult, 2));
  } else {
    resetButton.classList.add("disabled-button");
    if (bill.value && tipPercentage != -1) {
      errorMessage.classList.remove("disabled");
      people.style.border = "1px solid var(--warning)";
    }
  }
});

// Reseting the form
form.addEventListener("reset", () => {
  resetButton.classList.add("disabled-button");
  tip.forEach((t) => {
    if (t.getAttribute("type") == "radio") {
      t.parentNode.classList.remove("active-button");
      t.checked = false;
    } else {
      t.parentNode.classList.remove("active-button--custom");
      t.value = "";
    }
  });
  showResult("0.00", "0.00");
});

showResult("0.00", "0.00");
