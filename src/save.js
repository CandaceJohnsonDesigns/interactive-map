/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';
import { SelectControl, BaseControl } from '@wordpress/components';

import maps from './maps.js';
import Division from './division.js';
import InfoWindow from './info-window';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {

	const { mapOf, mapId, mapColor, highlightColor, infoWindows } = attributes;

	const { name, divisionName, viewBox, divisions, borders, separators } = maps[mapOf];

	const mapColorStyle =
		mapColor !== undefined ? {
			"--cjd-blocks--interactive-map--map-color": `var(--wp--preset--color--${mapColor})`
		} : {};

	const highlightColorStyle =
		highlightColor !== undefined ? {
			"--cjd-blocks--interactive-map--highlight-color": `var(--wp--preset--color--${highlightColor})`
		} : {};

	const divisionSet = [];
	const infoWindowSet = [];

	for ( const [ key, division ] of Object.entries( divisions ) ) {

		let hasInformation = false;

		const content = [];

		if ( infoWindows.hasOwnProperty( [ key ] ) ) {
			hasInformation = true;

			if ( hasInformation && infoWindows[ key ][ "Projects Completed" ] !== '' ) {

				content.push(
					<p>
						<span class="info-window-subtitle">Projects Completed: </span>
						{ infoWindows[ key ][ "Projects Completed" ] }
					</p>
				);
			}

			if ( hasInformation && infoWindows[ key ][ "Project Types" ] !== [] ) {

			const listItems = infoWindows[ key ][ "Project Types" ].map( ( item ) =>
				<li key={ item }>{ item }</li>
			);

			content.push(
				<>
					<p class="info-window-subtitle">Project Types</p>
					<ul>
						{ listItems }
					</ul>
				</>
			);
		}

		};

		infoWindowSet.push(
			<InfoWindow
				infoFor={ key }
				title={ division.name }
				content={ content }
			/>
		);

		divisionSet.push(
			<Division
				id={ key }
				name={ division.name }
				path={ division.path }
				ofMap={ mapId }
				isHighlighted={ hasInformation }
			/>
		);
	}

	return (
		<div { ...useBlockProps.save( { className: "is-info-window-bounds" } ) } style={ Object.assign( {}, mapColorStyle, highlightColorStyle ) }>
			{/* { filterControl } */}
			<svg xmlns="http://www.w3.org/2000/svg"
				id={ `cjd-blocks-interactive-map-${ mapId }` }
				viewBox={ viewBox }
				preserveAspectRatio="true"
				overflow="auto"
			>
				{ divisionSet }
				{/* { borders.render() } */}
				{ separators.render() }
			</svg>
			{ infoWindowSet }
		</div>
	);
}
