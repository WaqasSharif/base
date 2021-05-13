"use strict";









function initSwiper() {
  // plans table slider for CMS modules start
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






  var obituariesSliderVar1 = new Swiper('.obituaries-slider.obituaries-slider-home-1 .swiper-container', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.slider-var-1-next',
      prevEl: '.slider-var-1-prev',
    },
    breakpoints: {
      414: {
        slidesPerView: 1.8
      },
      768: {
        slidesPerView: 3.5
      },
      1024: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 5
      },
      1440: {
        slidesPerView: 6
      },
      9999: {
        slidesPerView: 6
      }
    }
  });


  var obituariesSliderVar1 = new Swiper('.obituaries-slider.obituaries-slider-home-2 .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.slider-var-2-next',
      prevEl: '.slider-var-2-prev',
    },
    breakpoints: {
      414: {
        slidesPerView: 2.5
      },
      768: {
        slidesPerView: 3.5
      },
      1024: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 5
      },
      1440: {
        slidesPerView: 6
      },
      9999: {
        slidesPerView: 6
      }
    }
  });


  var obituariesSliderVar1 = new Swiper('.obituaries-slider.obituaries-slider-home-3 .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.slider-var-3-next',
      prevEl: '.slider-var-3-prev',
    },
    breakpoints: {
      414: {
        slidesPerView: 1.8
      },
      768: {
        slidesPerView: 3.5
      },
      1024: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 5
      },
      1440: {
        slidesPerView: 6
      },
      9999: {
        slidesPerView: 6
      }
    }
  });

  var obituariesSliderVar1 = new Swiper('.obituaries-slider.has-slider.obituaries-slider-home-4 .swiper-container', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.slider-var-4-next',
      prevEl: '.slider-var-4-prev',
    },
    breakpoints: {
      414: {
        slidesPerView: 1.8
      },
      768: {
        slidesPerView: 3.5
      },
      1024: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 5
      },
      1440: {
        slidesPerView: 6
      },
      9999: {
        slidesPerView: 6
      }
    }
  });

 
  


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
