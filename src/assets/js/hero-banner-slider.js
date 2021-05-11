// get window inner height and apply to hero-banner
var windowHeight = window.innerHeight;
var heroBanner = $('.dynamic-height');
heroBanner.css('height', windowHeight);
heroBanner.find('.cover img').css('height', windowHeight);


var sliderSwiper = new Swiper('.hero-banner.with-slider .swiper-container', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });