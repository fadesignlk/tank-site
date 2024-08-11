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


  const currentYear = new Date().getFullYear();
    
  // Set the year to the HTML tag with id 'year'
  document.getElementById('copyright-year').textContent = currentYear;


  //Scroll to Top
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {
      scrollFunction();
  };

  function scrollFunction() {
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
          scrollToTopBtn.style.display = "block";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  }

  // When the user clicks on the button, scroll to the top of the document
  scrollToTopBtn.addEventListener("click", function() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });