function wheelScroll(e) {
  e.preventDefault();
  if (e.originalEvent.deltaY < 0) {
    if (!$('.carousel-inner .carousel-item:first').hasClass('active')) {
      $(this).carousel('prev');
    }
  } else {
    if (!$('.carousel-inner .carousel-item:last').hasClass('active')) {
      $(this).carousel('next');
    }
  }
}

$('#homePage').on('wheel', { passive: true }, wheelScroll);

$('#signForm :input').addClass('item');

$(window).on('orientationchange', function (event) {
  $().addClass();
});
