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

import USA_Map from './maps.js';
import countries from './countries.js';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( {attributes} ) {

	const { mapColor, highlightColor, filterType, filterOptions } = attributes;

	const country = "usa";
	const { divisions } = countries[country];

	const mapColorStyle =
		mapColor !== undefined ? {
			"--cjd-blocks--interactive-map--map-color": `var(--wp--preset--color--${mapColor})`
		} : {};

	const highlightColorStyle =
		highlightColor !== undefined ? {
			"--cjd-blocks--interactive-map--highlight-color": `var(--wp--preset--color--${highlightColor})`
		} : {};

	const filterClasses = [];

	const filterControl = (
		<>
			{ filterOptions.length > 1 &&
			// <BaseControl
			// 	label={ __( `Filter by ${filterType}` ) }
			// >
			// 	<select>
			// 		{ filterOptions.map( ( filterOption, index ) => (
			// 			<option value={ filterOption } key={ index }>{ filterOption }</option>
			// 		) ) }
			// 	</select>
			// </BaseControl>

			// <SelectControl
			// 	label={ __( `Filter by ${filterType}` ) }
			// 	options={ filterOptions }
			// />
			<form>
				<label for="interactive-map-filter">{ __( `Filter by ${filterType}` ) }</label>
				<select name="interactive-map-filter" id="interactive-map">
					{ filterOptions.map( ( filterOption, index ) => (
					<option value={ filterOption } key={ index }>{ filterOption }</option>
					) ) }
				</select>
			</form>
			}
		</>
	);

	return (
		<div { ...useBlockProps.save() } style={ Object.assign( {}, mapColorStyle, highlightColorStyle ) }>
			{ filterControl }
			{ filterOptions.length }
			<USA_Map divisions={ divisions } filterClasses={ filterClasses } />
		</div>
	);
}
