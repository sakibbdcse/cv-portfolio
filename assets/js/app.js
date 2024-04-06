var nav_offset_top = $('header').height() + 50;
	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed
	function navbarFixed() {
		if ($('.header_area').length) {
			$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				if (scroll >= nav_offset_top) {
					$('.header_area').addClass('navbar_fixed');
				} else {
					$('.header_area').removeClass('navbar_fixed');
				}
			});
		}
	}
	navbarFixed();

	/*----------------------------------------------------*/
var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 200,
  startDelay: 500,
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

// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
	autoplay: true,
	smartSpeed: 1000,
	items: 1,
	dots: true,
	loop: true,
});
