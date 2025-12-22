const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar-collapse");

hamburger.addEventListener("click", () => {
  console.log(navbar.classList);
  navbar.classList.toggle("active");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, 
  centeredSlides: true,
  spaceBetween: 117,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,        
    disableOnInteraction: false,
  },

  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
  },
});

const swiperEl = document.querySelector('swiper-container')
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
    swiperEl.initialize();