import domReady from '@wordpress/dom-ready';

domReady( function () {

	function positionInfoWindows() {

		const elementsAsInfoWindowBounds = document.getElementsByClassName('is-info-window-bounds');

		for ( const key in elementsAsInfoWindowBounds ) {

			if (Object.hasOwnProperty.call(elementsAsInfoWindowBounds, key)) {

				const boundingElement = elementsAsInfoWindowBounds[key];

				const {
					x: boundingElementX,
					y: boundingElementY,
					width: boundingElementWidth,
					height: boundingElementHeight
				} = boundingElement.getBoundingClientRect();

				const boundingElementCenter = {
					cx: boundingElementWidth / 2 + boundingElementX,
					cy: boundingElementHeight / 2 + boundingElementY
				}

				const childrenWithInfoWindow = boundingElement.getElementsByClassName('has-info-window');

				for (const key in childrenWithInfoWindow) {

					if (Object.hasOwnProperty.call(childrenWithInfoWindow, key)) {

						const childElement = childrenWithInfoWindow[key];

						const {
							x: childElementX,
							y: childElementY,
							width: childElementWidth,
							height: childElementHeight
						} = childElement.getBoundingClientRect();

						const childElementCenter = {
							cx: childElementWidth / 2 + childElementX,
							cy: childElementHeight / 2 + childElementY
						}

						const infoWindow = document.getElementById(`info-window-for-${ childElement.id }`);

						const {
							width: infoWindowWidth,
							height: infoWindowHeight
						} = infoWindow.getBoundingClientRect();


						if ( childElementCenter.cy > boundingElementCenter.cy ) {

							infoWindow.style.bottom = (boundingElementY + boundingElementHeight) - childElementCenter.cy + "px";
						} else {

							infoWindow.style.top = childElementCenter.cy - boundingElementY + "px";
						}

						if ( childElementCenter.cx > boundingElementCenter.cx ) {

							infoWindow.style.left = childElementCenter.cx - boundingElementX - infoWindowWidth + "px";
						} else {

							infoWindow.style.left = childElementCenter.cx - boundingElementX + "px";
						}

					}
				}
			}

		}

	}

	positionInfoWindows();
	window.addEventListener( 'resize', positionInfoWindows );

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
