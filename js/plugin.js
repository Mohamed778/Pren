$(document).ready(function(){
  'use strict';  
  var leftArrow=$(".fa-chevron-left"),
    rightArrow=$(".fa-chevron-right");
function slide(){
  "use strict";
  $('.item:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
  $('.item:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
  }
  slide();
  $('#events .fa-fw').click(function(){
    "use strict";
    if($(this).hasClass('fa-chevron-right'))
    {
       $('.adverts .active').fadeOut(100,function(){
      $(this).removeClass('active').next('.item').addClass('active').fadeIn();
        slide();
    });
  }else {
    $('.adverts .active').fadeOut(100,function(){
    $(this).removeClass('active').prev('.item').addClass('active').fadeIn();
     slide();
     });
  }
  });
$('#news .item').click(function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $(this).find('h4 .fa-fw').removeClass('fa-minus').addClass('fa-plus');
    $(this).find('.more').fadeOut();
    
  }else{
    $(this).addClass('active').siblings().removeClass('active');
    $(this).siblings().find('.more').hide();
    $(this).siblings().find('h4 .fa-fw').removeClass('fa-minus').addClass('fa-plus');
    $(this).find('h4 .fa-fw').removeClass('fa-plus').addClass('fa-minus');
    $(this).find('.more').fadeIn();
    
  }
});
$('.fa-bars').click(function(){
  if($('nav .nav-bars').hasClass('shown')){
    $('nav .nav-bars').fadeOut();
  }else{
    $('nav .nav-bars').fadeIn().addClass('shown');
  }

});
});
