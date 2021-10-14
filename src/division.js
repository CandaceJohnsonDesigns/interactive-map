import classnames from "classnames";

const Division = ( { id, ofMap, path, isHighlighted, openInfoWindow, closeInfoWindow } ) => {

	const divisionClasses =
		classnames(
			'division',
			'has-info-window',
			{
				'highlight': isHighlighted
			}
		);

	return (
		<svg id={ id }
			class={ divisionClasses }
			aria-labelledby={ `info-window-title-${ id }` }
			aria-describedby={ `info-window-desc-${ id }` }
			focusable="true"
			onClick={ () => openInfoWindow( id ) }
			onBlur={ () => closeInfoWindow( id ) }
		>
			<path d={ path } />
		</svg>
	);
}

export default Division;
