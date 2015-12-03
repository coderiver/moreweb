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

	//MAP
	var map;
	function initMap() {

		var myLatLng = {lat: 55.774824, lng: 37.612028};

		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 16,
			center: myLatLng,
			// mapTypeControl: false,
			// streetViewControl: false,
			scrollwheel: false,
			// zoomControl : false,
			disableDefaultUI: true,
		});

		var marker = new google.maps.Marker({
			position: myLatLng,
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