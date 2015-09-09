(function() {
	var webcamSwipeEnabled = true;
	document.getElementsByTagName("body")[0].addEventListener( 'webcamSwipeLeft',  function() {
		if (webcamSwipeEnabled) {
			Reveal.navigateNext();
			webcamSwipeEnabled = false;
			setTimeout(function(){ webcamSwipeEnabled = true}, 100);
		}
	});
	/*  --------------------------------------------------------------------------------
	 *  Swiping left side is still shaky... need some tweaking of webcan-swiper first.
	 *  Or a port to openCV would be even better. To consider
	 *  --------------------------------------------------------------------------------
	document.getElementsByTagName("body")[0].addEventListener( 'webcamSwipeRight',  function() {
		if (webcamSwipeEnabled) {
			Reveal.navigatePrev();
			// disable swiping for 1 second to avoid "double firing" of the event
			webcamSwipeEnabled = false;
			setTimeout(function(){ webcamSwipeEnabled = true}, 1000);
		}
	});*/

	//gulp

	document.addEventListener( 'keydown', function( event ) {

		if( event.keyCode === 87 ) {
			event.preventDefault();
			if (webcamSwipeEnabled) {
				webcamSwipeEnabled = false;
			}
			else {
				webcamSwipeEnabled = true;
				//window.alert("pb")
			}
		}
	}, false );

	window.initializeWebcamSwiper();
}());
