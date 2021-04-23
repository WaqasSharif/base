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

  var sliderSwiper = new Swiper('.swiper-container', {
    slidesPerView: 1.5,
    spaceBetween: 15,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      414: {
        slidesPerView: 2.2
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 3.2
      },
      1440: {
        slidesPerView: 4
      },
      9999: {
        slidesPerView: 4
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
