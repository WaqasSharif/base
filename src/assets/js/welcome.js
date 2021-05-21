function initWelcome() {
    $(document).find('.sec-welcome-msg.with-slider').each(function (index) {
      $(this).addClass('welcome-slider'+index);
      var $slider = $(this);
      $slider.find('.swiper-pagination').addClass('welcome-'+index);
      var $welcome = new Swiper('.welcome-slider'+index+' .swiper-container', {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination.welcome-"+index,
          clickable: true
        },
        
      });
      
    });
  }

  $(document).ready(function() {

    // init swiper
    initWelcome();
  
}); 