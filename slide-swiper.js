(function() {
	// for the moment make it only possible to mvoe forward
	// because it often misdetects the wave direction
	var webcamSwipeEnabled = true;
	document.getElementsByTagName("body")[0].addEventListener( 'webcamSwipeLeft',  function() {
		if (webcamSwipeEnabled) {
			Reveal.navigateNext();
			// disable swiping for 1 second to avoid "double firing" of the event
			webcamSwipeEnabled = false;
			setTimeout(function(){ webcamSwipeEnabled = true}, 100);
		}
	});
	/*
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
