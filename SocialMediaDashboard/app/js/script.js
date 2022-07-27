const toggleButton = document.querySelector("#toggle__button__checkbox");

function turnDark() {
  document.querySelector("body").classList = "dark";
}

function turnLight() {
  document.querySelector("body").classList = "light";
}

toggleButton.addEventListener("click", () => {
  if (toggleButton.checked) {
    turnLight();
  } else {
    turnDark();
  }
});
