import domReady from '@wordpress/dom-ready';

domReady( function () {
	const elementsWithInfoWindow = document.getElementsByClassName('has-info-window');

	function showInfoWindow( id ) {
		const infoWindow = document.getElementById(`info-window-for-${ id }`);

		if ( infoWindow ) {
			infoWindow.classList.remove('screen-reader-text');
		}
	}

	function hideInfoWindow( id ) {
		const infoWindow = document.getElementById(`info-window-for-${ id }`);

		if ( infoWindow ) {
			infoWindow.classList.add('screen-reader-text');
		}
	}

	for (const key in elementsWithInfoWindow) {

		if (Object.hasOwnProperty.call(elementsWithInfoWindow, key)) {

			const element = elementsWithInfoWindow[key];

			element.addEventListener("mouseenter", e => {
				showInfoWindow( element.id );
			} );

			element.addEventListener("mouseleave", e => {
				hideInfoWindow( element.id );
			} );

		}

	}
});
