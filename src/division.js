import classnames from "classnames";

const Division = ( { id, ofMap, path, isHighlighted } ) => {

	const divisionClasses =
		classnames(
			'division',
			'has-info-window',
			{
				'highlight': isHighlighted
			}
		);

	// const [ isHovered, setIsHovered ] = useState( false );
	// const [ infoWindowPosition, setInfoWindowPosition ] = useState( { x: 0, y: 0 } );

	// useEffect(() => {

	// 	const infoWindow = document.querySelector(`#info-window-for-${id}`);

	// 	if ( infoWindow ) {

	// 		infoWindow.setAttribute( 'x', infoWindowPosition.x );
	// 		infoWindow.setAttribute( 'y', infoWindowPosition.y );

	// 		let infoWindowClasses = infoWindow.classList;
	// 		infoWindowClasses.toggle("screen-reader-text");
	// 	}

	// }, [ isHovered ] );

	// function getCursor( evt, svg ) {
	// 	let point = svg.createSVGPoint();

	// 	point.x = evt.clientX;
	// 	point.y = evt.clientY;

	// 	return point.matrixTransform( svg.getScreenCTM().inverse() );
	// }

	// const toggleInfoWindow = (e) => {

	// 	const map = document.querySelector(`#cjd-blocks-interactive-map-${ ofMap }`);

	// 	const position = getCursor( e, map );

	// 	setInfoWindowPosition( {
	// 		x: position.x,
	// 		y: position.y
	// 	} );

	// 	setIsHovered( !isHovered );
	// };

	return (
		<svg id={ id }
			class={ divisionClasses }
			aria-labelledby={ `info-window-title-${ id }` }
			aria-describedby={ `info-window-desc-${ id }` }
			focusable="true"
		>
			<path d={ path } />
		</svg>
	);
}

export default Division;
