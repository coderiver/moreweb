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

	$(".js-popup").on("click", function(){
		$(".popup").toggleClass('is-active');
	});

	$(".btn-close").on("click", function(){
		$(".popup").removeClass('is-active');
	});

	$('.js-promo-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 9000,
		speed: 1000,
		pauseOnHover: true,
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
		autoplay: true,
		speed: 1000,
		pauseOnHover: true,
	});

	//MAP
	var map;
	function initMap() {

		var myLatLng = {lat: 55.7747386, lng: 37.6202023};

		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 16,
			center: myLatLng,
			disableDefaultUI: true,
			draggable: false,
			// mapTypeControl: false,
			// streetViewControl: false,
			scrollwheel: false,
			// zoomControl : false,
			
		});

		var marker = new google.maps.Marker({
			position: {lat: 55.774824, lng: 37.612028},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker.png'
		});


		map.addListener('center_changed', function() {
			// 3 seconds after the center of the map has changed, pan back to the
			// marker.
			window.setTimeout(function() {
			  map.panTo(marker.getPosition());
			}, 3000);
		});

		marker.addListener('click', function() {
			map.setZoom(18);
			map.setCenter(marker.getPosition());
		});


	}
	initMap();

});