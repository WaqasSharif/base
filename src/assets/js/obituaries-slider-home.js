"use strict";



if (window.innerWidth >992) {
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
    
    
      var obituariesSliderVar2 = new Swiper('.obituaries-slider.obituaries-slider-home-2 .swiper-container', {
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
    
    
      var obituariesSliderVar3 = new Swiper('.obituaries-slider.obituaries-slider-home-3 .swiper-container', {
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
    
      var obituariesSliderVar4 = new Swiper('.obituaries-slider.has-slider.obituaries-slider-home-4 .swiper-container', {
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
}



