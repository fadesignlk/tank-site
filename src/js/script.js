var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    loop:true,
    mousewheel: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
    320: {
        slidesPerView: 1
    },
    640: {
        slidesPerView: 2
    },
    768: {
        slidesPerView: 3
    },
    1024: {
        slidesPerView: 4
    },
}
  });


  var swiper = new Swiper(".swiper-testimonial", {
    slidesPerView: 1,
    mousewheel: true,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        }
    }
  });