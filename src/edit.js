import classnames from 'classnames';

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
import { InspectorControls, PanelColorSettings, useBlockProps } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { Placeholder, BaseControl, Button, SelectControl, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import USA_Map from './maps.js';
import countries from './countries.js';
import FieldOption from './cjd-blocks-option';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function Edit( {
	attributes,
	setAttributes,
	isSelected,
	setMapColor,
	setHighlightColor
} ) {
	const { mapColor, highlightColor, filterType, filterOptions } = attributes;

	const defaultMapColor = mapColor;
	const defaultHighlightColor = highlightColor;

	const country = "usa";
	const { divisions } = countries[country];

	const [ filter, setFilter ] = useState( 'All' );

	const filters = [
		{ value: 'multifamily', label: 'Multifamily' },
		{ value: 'healthcare', label: 'Healthcare' },
		{ value: 'commercial', label: 'Commercial' },
		{ value: 'senior-housing', label: 'Senior Housing'}
	];

	const filterClasses = [];

	const controls = (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__('Color settings')}
					colorSettings={[
						{
							value: mapColor !== undefined ? mapColor.color : defaultMapColor,
							onChange: setMapColor,
							label: __('Map Color')
						},
						{
							value: highlightColor !== undefined ? highlightColor.color : defaultHighlightColor,
							onChange: setHighlightColor,
							label: __('Highlight Color')
						}
					]}
				/>
			</InspectorControls>
		</>
	);

	const [ inFocus, setInFocus ] = useState( 0 );

	const onChangeFilterOption = ( key = null, filterOption = null ) => {
		const newFilterOptions = filterOptions.slice( 0 );
		if ( null === filterOption ) {
			// Remove a key
			newFilterOptions.splice( key, 1 );
			if ( key > 0 ) {
				setInFocus( key - 1 );
			}
		} else {
			// update a key
			newFilterOptions.splice( key, 1, filterOption );
			setInFocus( key );
		}
		setAttributes( { filterOptions: newFilterOptions } );
	};

	const addNewFilterOption = ( key = null ) => {
		const newFilterOptions = filterOptions.slice( 0 );
		let newInFocus = 0;
		if ( 'object' === typeof key ) {
			newFilterOptions.push( '' );
			newInFocus = newFilterOptions.length - 1;
		} else {
			newFilterOptions.splice( key + 1, 0, '' );
			newInFocus = key + 1;
		}

		setInFocus( newInFocus );
		setAttributes( { filterOptions: newFilterOptions } );
	};

	const filterControl = (
		<>
			{ filterOptions.length >= 1 ? (
				<BaseControl
					label={ isSelected ?
						<TextControl
							label={ __( 'Filter Category Name' ) }
							value={ filterType }
							onChange={ ( label ) => setAttributes( { filterType: label } ) }
						/>
						: __( `Filter by ${filterType}` )}
				>
					{ ! isSelected ? (
						<select>
							{ filterOptions.map( ( filterOption, index ) => (
								<option value={ filterOption } key={ index }>{ filterOption }</option>
							) ) }
						</select>
					) : (
						<ol>
							{ filterOptions.map( ( filterOption, index ) => (
								<FieldOption
									type='select'
									key={ index }
									option={ filterOption }
									index={ index }
									onChangeOption={ onChangeFilterOption }
									onAddOption={ addNewFilterOption }
									isInFocus={ index === inFocus && isSelected }
									isSelected={ isSelected }
								/>
							) ) }
						</ol>
					)}
				</BaseControl>
			) : (
				<Button icon="insert" label="Add Map Filter" />
			)}
			{ filterOptions.length >= 1 && isSelected &&
				<Button
					icon="edit"
					label='Edit filters'
				>
				</Button>
			}
		</>
	);

	const placeholder = (
		<>
			<Placeholder
				label={ __( 'Interactive Map', 'interactive-map' ) }
				instructions={ __( 'Add custom filters to highlight divisions in the map.') }
			>
				<TextControl
					label={ __( 'Filter Type') }
					value={ filterType }
					onChange={ ( label ) => setAttributes( { filterType: label } ) }
				/>
				<TextControl
					label={ __( 'Filter Option') }
					value={ filterType }
					onChange={ addNewFilterOption }
				/>
				<ol>
					{ filterOptions.map( (filterOption, index ) => (
						<li>{ filterOption }</li>
					))}
				</ol>
			</Placeholder>
		</>
	);

	const mapColorStyle = mapColor !== undefined ? {
		"--cjd-blocks--interactive-map--map-color": `var(--wp--preset--color--${mapColor})`
	} : {};

	const highlightColorStyle = highlightColor !== undefined ? {
		"--cjd-blocks--interactive-map--highlight-color": `var(--wp--preset--color--${highlightColor})`
	} : {};

	return (
		<div { ...useBlockProps( ) } style={ Object.assign( {}, mapColorStyle, highlightColorStyle ) } >
			{ controls }
			{ filterControl }
			<USA_Map divisions={ divisions } filterClasses={ filterClasses } />
		</div>
	);
}

export default Edit;
