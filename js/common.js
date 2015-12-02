head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	$('.js-promo-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		fade: true,
	});

	$('.js-progress-gal-t').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.js-progress-gal-b',
		focusOnSelect: true
	});

	$('.js-progress-gal-b').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		// touchMove: false,
		fade: true,
		asNavFor: '.js-progress-gal-t',
	});

	$('.js-awards-gal').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
	});
});