let header = document.querySelector("header");
let menu = document.getElementById("menu-icon");

let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  menu.classList.toggle("fa-bars");
  menu.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-bars");
  menu.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".coming-container", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 55000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    568: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const spinner = document.querySelector(".spinner");
  const loading = document.getElementById("loading");

  if (spinner && loading) {
    setTimeout(() => {
      spinner.classList.add("hidden");
      setTimeout(() => {
        loading.classList.add("hidden");
        document.body.style.overflow = "auto";
        setTimeout(() => {
          loading.remove();
        }, 1000);
      }, 1000);
    }, 500);
  }
});
