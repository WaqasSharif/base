

function initSwiper() {
    $(document).find('.sec-testimonails').each(function (index) {
      $(this).addClass('testimonials-slider'+index);
      var $slider = $(this);
      $slider.find('.swiper-button-next').addClass('right'+index);
      $slider.find('.swiper-button-prev').addClass('left'+index);
      $slider.find('.swiper-pagination').addClass('testimonials-'+index);
  
      if($slider.hasClass('single-tile')) {
        var $testimonialsSlider = new Swiper('.testimonials-slider'+index+' .swiper-container', {
          slidesPerView: 1,
          navigation: {
            nextEl: '.swiper-button-next.right'+index,
            prevEl: '.swiper-button-prev.left'+index,
          },
          pagination: {
            el: ".swiper-pagination.testimonials-"+index,
            clickable: true
          },
        });
      } else {
        var $testimonialsSlider = new Swiper('.testimonials-slider'+index+' .swiper-container', {
          navigation: {
            nextEl: '.swiper-button-next.right'+index,
            prevEl: '.swiper-button-prev.left'+index,
          },
          pagination: {
            el: ".swiper-pagination.testimonials-"+index,
            clickable: true
          },
          slidesPerView: 1.2,
          breakpoints: {
            540: {
                slidesPerView: 1.5
            },
            768: {
                slidesPerView: 2.5
            },
            1024: {
                slidesPerView: 3
            }
          }
        });
      }
      
    });
  }

$(document).ready(function() {

    // init swiper
    initSwiper();


}); 