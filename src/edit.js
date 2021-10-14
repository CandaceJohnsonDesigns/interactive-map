import classnames from 'classnames';
import _ from "lodash";

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
import { useState, useEffect } from '@wordpress/element';
import {
	__experimentalFlex as Flex,
    __experimentalFlexBlock as FlexBlock,
    __experimentalFlexItem as FlexItem,
	SelectControl,
	Button,
	TextControl,
	Modal,
	Panel,
	PanelBody,
	PanelRow,
	CheckboxControl
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import maps from './maps.js';
import Division from './division.js';
import InfoWindow from './info-window';
import FieldOption from './cjd-blocks-option';
import InfoWindowForm from './info-window-form';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function Edit( {
	clientId,
	attributes,
	setAttributes,
	isSelected,
	setMapColor,
	setHighlightColor
} ) {
	const {
		mapId,
		mapOf,
		mapColor,
		highlightColor,
		filterOptions,
		mapDivisions,
		infoWindows
	} = attributes;

	const defaultMapColor = mapColor;
	const defaultHighlightColor = highlightColor;

	setAttributes( { mapId: clientId } );

	const { name, divisionName, viewBox, divisions, borders, separators } = maps[mapOf];

	const textControlLabel = "Projects Completed";
	const filterCategoryLabel = "Project Types";

	const [ isOpen, setOpen ] = useState( false );
    const openMapFilters = () => setOpen( true );
    const closeMapFilters = () => setOpen( false );

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

	let divisionOptions = [];

	for ( const [ key, division ] of Object.entries( divisions ) ) {
		divisionOptions.push(
			{ value: key, label: division.name }
		);
	}

	function saveMapDivisions() {

	}

	function initializeIsOpen( value ) {
		const initialIsOpen = {};

		Object.keys( divisions ).forEach( divisionKey => {
			initialIsOpen[ divisionKey ] = value;
		});

		return initialIsOpen;
	}

	const [ infoWindowsOpen, setIinfoWindowsOpen ] = useState( initializeIsOpen( false ) );


	const openInfoWindow = ( divisionId ) => {

		setIinfoWindowsOpen( { ...infoWindowsOpen, [ divisionId ]: true } );
	}

	const closeInfoWindow = ( divisionId ) => {

		setIinfoWindowsOpen( { ...infoWindowsOpen, [ divisionId ]: false } );
	}

	const [ projectsCompleted, setProjectsCompleted ] = useState( '' );
	const [ mapDivision, setMapDivision ] = useState( [] );
	const [ checkedFilterOptions, setCheckedFilterOptions ] = useState(
		new Array(filterOptions.length).fill(false)
	);

	function onChangeFilterOptions( position ) {
		const updatedCheckedFilterOptions = checkedFilterOptions.map( (item, index) =>
			index === position ? !item : item
		);

		setCheckedFilterOptions( updatedCheckedFilterOptions );
	}

	function getOptions( booleanArray, options ) {

		const indices = booleanArray.flatMap( ( value, index ) => value ? index : [] );

		const labels = indices.map( index =>
			options[ index ]
		);

		return labels;

	}

	function onChangeMapDivisions( event ) {
		const value = event.target.value;

		setAttributes({
			...mapDivisions,
			[ event.target.key ]: value
		});
	}

	const controls = (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__('Color settings')}
					initialOpen={ false }
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
				<Panel header={ `${ divisionName.singular } Settings` }>
					<PanelBody
						title={
							<SelectControl
								value={ mapDivision }
								options={ divisionOptions }
								onChange={ ( selectedDivision ) => setMapDivision( selectedDivision ) }
							/>
						}
						key={ mapDivision }
						initialOpen={ true }>
						<PanelRow>
							<div>
								<TextControl
									label="Projects Completed"
									value={ projectsCompleted }
									onChange={ setProjectsCompleted }
								/>
								{ filterOptions &&
									<ul>
										{ filterOptions.map( ( option, index ) => {

											return (
												<li key={ index }>
													<CheckboxControl
														label={ option }
														checked={ checkedFilterOptions[ index ] }
														onChange={ () => onChangeFilterOptions( index ) }
													/>
												</li>
											);

 										} ) }
									</ul>
								}
							</div>
						</PanelRow>
						<p>
							{ JSON.stringify( {
								[ mapDivision ]: {
									[ textControlLabel ]: projectsCompleted,
									[ filterCategoryLabel ]: getOptions( checkedFilterOptions, filterOptions )
								}
							} ) }
						</p>
					</PanelBody>

					<Button
						className="coblocks-field-multiple__add-option"
						icon="insert"
						label={ __( "Add new division information", 'interactive-map' ) }
					>
						{ __( "Add new division information", 'interactive-map' ) }
					</Button>
				</Panel>
			</InspectorControls>
		</>
	);

	const divisionSet = [];
	const infoWindowSet = [];

	for ( const [ key, division ] of Object.entries( divisions ) ) {

		let hasInformation = false;

		const content = [];

		if ( infoWindows.hasOwnProperty( [ key ] ) ) {
			hasInformation = true;

			if ( hasInformation && infoWindows[ key ][ `${ textControlLabel }` ] !== '' ) {

				content.push(
					<p>
						<span class="info-window-subtitle">{ textControlLabel }: </span>
						{ infoWindows[ key ][ `${ textControlLabel }` ] }
					</p>
				);
			}

			if ( hasInformation && infoWindows[ key ][ `${ filterCategoryLabel }` ] !== [] ) {

			const listItems = infoWindows[ key ][ `${ filterCategoryLabel }` ].map( ( item ) =>
				<li key={ item }>{ item }</li>
			);

			content.push(
				<>
					<p class="info-window-subtitle">{ textControlLabel }</p>
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
				isOpen={ infoWindowsOpen[ key ] }
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
				openInfoWindow={ openInfoWindow }
				closeInfoWindow={ closeInfoWindow }
			/>
		);
	}

	const filterControl = (
		<>
			{ isSelected && (
				<Button
					icon={ infoWindows.length >= 1 ? "edit" : "insert" }
					label={ infoWindows.length >= 1 ? `Edit ${ divisionName.singular } Information` : `Add ${ divisionName.singular } Information` }
					onClick={ openMapFilters }
				>
					{ filterOptions.length >= 1 ? __( `Edit ${ divisionName.singular } Information`, 'interactive-map' ) : __( `Add ${ divisionName.singular } Information`, 'interactive-map' ) }
				</Button>
			)}
			{ isOpen && (
				<Modal title="Info Windows" onRequestClose={ closeMapFilters }>

					<Panel>
					<PanelBody title={ `${ filterCategoryLabel }` }>
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
							<Button
								className="coblocks-field-multiple__add-option"
								icon="insert"
								label={ __( "Add filter option", 'interactive-map' ) }
								onClick={ addNewFilterOption }
							>
								{ __( "Add filter option", 'interactive-map' ) }
							</Button>
						</ol>
					</PanelBody>
				</Panel>

					<Button
						icon="save"
						label={ __( `Save ${ divisionName.singular } information`, 'interactive-map' ) }
						onClick={ saveMapDivisions }
					>
						{ __( `Save ${ divisionName.singular } information`, 'interactive-map' ) }
					</Button>
				</Modal>
			) }

		</>
	);

	const mapColorStyle = mapColor !== undefined ? {
		"--cjd-blocks--interactive-map--map-color": `var(--wp--preset--color--${mapColor})`
	} : {};

	const highlightColorStyle = highlightColor !== undefined ? {
		"--cjd-blocks--interactive-map--highlight-color": `var(--wp--preset--color--${highlightColor})`
	} : {};

	return (
		<div { ...useBlockProps( { className: "is-info-window-bounds" } ) } style={ Object.assign( {}, mapColorStyle, highlightColorStyle ) } >
			{ controls }
			{ filterControl }
			<svg xmlns="http://www.w3.org/2000/svg"
				id={ `cjd-blocks-interactive-map-${ mapId }` }
				viewBox={ viewBox }
				preserveAspectRatio="true"
			>
				{ divisionSet }
				{ borders.render() }
				{ separators.render() }
			</svg>
			{ infoWindowSet }
		</div>
	);
}

export default Edit;
