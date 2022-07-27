const nav = document.querySelector("#nav-links"),
  hamburger = document.querySelector("#hamburgers");
let open = false;

window.addEventListener("resize", () => {
  if (window.innerWidth == 1440) {
    nav.style.height = "50%";
    nav.style.opacity = "1";
  } else {
    open = true;
    nav.style.height = "0vh";
    nav.style.opacity = "0";
  }
});

hamburger.addEventListener("click", () => {
  if (!open) {
    nav.style.height = "55vh";
    nav.style.opacity = "1";
  } else {
    nav.style.height = "0vh";
    nav.style.opacity = "0";
  }
  open = !open;
});
