function InfoWindow( { infoFor, title, content, center } ) {

	return (
		<foreignObject
			id={ `info-window-for-${ infoFor }` }
			class="info-window-container screen-reader-text"
			width="200"
			height="300"
			x={ center ? `${ center.x }` : `` }
			y={ center ? `${ center.y }` : `` }
			data-info-for={ `${ infoFor }`}
		>
			<div class="info-window">
				<h6 id={ `info-window-title-${infoFor}` } class="info-window-title">{ title }</h6>
				{ content && content.length > 0 && (
				<div id={ `info-window-desc-${infoFor}` } class="info-window-desc">
					{ content }
				</div>
				) }
			</div>
		</foreignObject>
	);
}

export default InfoWindow;
