"use strict";













$(document).ready(function() {

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
      item.querySelector('.back-to-menu').addEventListener('click', function (e) {
        e.preventDefault();
        item.classList.remove('active');
      });
    });
  }
  
}); 

//lightgallery lightbox
$(document).ready(function() {
  $(".lightgallery").lightGallery({
    thumbnail:true,
    pager: true,
    speed: 500,
        
  });
});