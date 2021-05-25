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

// mobile menu click and back
var navExpand = [].slice.call(document.querySelectorAll('.mobile-menu .expandable'));
if (window.innerWidth < 991) {
  navExpand.forEach(function (item) {
    item.querySelector('.mobile-menu .expandable > a').addEventListener('click', function (e) {
      e.preventDefault();
      item.classList.add('active');
    });
    item.querySelector('.back-to-menu').addEventListener('click', function (e) {
      e.preventDefault();
      item.classList.remove('active');
    });
  });
}


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


