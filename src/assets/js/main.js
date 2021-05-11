"use strict";






// put the 'menu-fixed' class on body while scrolling
(function(){
  var lastScroll = parseInt(localStorage.getItem('position', scroll));
  var sticky = $('.stand-alone-menu');
  var scroll = $(window).scrollTop();
  if (lastScroll) {
      sticky.addClass('fixed');
      $('body').addClass('menu-fixed');
  }
  $(window).scroll(function () {
    scroll = $(window).scrollTop();
    localStorage.setItem('position', scroll);
    if (scroll >= tobarHeight) {
      sticky.addClass('fixed');
      $('body').addClass('menu-fixed');
    } else {
      sticky.removeClass('fixed');
      $('body').removeClass('menu-fixed');
    }
  });

  // check if topbar has sticky class, if yes make it sticky
  var topbarSticky = $('body').find('.top-bar-section').hasClass('sticky');
  var tobarHeight = $('.top-bar-section').outerHeight() || 10;
  if(topbarSticky) {
    $('body').find('.menu-section-desktop').css('top', menuHeight+'px');
  }

}());

(function(){
  
}());


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

  // get window inner height and apply to hero-banner
  var windowHeight = window.innerHeight;
  var heroBanner = $('.dynamic-height');
  heroBanner.css('height', windowHeight);
  heroBanner.find('.cover img').css('height', windowHeight);

  


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



  var sliderSwiper = new Swiper('.hero-banner.with-slider .swiper-container', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


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

 
  
$('.hamburger').on('click', function(e){
  e.preventDefault();
  $(this).hide();
  $('.mobile-menu').addClass('active');
  $('body').addClass('freeze');
});
$('.dismiss').on('click', function(e){
  e.preventDefault();
  $('.mobile-menu').removeClass('active');
  $('.expandable').removeClass('active');
  $('body').removeClass('freeze');
  $('.hamburger').show();
})

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
