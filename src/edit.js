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
import { useState } from '@wordpress/element';
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
import FieldOption from './cjd-blocks-option';
import InfoWindow from './info-window';
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
		newProjectsCompleted,
		infoWindows
	} = attributes;

	const defaultMapColor = mapColor;
	const defaultHighlightColor = highlightColor;

	setAttributes( { mapId: clientId } );

	const { name, divisionName, viewBox, divisions, borders, separators } = maps[mapOf];

	// const formAttributes = {};
	// formAttributes[ "Projects Completed" ] = '';
	// formAttributes[ "Project Types" ] = [];

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
			</InspectorControls>
		</>
	);

//	const [ inFocus, setInFocus ] = useState( 0 );

	// const onChangeFilterOption = ( key = null, filterOption = null ) => {
	// 	const newFilterOptions = filterOptions.slice( 0 );
	// 	if ( null === filterOption ) {
	// 		// Remove a key
	// 		newFilterOptions.splice( key, 1 );
	// 		if ( key > 0 ) {
	// 			setInFocus( key - 1 );
	// 		}
	// 	} else {
	// 		// update a key
	// 		newFilterOptions.splice( key, 1, filterOption );
	// 		setInFocus( key );
	// 	}
	// 	setAttributes( { filterOptions: newFilterOptions } );
	// };

	// const addNewFilterOption = ( key = null ) => {
	// 	const newFilterOptions = filterOptions.slice( 0 );
	// 	let newInFocus = 0;
	// 	if ( 'object' === typeof key ) {
	// 		newFilterOptions.push( '' );
	// 		newInFocus = newFilterOptions.length - 1;
	// 	} else {
	// 		newFilterOptions.splice( key + 1, 0, '' );
	// 		newInFocus = key + 1;
	// 	}

	// 	setInFocus( newInFocus );
	// 	setAttributes( { filterOptions: newFilterOptions } );
	// };

	// const [ isOpen, setOpen ] = useState( false );
    // const openMapFilters = () => setOpen( true );
    // const closeMapFilters = () => setOpen( false );

	//const divisionControls = [];
	const divisionSet = [];
	const infoWindowSet = [];

	//const divisionOptions = {};
	// for ( const [ key, division ] of Object.entries( divisions ) ) {
	// 	divisionOptions =
	// }

	// const divisionOptions = [];
	// for ( const [ key, division ] of Object.entries( divisions ) ) {
	// 	divisionOptions.push( { label: division.name, value: key } );
	// }

	for ( const [ key, division ] of Object.entries( divisions ) ) {

		// const cleanFilterOptions = filterOptions.filter( function( e ) { return e === 0 || e } );

		// const [ projectsCompleted, setProjectsCompleted ] = useState( '' );
		// const [ mapDivision, setMapDivision ] = useState( [] );

		let hasInformation = false;

		// divisionControls.push(
		// 	<PanelBody key={ key } title={ division.name } initialOpen={ false }>
		// 		<PanelRow>
		// 			<SelectControl
		// 				label="Division"
		// 				value={ mapDivision }
		// 				options={ divisionOptions }
		// 				onChange={ ( token ) => setSelectedDivision( token ) }
		// 			/>

		// 			<InfoWindowForm>
		// 				<TextControl
		// 					label="Projects Completed"
		// 					value={ projectsCompleted }
		// 					onChange={ setProjectsCompleted }
		// 				/>
		// 				{ cleanFilterOptions.length > 0 &&
		// 					cleanFilterOptions.map( ( filterOption, index ) => (
		// 						<CheckboxControl key={ index }
		// 							label={ filterOption }
		// 						/>
		// 					))
		// 				}
		// 			</InfoWindowForm>
		// 		</PanelRow>
		// 	</PanelBody>
		// );

		// const content = [];

		// if ( projectsCompleted && projectsCompleted !== '' ) {

		// 	content.push(
		// 		<p>
		// 			<span class="info-window-subtitle">Projects Completed</span>:
		// 			{ projectsCompleted }
		// 		</p>
		// 	);
		// }

		// if ( projectTypes && projectTypes !== [] ) {

		// 	const listItems = projectTypes.map( ( item ) =>
		// 		<li key={ item }>{ item }</li>
		// 	);

		// 	content.push(
		// 		<>
		// 			<p class="info-window-subtitle">Project Types</p>
		// 			<ul>
		// 				{ listItems }
		// 			</ul>
		// 		</>
		// 	);
		// }

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
				center={ division.center }
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

	// for ( const [ division, information ] of Object.entries( mapDivisions ) ) {

	// 	const content = [];

	// 	if ( information ) {

	// 		for ( const [ key, value ] of Object.entries( information ) ) {
	// 			if ( Array.isArray( value ) ) {

	// 				const listItems = value.map( ( item ) =>
	// 					<li key={ item }>{ item }</li>
	// 				);

	// 				content.push(
	// 					<>
	// 						<p class="info-window-subtitle">{ key }</p>
	// 						<ul>
	// 							{ listItems }
	// 						</ul>
	// 					</>
	// 				);
	// 			} else {
	// 				content.push(
	// 					<p><span class="info-window-subtitle">{ key }</span>: { value }</p>
	// 				);
	// 			}

	// 		}
	// 	}

	// 	infoWindowSet.push(
	// 		<InfoWindow
	// 			infoFor={ division }
	// 			title={ divisions[ division ].name }
	// 			center={ divisions[ division ].center }
	// 			content={ content }
	// 		/>
	// 	);
	// }


	// const filterControl = (
	// 	<>
	// 		{ isSelected && (
	// 			<Button
	// 				icon={ filterOptions.length >= 1 ? "edit" : "insert" }
	// 				label={ filterOptions.length >= 1 ? "Edit Map Filters" : "Add Map Filter" }
	// 				onClick={ openMapFilters }
	// 			>
	// 				{ filterOptions.length >= 1 ? __( 'Edit Map Filter', 'interactive-map' ) : __( 'Add Map Filter', 'interactive-map' ) }
	// 			</Button>
	// 		)}
	// 		{ isOpen && (
	// 			<Modal title="Map Filters" onRequestClose={ closeMapFilters }>
	// 				<ol>
	// 					{ filterOptions.map( ( filterOption, index ) => (
	// 						<FieldOption
	// 							type='select'
	// 							key={ index }
	// 							option={ filterOption }
	// 							index={ index }
	// 							onChangeOption={ onChangeFilterOption }
	// 							onAddOption={ addNewFilterOption }
	// 							isInFocus={ index === inFocus && isSelected }
	// 							isSelected={ isSelected }
	// 						/>
	// 					) ) }
	// 					<Button
	// 						className="coblocks-field-multiple__add-option"
	// 						icon="insert"
	// 						label={ __( "Add filter option", 'interactive-map' ) }
	// 						onClick={ addNewFilterOption }
	// 					>
	// 						{ __( "Add filter option", 'interactive-map' ) }
	// 					</Button>
	// 				</ol>

	// 				{ filterOptions.length >= 1 && (
	// 					<Panel header={ `${ divisionName.singular } settings` }>
	// 						{ divisionControls }
	// 					</Panel>
	// 				)}
	// 			</Modal>
	// 		) }

	// 	</>
	// );
		// const [ projectsCompleted, setProjectsCompleted ] = useState( '' );
		// const [ mapDivision, setMapDivision ] = useState( [] );

	// 	const filterControl = (
	// 	<>
	// 		{ isSelected && (
	// 			<Button
	// 				icon={ infoWindows.length >= 1 ? "edit" : "insert" }
	// 				label={ infoWindows.length >= 1 ? "Edit Info Windows" : "Add Info Window" }
	// 				onClick={ openMapFilters }
	// 			>
	// 				{ filterOptions.length >= 1 ? __( 'Edit Info Windows', 'interactive-map' ) : __( 'Add Info Windows', 'interactive-map' ) }
	// 			</Button>
	// 		)}
	// 		{ isOpen && (
	// 			<Modal title="Info Windows" onRequestClose={ closeMapFilters }>
	// 				<Panel>
	// 					{/* { filterOptions.map( ( filterOption, index ) => (
	// 						<FieldOption
	// 							type='select'
	// 							key={ index }
	// 							option={ filterOption }
	// 							index={ index }
	// 							onChangeOption={ onChangeFilterOption }
	// 							onAddOption={ addNewFilterOption }
	// 							isInFocus={ index === inFocus && isSelected }
	// 							isSelected={ isSelected }
	// 						/>
	// 					) ) } */}
	// 					<PanelBody
	// 						key={ mapDivision }
	// 						title={ isSelected ? (
	// 							<SelectControl
	// 								label="Division"
	// 								value={ mapDivision }
	// 								options={ divisionOptions }
	// 								onChange={ ( selectedDivision ) => setMapDivision( selectedDivision ) }
	// 							/>
	// 							) : ( mapDivision )
	// 						}
	// 						initialOpen={ false }>
	// 						<PanelRow>
	// 						<InfoWindowForm filterOptions={ filterOptions } />
	// 						</PanelRow>
	// 					</PanelBody>
	// 					<Button
	// 						className="coblocks-field-multiple__add-option"
	// 						icon="insert"
	// 						label={ __( "Add filter option", 'interactive-map' ) }
	// 						onClick={ addNewFilterOption }
	// 					>
	// 						{ __( "Add filter option", 'interactive-map' ) }
	// 					</Button>
	// 				</Panel>

	// 				{/* { filterOptions.length >= 1 && (
	// 					<Panel header={ `${ divisionName.singular } settings` }>
	// 						{ divisionControls }
	// 					</Panel>
	// 				)} */}
	// 			</Modal>
	// 		) }

	// 	</>
	// );

	const mapColorStyle = mapColor !== undefined ? {
		"--cjd-blocks--interactive-map--map-color": `var(--wp--preset--color--${mapColor})`
	} : {};

	const highlightColorStyle = highlightColor !== undefined ? {
		"--cjd-blocks--interactive-map--highlight-color": `var(--wp--preset--color--${highlightColor})`
	} : {};

	return (
		<div { ...useBlockProps( ) } style={ Object.assign( {}, mapColorStyle, highlightColorStyle ) } >
			{ controls }
			{/* { filterControl } */}
			<svg xmlns="http://www.w3.org/2000/svg"
				id={ `cjd-blocks-interactive-map-${ mapId }` }
				viewBox={ viewBox }
				preserveAspectRatio="true"
			>
				{ divisionSet }
				{/* { borders.render() } */}
				{ separators.render() }
				{ infoWindowSet }
			</svg>
		</div>
	);
}

export default Edit;
