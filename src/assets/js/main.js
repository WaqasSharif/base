"use strict";









function initSwiper() {
  $(document).find('.sec-testimonails').each(function (index) {
    $(this).addClass('slider'+index);
    var $slider = $(this);
    $slider.find('.swiper-button-next').addClass('right'+index);
    $slider.find('.swiper-button-prev').addClass('left'+index);
    $slider.find('.swiper-pagination').addClass('pagination-'+index);

    if($slider.hasClass('single-tile')) {
      var $testimonialsSlider = new Swiper('.slider'+index+' .swiper-container', {
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next.right'+index,
          prevEl: '.swiper-button-prev.left'+index,
        },
        pagination: {
          el: ".swiper-pagination.pagination-"+index,
          clickable: true
        },
      });
    } else {
      var $testimonialsSlider = new Swiper('.slider'+index+' .swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next.right'+index,
          prevEl: '.swiper-button-prev.left'+index,
        },
        pagination: {
          el: ".swiper-pagination.pagination-"+index,
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



  


(function($) { "use strict";


//Menu On Hover
  
$('body').on('mouseenter mouseleave','.main-nav-links > ul > li',function(e){
    if ($(window).width() > 992) {
      var _d=$(e.target).closest('.main-nav-links > ul > li');
      _d.addClass('show');
      setTimeout(function(){
      _d[_d.is(':hover')?'addClass':'removeClass']('show');
      },1);
    }
});	
  

})(jQuery); 






 
  


var navExpand = [].slice.call(document.querySelectorAll('.mobile-menu .expandable'));

if (window.innerWidth < 991) {
  navExpand.forEach(function (item) {
    item.querySelector('.mobile-menu .expandable > a').addEventListener('click', function (e) {
      e.preventDefault();
      item.classList.add('active');
    });
    item.querySelector('.back-to-menu').addEventListener('click', function () {
      item.classList.remove('active');
    });
  });
}
  
}); 

//lightgallery lightbox
$(document).ready(function() {
  $("#lightgallery").lightGallery({
    thumbnail:true,
    pager: true,
    speed: 500,
        
  });
});