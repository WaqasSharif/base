"use strict";






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
    if (scroll >= 40) {
      sticky.addClass('fixed');
      $('body').addClass('menu-fixed');
    } else {
      sticky.removeClass('fixed');
      $('body').removeClass('menu-fixed');
    }
  });
}())



$(document).ready(function() {
  // get window inner height and apply to hero-banner
  var windowHeight = window.innerHeight;
  var heroBanner = $('.dynamic-height');
  heroBanner.css('height', windowHeight);
  heroBanner.find('.cover img').css('height', windowHeight);

  


(function($) { "use strict";

$(function() {
  var header = $(".start-style");
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
  
    if (scroll >= 10) {
      header.removeClass('start-style').addClass("scroll-on");
    } else {
      header.removeClass("scroll-on").addClass('start-style');
    }
  });
});		
  
//Animation

$(document).ready(function() {
  $('body.hero-anime').removeClass('hero-anime');
});

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


  var obituariesSliderVar1 = new Swiper('.obituaries-slider.var-1 .swiper-container', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.slider-var-1-next',
      prevEl: '.slider-var-1-prev',
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



  // hover on menu add class to handle backdrop
  // $('.menu-section-desktop  .main-nav-links ul  li').mouseover(function (e) {
  //   $(this).addClass('active');
  // });
  // $('.menu-section-desktop  .main-nav-links ul  li').mouseleave(function (e) {
  //   $(this).removeClass('active');
  // });

  // $('.menu-section-desktop  .main-nav-links ul  li').on("click",function(){  
  //   $(this).addClass("active");
  //  });


  // $(".navbar-hide").on("click",function(){ 
  //     $(".navbar-toggle").removeClass("active")
  //  $(".navbar-collap").removeClass("active");
  // });

 
  
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




  var navExpand = [].slice.call(document.querySelectorAll('.expandable'));

  if ( window.innerWidth < 991 ) {
    navExpand.forEach(function(item) {
      item.querySelector('.mobile-menu .expandable > a').addEventListener('click', function(e) {
        e.preventDefault();
        item.classList.add('active')
      });
      item.querySelector('.back-to-menu').addEventListener('click', function() {item.classList.remove('active')});
    });
  }
  
}); 
