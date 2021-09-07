let caseStudies = new Swiper(".swiper-cs", {
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    prevEl: ".swiper-prev",
    nextEl: ".swiper-next",
  },
});

let testimonials = new Swiper(".swiper-testimonial", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
