
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
 
$('.hamburger').on('click', function(){
  $(this).toggleClass('is-active');
  $(this).closest('.menu-section').toggleClass('mobile-section-visible');
  $('body').toggleClass('freeze');
})

// register the event handlers
$(document).ready(function () {
 
  

});