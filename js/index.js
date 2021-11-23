$(function(){
  'use strict';
  var ScreenHeight = $(window).innerHeight();
  // $('.main-div').height(ScreenHeight/2.6);
  var navbar = $('.navbar').innerHeight();

  $('.overview-section').height = ( ( $(window).innerHeight() - $('.navbar').innerHeight() ) ) ;

  document.getElementById("gg").style.color = 'blue';

});