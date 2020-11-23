
// ciliccare hamburger icon e aprire il hamburger menu

var buttonMenu = $('.fas.fa-bars');
console.log(buttonMenu);


$('.fas.fa-bars').click( function () {
  $('.hamburger-menu').fadeIn('slow');
  }
) ;

$('.fas.fa-times').click( function () {
  $('.hamburger-menu').fadeOut('slow');
  }
) ;
