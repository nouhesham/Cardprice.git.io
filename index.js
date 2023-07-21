"strict";
const image = document.querySelector(".image-1");

var x = window.matchMedia("(max-width: 900px)");

window.addEventListener("resize", (event) => {
  if (x.matches) {
    image.src = "./images/image-product-mobile.jpg";
    image.alt = "desktop";
  } else {
    image.src = "./images/image-product-desktop.jpg";
  }
});
