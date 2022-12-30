// Home page testimonial slider //
$('.testimonials').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3500,
  slidesToShow: 1,
  arrows:true,
  fade:true,
  speed: 1100,
  
});

// Stellar.js Parallax //
$.stellar({
    horizontalScrolling: false,
    responsive: true,
});

// Sub Menu //
$(function () {    
  $('.dropdown').hover(function () {
     clearTimeout($.data(this, 'timer'));
     $('.sub-menu', this).stop(true, true).slideDown(300);
  }, function () {
    $.data(this, 'timer', setTimeout($.proxy(function() {
      $('.sub-menu', this).stop(true, true).slideUp(300);
    }, this), 300));
  });
});

// Sub-Sub Menu //
$(function () {    
  $('.dropright').hover(function () {
     clearTimeout($.data(this, 'timer'));
     $('.sub-right', this).show('slide',{direction:'left'},300);
  }, function () {
    $.data(this, 'timer', setTimeout($.proxy(function() {
      $('.sub-right', this).hide('slide',{direction:'left'},300);

    }, this), 300));
  });
});

// Mobile Menu //
$(function(){
		$('#menu').slicknav( {
			label: 'NAVIGATE',
			duration: 200,
			closedSymbol:'<i class="fa fa-chevron-down"></i>',
            openedSymbol:'<i class="fa fa-chevron-right"></i>'
		});

	});

// Flex Slider 2 //
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "fade",
  });
});

$(window).load(function() {
  $('.flexslider2').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });
});
// Back to Top //
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
});