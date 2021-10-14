function InfoWindow( { infoFor, title, content, isOpen } ) {

	return (
		<div id={ `info-window-for-${ infoFor }` }
			data-info-for={ `${ infoFor }`}
			class={ `info-window ${ ! isOpen ? 'screen-reader-text' : '' }` }>
			<h6 id={ `info-window-title-${infoFor}` } class="info-window-title">{ title }</h6>
			{ content && content.length > 0 && (
			<div id={ `info-window-desc-${infoFor}` } class="info-window-desc">
				{ content }
			</div>
			) }
		</div>
	);
}

export default InfoWindow;
