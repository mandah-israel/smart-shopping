const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const bar = document.querySelector("#bar");
const navbar = document.querySelector("#navbar");
const times = document.querySelector("#times");

if (bar) {
  bar.addEventListener("click", () => {
    navbar.classList.add("active");
    // bar.
  });
}

if (times) {
  times.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}
