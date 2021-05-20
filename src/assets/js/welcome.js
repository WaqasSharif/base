function initWelcome() {
    $(document).find('.sec-welcome-msg.with-slider').each(function (index) {
      $(this).addClass('slider'+index);
      var $slider = $(this);
      $slider.find('.swiper-pagination').addClass('pagination-'+index);
      var $welcome = new Swiper('.slider'+index+' .swiper-container', {
        pagination: {
          el: ".swiper-pagination.pagination-"+index,
          clickable: true
        },
        slidesPerView: 1,
      });
      
    });
  }

  $(document).ready(function() {

    // init swiper
    initWelcome();
  
}); 