// get window inner height and apply to hero-banner
var windowHeight = window.innerHeight;
var heroBanner = $('.dynamic-height');
heroBanner.css('height', windowHeight);
heroBanner.find('.banner-img .cover img').css('height', windowHeight);


var sliderSwiper = new Swiper('.hero-banner.with-slider .swiper-container', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  }); 


  var sliderAuto = new Swiper('.slider-auto .hero-banner.with-slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });