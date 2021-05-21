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
  



$( document ).ready(function() {

  $('.hamburger').on('click', function (e) {
    e.preventDefault();
    $(this).hide();
    $('.mobile-menu').addClass('active');
    $('body').addClass('freeze');
  });
  $('.dismiss').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').removeClass('active');
    $('.expandable').removeClass('active');
    $('body').removeClass('freeze');
    $('.hamburger').show();
  });

  
  $('.mega-hamburger').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('is-active'); 
    $('.menu-expanded-view').toggleClass('active');
    $('body').toggleClass('freeze');
  });
});


