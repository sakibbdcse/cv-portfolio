var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 500,
  startDelay: 1000,
  loop: true,
});

// Facts counter
$('.counter').counterUp({
  delay: 10,
  time: 1000
});

// Skills
$('.skill').waypoint(function () {
  $('.progress .progress-bar').each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
  });
}, {offset: '100%'});

 // Portfolio isotope and filter
 var portfolioIsotope = $('.portfolio-container').isotope({
  itemSelector: '.portfolio-item',
  layoutMode: 'fitRows'
});
$('#portfolio-flters li').on('click', function () {
  $("#portfolio-flters li").removeClass('active');
  $(this).addClass('active');

  portfolioIsotope.isotope({filter: $(this).data('filter')});
});
