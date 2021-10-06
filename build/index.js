/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cjd-blocks-option.js":
/*!**********************************!*\
  !*** ./src/cjd-blocks-option.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External dependencies
 */




const FieldOption = props => {
  const {
    isInFocus,
    index,
    onAddOption,
    isSelected,
    option,
    type
  } = props;
  const textInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isInFocus) {
      textInput.current.focus();
    }
  }, [isInFocus]);

  const onChangeOption = event => {
    props.onChangeOption(index, event.target.value);
  };

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      onAddOption(index);
      event.preventDefault();
      return;
    }

    if (event.key === 'Backspace' && event.target.value === '') {
      props.onChangeOption(index);
      event.preventDefault();
    }
  };

  const onDeleteOption = () => {
    props.onChangeOption(index);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "coblocks-option"
  }, type && type !== 'select' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "coblocks-option__type",
    type: type,
    disabled: true
  }), !isSelected && type && type !== 'select' && option, isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    className: "coblocks-option__input",
    value: option,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Write option…', 'coblocks'),
    onChange: onChangeOption,
    onKeyDown: onKeyPress,
    ref: textInput
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "coblocks-option__remove",
    icon: "trash",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Option', 'coblocks'),
    onClick: onDeleteOption
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FieldOption);

/***/ }),

/***/ "./src/division.js":
/*!*************************!*\
  !*** ./src/division.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



const Division = ({
  id,
  ofMap,
  path,
  isHighlighted
}) => {
  const divisionClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('division', 'has-info-window', {
    'highlight': isHighlighted
  }); // const [ isHovered, setIsHovered ] = useState( false );
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

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: id,
    class: divisionClasses,
    "aria-labelledby": `info-window-title-${id}`,
    "aria-describedby": `info-window-desc-${id}`,
    focusable: "true"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: path
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Division);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _maps_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./maps.js */ "./src/maps.js");
/* harmony import */ var _division_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./division.js */ "./src/division.js");
/* harmony import */ var _cjd_blocks_option__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cjd-blocks-option */ "./src/cjd-blocks-option.js");
/* harmony import */ var _info_window__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./info-window */ "./src/info-window.js");
/* harmony import */ var _info_window_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./info-window-form */ "./src/info-window-form.js");




/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */




/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */







/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit({
  clientId,
  attributes,
  setAttributes,
  isSelected,
  setMapColor,
  setHighlightColor
}) {
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
  setAttributes({
    mapId: clientId
  });
  const {
    name,
    divisionName,
    viewBox,
    divisions,
    borders,
    separators
  } = _maps_js__WEBPACK_IMPORTED_MODULE_8__["default"][mapOf]; // const formAttributes = {};
  // formAttributes[ "Projects Completed" ] = '';
  // formAttributes[ "Project Types" ] = [];

  const controls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Color settings'),
    initialOpen: false,
    colorSettings: [{
      value: mapColor !== undefined ? mapColor.color : defaultMapColor,
      onChange: setMapColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Map Color')
    }, {
      value: highlightColor !== undefined ? highlightColor.color : defaultHighlightColor,
      onChange: setHighlightColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Highlight Color')
    }]
  }))); //	const [ inFocus, setInFocus ] = useState( 0 );
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
  const infoWindowSet = []; //const divisionOptions = {};
  // for ( const [ key, division ] of Object.entries( divisions ) ) {
  // 	divisionOptions =
  // }
  // const divisionOptions = [];
  // for ( const [ key, division ] of Object.entries( divisions ) ) {
  // 	divisionOptions.push( { label: division.name, value: key } );
  // }

  for (const [key, division] of Object.entries(divisions)) {
    // const cleanFilterOptions = filterOptions.filter( function( e ) { return e === 0 || e } );
    // const [ projectsCompleted, setProjectsCompleted ] = useState( '' );
    // const [ mapDivision, setMapDivision ] = useState( [] );
    let hasInformation = false; // divisionControls.push(
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

    if (infoWindows.hasOwnProperty([key])) {
      hasInformation = true;

      if (hasInformation && infoWindows[key]["Projects Completed"] !== '') {
        content.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
          class: "info-window-subtitle"
        }, "Projects Completed: "), infoWindows[key]["Projects Completed"]));
      }

      if (hasInformation && infoWindows[key]["Project Types"] !== []) {
        const listItems = infoWindows[key]["Project Types"].map(item => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
          key: item
        }, item));
        content.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
          class: "info-window-subtitle"
        }, "Project Types"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("ul", null, listItems)));
      }
    }

    ;
    infoWindowSet.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_info_window__WEBPACK_IMPORTED_MODULE_11__["default"], {
      infoFor: key,
      title: division.name,
      center: division.center,
      content: content
    }));
    divisionSet.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_division_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: key,
      name: division.name,
      path: division.path,
      ofMap: mapId,
      isHighlighted: hasInformation
    }));
  } // for ( const [ division, information ] of Object.entries( mapDivisions ) ) {
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)(), {
    style: Object.assign({}, mapColorStyle, highlightColorStyle)
  }), controls, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: `cjd-blocks-interactive-map-${mapId}`,
    viewBox: viewBox,
    preserveAspectRatio: "true"
  }, divisionSet, separators.render(), infoWindowSet));
}

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('cjd-blocks/interactive-map', {
  /**
   * @see ./edit.js
   */
  edit: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.withColors)({
    mapColor: 'color',
    highlightColor: 'color'
  })(_edit__WEBPACK_IMPORTED_MODULE_4__["default"]),

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/info-window-form.js":
/*!*********************************!*\
  !*** ./src/info-window-form.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);




function InfoWindowForm({
  filterOptions
}) {
  const cleanFilterOptions = filterOptions.filter(function (e) {
    return e === 0 || e;
  });
  const [projectsCompleted, setProjectsCompleted] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Projects Completed",
    value: projectsCompleted,
    onChange: setProjectsCompleted
  }), cleanFilterOptions.length > 0 && cleanFilterOptions.map((filterOption, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
    key: index,
    label: filterOption
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (InfoWindowForm);

/***/ }),

/***/ "./src/info-window.js":
/*!****************************!*\
  !*** ./src/info-window.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


function InfoWindow({
  infoFor,
  title,
  content,
  center
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("foreignObject", {
    id: `info-window-for-${infoFor}`,
    class: "info-window-container screen-reader-text",
    width: "200",
    height: "300",
    x: center ? `${center.x}` : ``,
    y: center ? `${center.y}` : ``,
    "data-info-for": `${infoFor}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "info-window"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", {
    id: `info-window-title-${infoFor}`,
    class: "info-window-title"
  }, title), content && content.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: `info-window-desc-${infoFor}`,
    class: "info-window-desc"
  }, content)));
}

/* harmony default export */ __webpack_exports__["default"] = (InfoWindow);

/***/ }),

/***/ "./src/maps.js":
/*!*********************!*\
  !*** ./src/maps.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const maps = [];
maps.usa = {
  name: "United States of America",
  divisionName: {
    "singular": "State",
    "plural": "States"
  },
  viewBox: "0 0 959 593",
  divisions: {
    al: {
      name: "Alabama",
      path: "m643 467.4.4-7.3-.9-1.2-1.7-.7-2.5-2.8.5-2.9 48.8-5.1-.7-2.2-1.5-1.5-.5-1.4.6-6.3-2.4-5.7.5-2.6.3-3.7 2.2-3.8-.2-1.1-1.7-1v-3.2l-1.8-1.9-2.9-6.1-12.9-45.8-45.7 4 1.3 2-1.3 67 4.4 33.2.9-.5 1.3.1.6.4.8-.1 2-3.8v-2.3l1.1-1.1 1.4.5 3.4 6.4v.9l-3.3 2.2 3.5-.4 4.9-1.6z",
      center: {
        x: "654.2499",
        y: "415.55"
      }
    },
    ak: {
      name: "Alaska",
      path: "M15.8 572h2.4l.7.7-1 1.2-1.9.2-2.5 1.3-3.7-.1 2.2-.9.3-1.1 2.5-.3zm8.3-1.7 1.3.5h.9l.5 1.2.3-.6.9.2 1.1 1.5v.5l-4.2 1.9-2.4-.1-1-.5-1.1.7h-2l-1.1-1.4 4.7-.5zm5.4-.1 1 .1.7.7v1l-1.3.1-.9-1.1zm2.5.3 1.3-.1-.1 1-1.1.6zm.3 2.2 3.4-.1.2 1.1-1.3.1-.3-.5-.8.6-.4-.6-.9-.2zm166.3 7.6 2.1.1-1 1.9-1.1-.1-.4-.8.5-1.3m-1.1-2.9.6-1.3-.2-2.3 2.4-.5 4.5 4.4 1.3 3.4 1.9 1.6.3 5.1H207l-1.3-2.3-3.1-2.4h-.6l1.1 2.8 1.7.2.2 2.1-.9.1-4.1-4.4-.1-.9 1.9-1v-1l-.5-.8-1.6-.6-1.7-1.3 1.4.1.5-.4-.6-.9-.6.5zm-3.6-9.1 1.3.1 2.4 2.5-.2.8-.8-.1-.1 1.8.5.5v1.5l-.8.3-.4 1.2-.8-.4-.4-2.2 1.1-1.4-2.1-2.2.1-1.2zm1.5-1.5 1.9.2 2.5.1 3.4 3.2-.2.5-1.1.6-1.1-.2-.1-.7-1.2-1.6-.3.7 1 1.3-.2 1.2-.8-.1-1.3.2-.1-1.7-2.6-2.8zm-12.7-8.9.9-.4h1.6l.7-.5 4.1 2.2.1 1.5-.5.5h-.8l-1.4-.7 1.1 1.3h1.8l.5 2h-.9l-2.2-1.5-1.1-.2.6 1.3.1.9.8-.6 1.7 1.2 1.3-.1-.2.8 1.9 4.3v3.4l.4 2.1-.8.3-1.2-2-.5-1.5-1.6-1.6-.2-2.7-.6-1.7h-.7l.3 1.1v.5l-1.4 1 .1-3.3-1.6-1.6-1.3-2.3-1.2-1.2zm7.2-2.3 1.1 1.8 2.4-.1 1 2.1-.6.6 2 3.2v1.3l-1.2.8v.7l-2 1.9-.5-1.4-.1-1.3.6-.7v-1.1l-1.5-1.9-.5-3.7-.9-1.5zm-56.7-18.3-4 4.1v1.6l2.1-.8.8-1.9 2.2-2.4zm-31.6 16.6v.6l1.8 1.2.2-1.4.6.9 3.5.1.7-.6.2-1.8-.5-.7h-1.4v-.8l.4-.6v-.4l-1.5-.3-3.3 3.6zm-8.1 6.2 1.5 5.8h2.1l2.4-2.5.3 1.2 6.3-4 .7-1-1-1.1v-.7l.5-1.3-.9-.1-2 1V556l-2.7-.6-2.4.3-.2 3.4-.8-2-1.5-.1-1 .6zm-2.2 8.2.1-.7 2.1-1.3.6.3 1.3.2 1.3 1.2-2.2-.2-.4-.6-1 .6zm-5.2 3.3-1.1.8 1.5 1.4.8-.7-.1-1.3zm-6.3-7.9 1.4.1.4.6-1.8.1zM66 575.4v.5l.7.1-.1-.6zm-.4-3.2-1 1v.5l.7 1.1 1-1-.7-.1zm-2-.8-.3 1-1.3.1-.4.2v1.3l-.5.9h.6l.7-.9.8-.1.9-1 .2-1.3zm-4.4-2-.2 1.8 1.4.8 1.2-.6v-1l1.7-.3-.1-.6-.9-.2-.7.6-.9-.5zm-4.9-.1 1 .7-.3 1.2-1.4-1.1zm-4.2 1.3 1.4.1-.7.8zm-3.5 3 1.8 1.1-1.7.1zm-25.4-31.2 1.2.6-.8.6zm-.7-6.3.4 1.2.8-1.2zm24.3-19.3 1.5-.1.9.4 1.1-.5 1.3-.1 1.6.8.8 1.9-.1.9-1.2 2-2.4-.2-2.1-1.8-1-.4-1.1-2zm-21.1-14.4.1 1.9 2 2v.5l-.8-.2-1.7-.8-.3-1.1-.3-1.6zM42 479.1v1.2l1.9 1.8h2.3l.6 1.1v1.6l2.1 1.9 1.8 1.2-.1.7-.7 1.1-1.4-1.2-2.1.1-.8-.8-.9-2.1-1.5-2.2-2.6-.1-1-.7 1-2.1zm16.8-4.5h1l.1 1.1h-1zM75 494.3l.9.1v1.2l-1.7-.5zM202.8 572l-1.2.4-.1 1.1h1.2zm-157.6-4.5-1.3-.4-4.1.6-2.8 1.4-.1 1.9 1.9.7 1.5-.9 1.7-.1 4.7 1.4.1-1.3-1.6-1.1zm2.1 2.3-.4-1.4 1.2.2.1 1.4H50l.4-2.5.3 2.4 2.5-.1 3.2-3.3.8.1-.7 1.3 1.4.9 4.2-.2 2.6-1.2 1.4-.1.3 1.5.6-.5.4-1.4 5.9.2 1.9-1.6-1.3-1.1.6-1.2 2.6.2-.2-1.2 2.5.2.7-1.1 1.1.2 4.6-1.9.2-1.7 5.6-2.4 2-1.9 1.2-.6 1.3.8 2.3-.9 1.1-1.9.5-1.3 1.7-.9 1.5-.7.4-1.4-1.1-1.7-2.2-.2-.2-1.3.8-1.6 1.4-.2 1.3-1.5 1.9-.1 3.4-3.2.4-1.4 1.5-2.3 3.8-4.1 2.5-.9 1.9-.9 2.1.8 1.4 2.6H121l-1.4-1.5-3 2-1.7.1-.2 3.1-3.1 4.9.6 2h2.3l-.6 1-1.4.1-2.4 1.8v.9l1.9 1 3.4-.6 1.4-1.7 1.4.1 3-1.7.5-2.3 1.6-.1 6.3.8 1-1.1 1-4.5-1.6 1.1.6-2.2-1.6-1.4.8-1.5.1 1.5h3.4l.7-1 1.6-.1-.3 1.7 1.9.1-1.9 1.3 4.1 1.1-3.5.4-1.3 1.2.9 1.4 4.6-1.7 2.3 1.7.7-.9.6 1.4 4 2.3h2.9l3.9-.5 4.3 1.1 2 1.9 4.5.4 1.8-1.5.8 2.4-1.8.7 1.2 1.2 7.4 3.8 1.4 2.5 5.4 4.1 3.3-2-.6-2.2-3.5-2 3.1 1.2.5-.7.9 1.3v2.7l2.1-.6 2.1 1.8-2.5-9.8 1.2 1.3 1.4 6 2.2 2.5 2.4-.4 1.8 3.5h.9l.6 5.6 3.4.5 1.6 2.2 1.8 1.1.4 2.8-1.8 2.6 2.9 1.6 1.2-2.4-.2 3.1-.8.9 1.4 1.7.7-2.4-.2-1.2.8.2.6 2.3-1 1.4.6 2.6.5.4.3-1.6.7.6-.3 2 1.2.2-.4.9 1.7-.1v-1h-1l.1-1.7-.8-.6 1.7-.3.5-.8v-1.6l.5 1.3-.6 1.8 1.2 3.9 1.8.1 2.2-4.2.1-1.9-1.3-4-.1-1.2.5-1.2-.7-.7-1.7.1-2.5-2h-1.7l-2-1.4h-1.5l-.5-1.6-1.4-.3-.2-1.5-1-.5.1-1.7-5.1-7.4-1.8-1.5V554l-4.3-3.5-.7-1.1-1.6-2-1.9-.6v-2.2l-1.2-1.3-1.7-.7-2.1 1.3-1.6 2.1-.4 2.4-1.5.1-2.5 2.7-.8-.3v-2.5l-2.4-2.2-2.3-2-.5-2-2.5-1.3.2-2.2-2.8-.1-.7 1.1h-1.2l-.7-.7-1.2.8-1.8-1.2v-85.8l-6.9-4.1-1.8-.5-2.2 1.1-2.2.1-2.3-1.6-4.3-.6-5.8-3.6-5.7-.4-2 .5-.2-1.8-1.8-.7 1.1-1-.2-.9-3.2-1.1h-2.4l-.4.4-.9-.6.1-2.6-.8-.9-2.5 2.9-.8-.1v-.8l1.7-.8v-.8l-1.9-2.4-1.1-.1-4.5 3.1h-3.9l.4-.9-1.8-.1-5.2 3.4h-1.8l-.6-.8-2.7 1.5-3.6 3.7-2.8 2.7-1.5 1.2-2.6.1-2.2-.4-2.3-1.3-2.8 3.9-.1 2.4 2.6 2.4 2.1 4.5.2 5.3 2.9 2 3.4.4.7.8-1.5 2.3.7 2.7-1.7-2.6v-2.4l-1.5-.3.1 1.2.7 2.1 2.9 3.7h-1.4l-2.2 1.1-6.2-2.5-.1-2 1.4-1.3v-1.4l-2.1-.5-2.3.2-4.8.2 1.5 2.3-1.9-1.8-8.4 1.2-.8 1.5 4.9 4.7-.8 1.4-.3 2-.7.8-.1 1.9 4.4 3.6 4.1.2 4.6 1.9h2l.8-.6 3.8.1.1-.8 1.2 1.1.1 2-2.5-.1.1 3.3.5 3.2-2.9 2.7-1.9-.1-2-.8-1 .1-3.1 2.1-1.7.2-1.4-2.8H66l-2.2 2-.5 1.8-3.3 1.8-5.3 4.3-.3 3.1.7 2.2 1 1.2 1-.4.9 1-.8.6-1.5.9 1.1 1.5-2.6 1.1.8 2.2 1.7 2.3.8 4.1 4 1.5 2.6-.8 1.7-1.1.5 2.1.3 4.4-1.9 1.4v4.4l-.6.9h-1.7l1.7 1.2 2.1-.1.4-1 4.6-.6 2 2.6 1.3-.7 1.3 5.1 1 .5 1-.7.1-2.4.9-1 .7 1.1.2 1.6 1.6.4 4.7-1.2.2 1.2-2 1.1-1.6 1.7-2.8 7-4.3 2-1.4 1.5-.3 1.4-1-.6-9.3 3.3-1.8 4.1-1.3-.4.5-1.1-1.5-1.4-3.5-.2-5.3 3.2-2.2 1.3h-2.3l-.5 2.4z",
      center: {
        x: 114,
        y: 510.2499
      }
    },
    az: {
      name: "Arizona",
      path: "m139.6 387.6 3-2.2.8-2.4-1-1.6-1.8-.2-1.1-1.6 1.1-6.9 1.6-.3 2.4-3.2 1.6-7 2.4-3.6 4.8-1.7 1.3-1.3-.4-1.9-2.3-2.5-1.2-5.8-1.4-1.8-1.3-3.4.9-2.1 1.4-3 .5-2.9-.5-4.9 1-13.6 3.5-.6 3.7 1.4 1.2 2.7h2l2.4-2.9 3.4-17.5 46.2 8.2 40 6-17.4 124.1-37.3-5.4-64.2-37.5.5-2.9 2-1.8z",
      center: {
        x: 194.35,
        y: 365.95
      }
    },
    ar: {
      name: "Arkansas",
      path: "m584.2 367 .9-2.2 1.2.5.7-1-.8-.7.3-1.5-1.1-.9.6-1-.1-1.5-1.1-.1.8-.8 1.3.8.3-1.4-.4-1.1.1-.7 2 .6-.4-1.5 1.6-1.3-.5-.9-1.1.1-.6-.9.9-.9 1.6-.2.5-.8 1.4-.2-.1-.8-.9-.9v-.5h1.5l.4-.7-1.4-1-.1-.6-11.2.8 2.8-5.1 1.7-1.5v-2.2l-1.6-2.5-39.8 2-39.1.7 4.1 24.4-.7 39 2.6 2.3 2.8-1.3 3.2.8.2 11.9 52.3-1.3 1.2-1.5.5-3-1.5-2.3-.5-2.2.9-.7v-.8l-1.7-1.1-.1-.7 1.6-.9-1.2-1.1 1.7-7.1 3.4-1.6v-.8l-1.1-1.4 2.9-5.4h1.9l1.5-1.2-.3-5.2 3.1-4.5 1.8-.6-.5-3.1z",
      center: {
        x: 548.8501,
        y: 374.3
      }
    },
    ca: {
      name: "California",
      path: "m69.4 365.6 3.4 5.2-1.4.1-1.8-1.9zm1.9-9.8 1.8 4.1 2.6 1 .7-.6-1.3-2.5-2.6-2.4zm-19.9-19v2.4l2 1.2 4.4-.2 1-1-3.1-.2zm-5.9.1 3.3.5 1.4 2.2h-3.8zm47.9 45.5-1-3 .2-3-.4-7.9-1.8-4.8-1.2-1.4-.6-1.5-7-8.6-3.6.1-2-1.9 1.1-1.8-.7-3.7-2.2-1.2-3.9-.6-2.8-1.3-1.5-1.9-4.5-6.6-2.7-2.2-3.7-.5-3.1-2.3-4.7-1.5-2.8-.3L42 324l.2-2.8.8-4.8 1.8-5.1-1.4-1.6-4-9.4-2.7-3.7-.4-3-1.6-2.3.2-2.5-2-5-2.9-2.7.6-7.1 2.4-.8 1.8-3.1-.4-3.2-1-.9h-2.5l-2.5-3.3-1.5-3.5v-7.5l1.2-4.2.2-2.1 2.5.2-.1 1.6-.8.7v2.5l3.7 3.2v-4.7l-1.4-3.4.5-1.1-1-1.7 2.8-1.5-1.9-3-1.4.5-1.5 3.8.5 1.3-.8 1-.9-.1-5.4-6.1.7-5.6-1.1-3.9-6.5-12.8.8-10.7 2.3-3.6.2-6.4-5.5-11.1.3-5.2 6.9-7.5 1.7-2.4-.1-1.4 4-9.2.1-8.4.9-2.5 66.1 18.6-16.4 63.1 1.1 3.5 70.4 105-.9 2.1 1.3 3.4 1.4 1.8 1.2 5.8 2.3 2.5.4 1.9-1.3 1.3-4.8 1.7-2.4 3.6-1.6 7-2.4 3.2-1.6.3-1.1 6.9 1.1 1.6 1.8.2 1 1.6-.8 2.4-3 2.2-2.2-.1z",
      center: {
        x: 84.35,
        y: 267.7501
      }
    },
    co: {
      name: "Colorado",
      path: "m374.6 323.3-16.5-1-51.7-4.8-52.6-6.5 11.5-88.3 44.9 5.7 37.5 3.4 33.1 2.4-1.4 22.1z",
      center: {
        x: 317.3,
        y: 273
      }
    },
    ct: {
      name: "Connecticut",
      path: "m873.5 178.9.4-1.1-3.2-12.3-.1-.3-14.9 3.4v.7l-.9.3-.5-.7-10.5 2.4 2.8 16.3 1.8 1.5-3.5 3.4 1.7 2.2 5.4-4.5 1.7-1.3h.8l2.4-3.1 1.4.1 2.9-1.1h2.1l5.3-2.7 2.8-.9 1-1 1.5.5z",
      center: {
        x: 858.85,
        y: 179.95
      }
    },
    de: {
      name: "Delaware",
      path: "m822.2 226.6-1.6.3-1.5 1.1-1.2 2.1 7.6 27.1 10.9-2.3-2.2-7.6-1.1.5-3.3-2.6-.5-1.7-1.8-1-.2-3.7-2.1-2.2-1.1-.8-1.2-1.1-.4-3.2.3-2.1 1-2.2z",
      center: {
        x: 827.15,
        y: 241.9
      }
    },
    fl: {
      name: "Florida",
      path: "m751.7 445.1-4-.7-1.7-.9-2.2 1.4v2.5l1.4 2.1-.5 4.3-2.1.6-1-1.1-.6-3.2-50.1 3.3-3.3-6-48.8 5.1-.5 2.9 2.5 2.8 1.7.7.9 1.2-.4 7.3-1.1.6.5.4 1-.3.7-.8 10.5-2.7 9.2-.5 8.1 1.9 8.5 5 2.4.8 2.2 2-.1 2.7h2.4l1.9-1 2.5.1 2-.8 2.9-2 3.1-2.9 1.1-.4.6.5h1.4l.5-.8-.5-1.2-.6-.6.2-.8 2-1.1 5-.4.8 1 1 .1 2.3 1 3 1.8 1.2 1.7 1.1 1.2 2.8 1.4v2.4l2.8 1.9 1 .1 1.6 1.4.7 1.6 1 .2.8 2.1.7.6 1-1.1 2.9.1.5 1.4 1.1.9v1.3l2.9 2.2.2 9.6-1.8 5.8 1 1.2-.2 3.4-.8 1.4.7 1.2 2.3 2.3.3 1.5.8 1-.4-1.9 1.3-.6.8-3.6-3-1.2.1-.6 2.6-.4.9 2.6 1.1.6.1-2 1.1.3.6.8-.1.7-2.9 4.2-.2 1.1-1.7 1.9v1.1l3.7 3.8 5.3 7.9 1.8 2.1v1.8l2.8 4.6 2.3.6.7-1.2-2.1.3-3-4.5.2-1.4 1.5-.8v-1.5l-.6-1.3.9-.9.4.9.7.5v4l-1.2-.6-.8.9 1.4 1.6 1 2.6 1.2-.6 2.3 1.2 2.1 2.2 1.6 5.1 3.1 4.8.8-1.3 2.8-.5 3.2 1.3.3 1.7 3.3 3.8.1 1.1 2.2 2.7-.7.5v2.7l2.7 1.4h1.5l2.7-1.8 1.5.3 1.1.4 2.3-1.7.2-.7 1.2.3 2.4-1.7 1.3-2.3-.7-3.2-.2-1.3 1.1-4 .6-.2.6 1.6.8-1.8-.8-7.2-.4-10.5-1-6.8-.7-1.7-6.6-11.1-5.2-9.1-2.2-3.3-1.3-3.6-.2-3.4.9-.3v-.9l-1.1-2.2-4-4-7.6-9.7-5.7-10.4-4.3-10.7-.6-3.7-1.2-1-.5-3.8zm9.2 134.5 1.7-.1-.7-1zm7.3-1.1v-.7l1.6-.2 3.7-3.3 1.5-.6 2.4-.9.3 1.3 1.7.8-2.6 1.2h-2.4l-3.9 2.5zm17.2-7.6-3 1.4-1 1.3 1.1.1zm3.8-2.9-1.1.3-1.4 2 1.1-.2 1.5-1.6zm8.3-15.7-1.7 5.6-.8 1-1 2.6-1.2 1.6-.7 1.7-1.9 2.2v.9l2.7-2.8 2.4-3.5.6-2 2.1-4.9z",
      center: {
        x: 718.15,
        y: 511.55
      }
    },
    ga: {
      name: "Georgia",
      path: "M761.8 414.1v1.4l-4.2 6.2-1.2.2 1.5.5v2l-.9 1.1-.6 6-2.3 6.2.5 2 .7 5.1-3.6.3-4-.7-1.7-.9-2.2 1.4v2.5l1.4 2.1-.5 4.3-2.1.6-1-1.1-.6-3.2-50.1 3.3-3.3-6-.7-2.2-1.5-1.5-.5-1.4.6-6.3-2.4-5.7.5-2.6.3-3.7 2.2-3.8-.2-1.1-1.7-1v-3.2l-1.8-1.9-2.9-6.1-12.9-45.8 22.9-2.9 21.4-3-.1 1.9-1.9 1-1.4 3.2.2 1.3 6.1 3.8 2.6-.3 3.1 4 .4 1.7 4.2 5.1 2.6 1.7 1.4.2 2.2 1.6 1.1 2.2 2 1.6 1.8.5 2.7 2.7.1 1.4 2.6 2.8 5 2.3 3.6 6.7.3 2.7 3.9 2.1 2.5 4.8.8 3.1 4.2.4z",
      center: {
        x: 714.2,
        y: 404.8
      }
    },
    hi: {
      name: "Hawaii",
      path: "m317 553.7-.2 3.2 1.7 1.9.1 1.2-4.8 4.5-.1 1.2 1.9 3.2 1.7 4.2v2.6l-.5 1.2.1 3.4 4.1 2.1 1.1 1.1 1.2-1.1 2.1-3.6 4.5-2.9 3.3-.5 2.5-1 1.7-1.2 3.2-3.5-2.8-1.1-1.4-1.4.1-1.7-.5-.6h-2l.2-2.5-.7-1.2-2.6-2.3-4.5-1.9-2.8-.2-3.3-2.7-1.2-.6zm-15.3-17-1.1 1.5-.1 1.7 2.7 2.4 1.9.5.6 1 .4 3 3.6.2 5.3-2.6-.1-2.5-1.4-.5-3.5-2.6-1.8-.3-2.9 1.3-1.5-2.7zm-1.5 11.5.9-1.4 2.5-.3.6 1.8zm-7-8.7 1.7 4 3.1-.6.3-2-1.4-1.5zm-4.1-6.7-1.1 2.4h5l4.8 1.6 2.5-1.6.2-1.5-4.8.2zm-16-10.6-1.9 2.1-2.9.6.8 2.2 2.2 2.8.1 1 2.1-.3 2.3.1 1.7 1.2 3.5-.8v-.7l-1-.8-.5-2.1-.8-.3-.5 1-1.2-1.3.2-1.4-1.8-3.3-1.1-.7zm-31.8-12.4-4.2 2.9.2 2.3 2.4 1.2 1.9 1.3 2.7.4 2.6-2.2-.2-1.9.8-1.7v-1.4l-1-.9zm-10.8 4.8-.3 1.2-1.9.9-.6 1.8 1 .8 1.1-1.5 1.9-.6.4-2.6z",
      center: {
        x: 284.15,
        y: 546.65
      }
    },
    id: {
      name: "Idaho",
      path: "m165.3 183.1-24.4-5.4 8.5-37.3 2.9-5.8.4-2.1.8-.9-.9-2-2.9-1.2.2-4.2 4-5.8 2.5-.8 1.6-2.3-.1-1.6 1.8-1.6 3.2-5.5 4.2-4.8-.5-3.2-3.5-3.1-1.6-3.6 1.1-4.3-.7-4 12.7-56.1 14.2 3-4.8 22 3.7 7.4-1.6 4.8 3.6 4.8 1.9.7 3.9 8.3v2.1l2.3 3h.9l1.4 2.1h3.2v1.6l-7.1 17-.5 4.1 1.4.5 1.6 2.6 2.8-1.4 3.6-2.4 1.9 1.9.5 2.5-.5 3.2 2.5 9.7 2.6 3.5 2.3 1.4.4 3v4.1l2.3 2.3 1.6-2.3 6.9 1.6 2.1-1.2 9 1.7 2.8-3.3 1.8-.6 1.2 1.8 1.6 4.1.9.1-8.5 54.8-47.9-8.2z",
      center: {
        x: 192.95,
        y: 111.75
      }
    },
    il: {
      name: "Illinois",
      path: "m623.5 265.9-1 5.2v2l2.4 3.5v.7l-.3.9.9 1.9-.3 2.4-1.6 1.8-1.3 4.2-3.8 5.3-.1 7h-1l.9 1.9v.9l-2.2 2.7.1 1.1 1.5 2.2-.1.9-3.7.6-.6 1.2-1.2-.6-1 .5-.4 3.3 1.7 1.8-.4 2.4-1.5.3-6.9-3-4 3.7.3 1.8h-2.8l-1.4-1.5-1.8-3.8v-1.9l.8-.6.1-1.3-1.7-1.9-.9-2.5-2.7-4.1-4.8-1.3-7.4-7.1-.4-2.4 2.8-7.6-.4-1.9 1.2-1.1v-1.3l-2.8-1.5-3-.7-3.4 1.2-1.3-2.3.6-1.9-.7-2.4-8.6-8.4-2.2-1.5-2.5-5.9-1.2-5.4 1.4-3.7.7-.7.1-2.3-.7-.9 1-1.5 1.8-.6.9-.3 1-1.2v-2.4l1.7-2.4.5-.5.1-3.5-.9-1.4-1-.3-1.1-1.6 1-4 3-.8h2.4l4.2-1.8 1.7-2.2.1-2.4 1.1-1.3 1.3-3.2-.1-2.6-2.8-3.5h-1.2l-.9-1.1.2-1.6-1.7-1.7-2.5-1.3.5-.6 45.9-2.8.1 4.6 3.4 4.6 1.2 4.1 1.6 3.2z",
      center: {
        x: 590.45,
        y: 260.85
      }
    },
    in: {
      name: "Indiana",
      path: "m629.2 214.8-5.1 2.3-4.7-1.4 4.1 50.2-1 5.2v2l2.4 3.5v.7l-.3.9.9 1.9-.3 2.4-1.6 1.8-1.3 4.2-3.8 5.3-.1 7h-1l.9 1.9 1.1.8.6-1-.7-1.7 4.6-.5.2 1.2 1.1.2.4-.9-.6-1.3.3-.8 1.3.8 1.7-.4 1.7.6 3.4 2.1 1.8-2.8 3.5-2.2 3 3.3 1.6-2.1.3-2.7 3.8-2.3.2 1.3 1.9 1.2 3-.2 1.2-.7.1-3.4 2.5-3.7 4.6-4.4-.1-1.7 1.2-3.8 2.2 1 6.7-4.5-.4-1.7-1.5-2.1 1-1.9-6.6-57.2-.1-1.4-32.4 3.4z",
      center: {
        x: 644.1501,
        y: 256.65
      }
    },
    ia: {
      name: "Iowa",
      path: "m556.9 183 2.1 1.6.6 1.1-1.6 3.3-.1 2.5 2 5.5 2.7 1.5 3.3.7 1.3 2.8-.5.6 2.5 1.3 1.7 1.7-.2 1.6.9 1.1h1.2l2.8 3.5.1 2.6-1.3 3.2-1.1 1.3-.1 2.4-1.7 2.2-4.2 1.8h-2.4l-3 .8-1 4 1.1 1.6 1 .3.9 1.4-.1 3.5-.5.5-1.7 2.4v2.4l-1 1.2-.9.3-1.8.6-1 1.5.7.9-.1 2.3-.7.7-1.5-.8-1.1-1.1-.6-1.6-1.7-1.3-14.3.8-27.2 1.2-25.9-.1-1.8-4.4.7-2.2-.8-3.3.2-2.9-1.3-.7-.4-6.1-2.8-5-.2-3.7-2.2-4.3-1.3-3.7v-1.4l-.6-1.7v-2.3l-.5-.9-.7-1.7-.3-1.3-1.3-1.2 1-4.3 1.7-5.1-.7-2-1.3-.4-.4-1.6 1-.5.1-1.1-1.3-1.5.1-1.6 2.2.1h28.2l36.3-.9 18.6-.7z",
      center: {
        x: 523.4501,
        y: 215.05
      }
    },
    ks: {
      name: "Kansas",
      path: "m459.1 259.5-43.7-1.2-36-2-4.8 67 67.7 2.9 62 .1-.5-48.1-3.2-.7-2.6-4.7-2.5-2.5.5-2.3 2.7-2.6.1-1.2-1.5-2.1-.9 1-2-.6-2.9-3z",
      center: {
        x: 439.45,
        y: 291.3
      }
    },
    ky: {
      name: "Kentucky",
      path: "m692.1 322.5-20.5 1.4-5.2.8-17.4 1-2.6.8-22.6 2-.7-.6h-3.7l1.2 3.2-.6.9-23.3 1.5 1-2.7 1.4.9.7-.4 1.2-4.1-1-1 1-2 .2-.9-1.3-.8-.3-1.8 4-3.7 6.9 3 1.5-.3.4-2.4-1.7-1.8.4-3.3 1-.5 1.2.6.6-1.2 3.7-.6.1-.9-1.5-2.2-.1-1.1 2.2-2.7v-.9l1.1.8.6-1-.7-1.7 4.6-.5.2 1.2 1.1.2.4-.9-.6-1.3.3-.8 1.3.8 1.7-.4 1.7.6 3.4 2.1 1.8-2.8 3.5-2.2 3 3.3 1.6-2.1.3-2.7 3.8-2.3.2 1.3 1.9 1.2 3-.2 1.2-.7.1-3.4 2.5-3.7 4.6-4.4-.1-1.7 1.2-3.8 2.2 1 6.7-4.5-.4-1.7-1.5-2.1 1-1.9 1.3.5 2.2.1 1.9-.8 2.9 1.2 2.2 3.4v1l4.1.7 2.3-.2 1.9 2.1 2.2.2v-1l1.9-.8 3 .8 1.2.8 1.3-.7h.9l.6-1.7 3.4-1.8.5.8.8 2.9 3.5 1.4 1.2 2.1-.1 1.1.6 1-.6 3.6 1.9 1.6.8 1.1 1 .6-.1.9 4.4 5.6h1.4l1.5 1.8 1.2.3 1.4-.1-4.9 6.6-2.9 1-3 3-.4 2.2-2.1 1.3-.1 1.7-1.4 1.4-1.8.5-.5 1.9-1 .4-6.9 4.2zm-98 11.3-.7-.7.2-1h1.1l.7.7-.3 1z",
      center: {
        x: 658.0502,
        y: 301
      }
    },
    la: {
      name: "Louisiana",
      path: "m602.5 472.8-1.2-1.8.3-1.3-4.8-6.8.9-4.6 1-1.4.1-1.4-36 2 1.7-11.9 2.4-4.8 6-8.4-1.8-2.5h2v-3.3l-2.4-2.5.5-1.7-1.2-1-1.6-7.1.6-1.4-52.3 1.3.5 19.9.7 3.4 2.6 2.8.7 5.4 3.8 4.6.8 4.3h1l-.1 7.3-3.3 6.4 1.3 2.3-1.3 1.5.7 3-.1 4.3-2.2 3.5-.1.8-1.7 1.2 1 1.8 1.2 1.1 1.6-1.3 5.3-.9 6.1-.1 9.6 3.8 8 1 1.5-1.4 1.8-.2 4.8 2.2 1.6-.4 1.1-1.5-4.2-1.8-2.2 1-1.1-.2-1.4-2 3.3-2.2 1.6-.1v1.7l1.5-.1 3.4-.3.4 2.3 1.1.4.6 1.9 4.8 1 1.7 1.6v.7h-1.2l-1.5 1.7 1.7 1.2 5.4 1 2.7 2.8 4.4-1-3.7.2-.1-.6 2.8-.7.2-1.8 1.2-.3V494l1.1.1v1.6l2.5.1.8-1.9.9.3.2 2.5 1.2.2-1.8 2 2.6-.9 2-1.1 2.9-3.3h-.7l-1.3 1.2-.4-.1-.5-.8.9-1.2v-2.3l1.1-.8.7.7 1-.8 1-.1.6 1.3-.6 1.9h2.4l5.1 1.7.5 1.3 1.6 1.4 2.8.1 1.3.7 1.8-1 .9-1.7v-1.7h-1.4L613 492l-1.1-1.1-3.2-.9-2.6.2-4.2-2.4v-2.3l1.3-1 2.4.6-3.1-1.6.2-.8h3.6l2.6-3.5-2.6-1.8.8-1.5-1.2-.8h-.8l-2 2.1v2.1l-.6.7-1.1-.1-1.6-1.4h-1.3V477l.6-.7.8.7 1.7-1.6.7-1.6.8-.3zm-10.3-2.7 1.9 1 .8 1.1 2.5.1 1.5.8.2 1.4-.4.6-.9-1.5-1.4 1.2-.9 1.4-2.8.8-1.6.1-3.7-1 .1-1.7 2-2 1.1-2.4zm-4.7 1.2v1.1l-1.8 2h-1.2v-2.2l1.6-1.5z",
      center: {
        x: 566.15,
        y: 456.25
      }
    },
    me: {
      name: "Maine",
      path: "m875 128.7.6 4 3.2 2 .8 2.2 2.3 1.4 1.4-.3 1-3-.8-2.9 1.6-.9.5-2.8-.6-1.3 3.3-1.9-2.2-2.3.9-2.4 1.4-2.2.5 3.2 1.6-2 1.3.9 1.2-.8v-1.7l3.2-1.3.3-2.9 2.5-.2 2.7-3.7v-.7l-.9-.5-.1-3.3.6-1.1.2 1.6 1-.5-.2-3.2-.9.3-.1 1.2-1.2-1.4.9-1.4.6.1 1.1-.4.5 2.8 2-.3 2.9.7v-1l-1.1-1.2 1.3.1.1-2.3.6.8.3 1.9 2.1 1.5.2-1 .9-.2-.3-.8.8-.6-.1-1.6-1.6-.2-2 .7 1.4-1.6.7-.8 1.3-.2.4 1.3 1.7 1.6.4-2.1 2.3-1.2-.9-1.3.1-1.7 1.1.5h.7l1.7-1.4.4-2.3 2.2.3.1-.7.2-1.6.5 1.4 1.5-1 2.3-4.1-.1-2.2-1.4-2-3-3.2H921l-.8 2.2-2.9-3 .3-.8v-1.5l-1.6-4.5-.8-.2-.7.4h-4.8l-.3-3.6-8.1-26-7.3-3.7-2.9-.1-6.7 6.6-2.7-1-1-3.9H878l-6.9 19.5.7 6.2-1.7 2.4-.4 4.6 1.3 3.7.8.2v1.6l-1.6 4.5-1.5 1.4-1.3 2.2-.4 7.8-2.4-1-1.5.4zm34.6-24.7-1 .8v1.3l.7-.8.9.8.4-.5 1.1.2-1-.8.4-.8zm-1.7 2.6-1 1.1.5.4-.1 1h1.1v-1.8zm-3-1.6.9 1.3 1 .5.3-1V104l-1.3-.7-.4 1.2zm-1 5-1.7-1.7 1.6-2.4.8.3.2 1.1 1 .8v1.1l-1 1z",
      center: {
        x: 895.25,
        y: 87.5
      }
    },
    md: {
      name: "Maryland",
      path: "M822.9 269.3v-1.7h-.8v1.8zm11.8-3.9 1.2-2.2.1-2.5-.6-.6-.7.9-.2 2.1-.8 1.4-.3 1.1-4.6 1.6-.7.8-1.3.2-.4.9-1.3.6-.3-2.5.4-.7-.8-.5.2-1.5-1.6 1v-2l1.2-.3-1.9-.4-.7-.8.4-1.3-.8-.6-.7 1.6.5.8-.7.6-1.1.5-2-1-.2-1.2-1-1.1-1.4-1.7 1.5-.8-1-.6v-.9l.6-1 1.7-.3-1.4-.6-.1-.7-1.3-.1-.4 1.1-.6.3.1-3.4 1-1 .8.7.1-1.6-1-.9-.9 1.1-1 1.4-.6-1 .2-2.4.9-1 .9.9 1.2-.7-.4-1.7-1 1-.9-2.1-.2-1.7 1.1-2.4 1.1-1.4 1.4-.2-.5-.8.5-.6-.3-.7.2-2.1-1.5.4-.8 1.1 1 1.3-2.6 3.6-.9-.4-.7.9-.6 2.2-1.8.5 1.3.6 1.3 1.3-.2.7.9 1.2-1.1 1 .5.3-.5 1.3v2.1l-.5 1.3.9 1.1.7 3.4 1.3 1.4 1.6 1.4.4 2.8 1.6 2 .4 1.4v1h-.7l-1.5-1.2-.4.2-1.2-.2-1.7-1.4-1.4-.3-1 .5-1.2-.3-.4.2-1.7-.8-1-1-1-1.3-.6-.2-.8.7-1.6 1.3-1.1-.8-.4-2.3.8-2.1-.3-.5.3-.4-.7-1 1-.1 1-.9.4-1.8 1.7-2.6-2.6-1.8-1 1.7-.6-.6h-1l-.6-.1-.4-.4.1-.5-1.7-.6-.8.3-1.2-.1-.7-.7-.5-.2-.2-.7.6-.8v-.9l-1.2-.2-1-.9-.9.1-1.6-.3-.9-.4.2-1.6-1-.5-.2-.7h-.7l-.8-1.2.2-1-2.6.4-2.2-1.6-1.4.3-.9 1.4h-1.3l-1.7 2.9-3.3.4-1.9-1-2.6 3.8-2.2-.3-3.1 3.9-.9 1.6-1.8 1.6-1.7-11.4 60.5-11.8 7.6 27.1 10.9-2.3v5.3l-.1 3.1-1 1.8zm-13.4-1.8-1.3.9.8 1.8 1.7.8-.4-1.6z",
      center: {
        x: 796.9,
        y: 249.9
      }
    },
    ma: {
      name: "Massachusetts",
      path: "M899.9 174.2h3.4l.9-.6.1-1.3-1.9-1.8.4 1-1.5 1.5H899l.1.8zm-9 1.8-1.2-.6 1-.8.6-2.1 1.2-1 .8-.2.6.9 1.1.2.6-.6.5 1.9-1.3.3-2.8.7zM856 152.6l18.4-3.8 1-1.5.3-1.7 1.9-.6.5-1.1 1.7-1.1 1.3.3 1.7 3.3 1 .4 1.1-1.3.8 1.3v1.1l-3 2.4.2.8-.9 1 .4.8-1.3.3.9 1.2-.8.7.6 1 .9-.2.3-.8 1.1.6h1.8l2.5 2.6.2 2.6 1.8.1.8 1.1.6 2 1 .7h1.9l1.9-.1.8-.9 1.6-1.2 1.1-.3-1.2-2.1-.3.9-1.5-3.6h-.8l-.4.9-1.2-1 1.3-1.1 1.8.4 2.3 2.1 1.3 2.7 1.2 3.3-1 2.8v-1.8l-.7-1-3.5 2.3-.9-.3-1.6 1-.1 1.2-2.2 1.2-2 2.1-2 1.9h-1.2l3.3-3.3.5-1.9-.5-.6-.3-1.3-.9-.1-.1 1.3-1 1.2h-1.2l-.3 1.1.4 1.2-1.2 1.1-1.1-.2-.4 1-1.4-3-1.3-1.1-2.6-1.3-.6-2.2h-.8l-.7-2.6-6.5 2-.1-.3-14.9 3.4v.7l-.9.3-.5-.7-10.5 2.4-.7-1 .5-15z",
      center: {
        x: 873.7,
        y: 159.4
      }
    },
    mi: {
      name: "Michigan",
      path: "m663.3 209.8.1 1.4 21.4-3.5.5-1.2 3.9-5.9v-4.3l.8-2.1 2.2-.8 2-7.8 1-.5 1 .6-.2.6-1.1.8.3.9.8.4 1.9-1.4.4-9.8-1.6-2.3-1.2-3.7v-2.5l-2.3-4.4v-1.8l-1.2-3.3-2.3-3-2.9-1-4.8 3-2.5 4.6-.2.9-3 3.5-1.5-.2-2.9-2.8-.1-3.4 1.5-1.9 2-.2 1.2-1.7.2-4 .8-.8 1.1-.1.9-1.7-.2-9.6-.3-1.3-1.2-1.2-1.7-1-.1-1.8.7-.6 1.8.8-.3-1.7-1.9-2.7-.7-1.6-1.1-1.1h-2.2l-8.1-2.9-1.4-1.7-3.1-.3-1.2.3-4.4-2.3h-1.4l.5 1-2.7-.1.1.6.6.6-2.5 2.1.1 1.8 1.5 2.3 1.5.2v.6l-1.5.5-2.1-.1-2.8 2.5.1 2.5.4 5.8-2.2 3.4.8-4.5-.8-.6-.9 5.3-1-2.3.5-2.3-.5-1 .6-1.3-.6-1.1 1-1v-1.2l-1.3.6-1.3 3.1-.7.7-1.3 2.4-1.7-.2-.1 1.2h-1.6l.2 1.5.2 2-3 1.2.1 1.3 1 1.7-.1 5.2-1.3 4.4-1.7 2.5 1.2 1.4.8 3.5-1 2.5-.2 2.1 1.7 3.4 2.5 4.9 1.2 1.9 1.6 6.9-.1 8.8-.9 3.9-2 3.2-.9 3.7-2 3-1.2 1zM567.5 113l3 3.8 17 3.8 1.4 1 4 .8.7.5 2.8-.2 4.9.8 1.4 1.5-1 1 .8.8 3.8.7 1.2 1.2.1 4.4-1.3 2.8 2 .1 1-.8.9.8-1.1 3.1 1 1.6 1.2.3.8-1.8 2.9-4.6 1.6-6 2.3-2-.5-1.6.5-.9 1 1.6-.3 2.2 2.9-2.2.2-2.3 2.1.6.8-1.6.7.6-.7 1.5-1 .5-1 2 1.4 1.8 1.1-.5-.5-.7 1-1.5 1.9-1.7h.8l.2-2.6 2-1.8 7.9-.5 1.9-3.1 3.8-.3 3.8 1.2 4.2 2.7.7-.2-.2-3.5.7-.2 4.5 1.1 1.5-.2 2.9-.7 1.7.4 1.8.1v-1.1l-.7-.9-1.5-.2-1.1-.8.5-1.4-.8-.3-2.6.1-.1-1 1.1-.8.6.8.5-1.8-.7-.7.7-.2-1.4-1.3.3-1.3.1-1.9h-1.3l-1.5 1-1.9.1-.5 1.8-1.9.2-.3-1.2-2.2.1-1 1.2-.7-.1-.2-.8-2.6.4-.1-4.8 1-2-.7-.1-1.8 1.1h-2.2l-3.8 2.7-6.2.3-4.1.8-1.9 1.5-1.4 1.3-2.5 1.7-.3.8-.6-1.7-1.3-.6v.6l.7.7v1.3l-1.5-.6h-.6l-.3 1.2-2-1.9-1.3-.2-1.3 1.5-3.2-.1-.5-1.4-2-1.9-1.3-1.6v-.7l-1.1-1.4-2.6-1.2-3.3-.1-1.1-.9h-1.4l-.7.4-2.2 2.2-.7 1.1-1-.7.2-1 .8-2.1 3.2-5 .8-.2 1.7-1.9.7-1.6 3-.6.8-.6-.1-1-.5-.5-4.5.2-2 .5-2.6 1.2-1.2 1.2-1.7 2.2-1.8 1-3.3 3.4-.4 1.6-7.4 4.6-4 .5-1.8.4-2.3 3-1.8.7-4.4 2.3zm100.7 3.8 3.8.1.6-.5-.2-2-1.7-1.8-1.9.1-.1.5 1.1.4-1.6.8-.3 1-.6-.6-.4.8zm-75.1-41.9-2.3.2-2.7 1.9-7.1 5.3.8 1 1.8.3 2.8-2-1.1-.5 2.3-1.6h1l3-1.9-.1-.9zm41.1 62.8v1l2.1 1.6-.2-2.4zm-.7 2.8 1.1.1v.9h-1zm21.4-21.3v.9l.8-.2v-.5zm4.7 3.1-.1-1.1-1.6-.2-.6-.4h-.9l-.4.3.9.4 1.1 1.1zm-18 1.2-.1 1.1-.3.7.2 2.2.4.3.7.1.5-.9.1-1.6-.3-.6-.1-1.1z",
      center: {
        x: 631.9502,
        y: 144.05
      }
    },
    mn: {
      name: "Minnesota",
      path: "m464.7 68.6-1.1 2.8.8 1.4-.3 5.1-.5 1.1 2.7 9.1 1.3 2.5.7 14 1 2.7-.4 5.8 2.9 7.4.3 5.8-.1 2.1-.1 2.2-.9 2-3.1 1.9-.3 1.2 1.7 2.5.4 1.8 2.6.6 1.5 1.9-.2 39.5h28.2l36.3-.9 18.6-.7-1.1-4.5-.2-3-2.2-3-2.8-.7-5.2-3.6-.6-3.3-6.3-3.1-.2-1.3h-3.3l-2.2-2.6-2-1.3.7-5.1-.9-1.6.5-5.4 1-1.8-.3-2.7-1.2-1.3-1.8-.3v-1.7l2.8-5.8 5.9-3.9-.4-13 .9.4.6-.5.1-1.1.9-.6 1.4 1.2.7-.1-1.2-2.2 4.3-3.1 3.1-3.7 1.6-.8L554 95l6.3-5.8 3.9-2.1 6.3-2.7 7.6-4.5-.6-.4-3.7.7-2.8.1-1-1.6-1.4-.9-9.8 1.2-1-2.8-1.6-.1-1.7.8-3.7 3.1h-4.1l-2.1-1-.3-1.7-3.9-.8-.6-1.6-.7-1.3-1 .9-2.6.1-9.9-5.5h-2.9l-.8-.7-3.1 1.3-.8 1.3-3.3.8-1.3-.2v-1.7l-.7-.9h-5.9l-.4-1.4h-2.6l-1.1.4-2.4-1.7.3-1.4-.6-2.4-.7-1.1-.2-3-1-3.1-2.1-1.6h-2.9l.1 8-30.9-.4z",
      center: {
        x: 520.2,
        y: 117.85
      }
    },
    ms: {
      name: "Mississippi",
      path: "m623.8 468.6-5 .1-2.4-1.5-7.9 2.5-.9-.7-.5.2-.1 1.6-.6.1-2.6 2.7-.7-.1-.6-.7-1.2-1.8.3-1.3-4.8-6.8.9-4.6 1-1.4.1-1.4-36 2 1.7-11.9 2.4-4.8 6-8.4-1.8-2.5h2v-3.3l-2.4-2.5.5-1.7-1.2-1-1.6-7.1.6-1.4 1.2-1.5.5-3-1.5-2.3-.5-2.2.9-.7v-.8l-1.7-1.1-.1-.7 1.6-.9-1.2-1.1 1.7-7.1 3.4-1.6v-.8l-1.1-1.4 2.9-5.4h1.9l1.5-1.2-.3-5.2 3.1-4.5 1.8-.6-.5-3.1 38.3-2.6 1.3 2-1.3 67 4.4 33.2z",
      center: {
        x: 594.05,
        y: 419.35
      }
    },
    mo: {
      name: "Missouri",
      path: "m555.3 248.9-1.1-1.1-.6-1.6-1.7-1.3-14.3.8-27.2 1.2-25.9-.1 1.3 1.3-.3 1.4 2.1 3.7 3.9 6.3 2.9 3 2 .6.9-1 1.5 2.1-.1 1.2-2.7 2.6-.5 2.3 2.5 2.5 2.6 4.7 3.2.7.5 48.1.2 10.8 39.1-.7 39.8-2 1.6 2.5v2.2l-1.7 1.5-2.8 5.1 11.2-.8 1-2 1.2-.5v-.7l-1.2-1.1-.6-1 1.7.2.8-.7-1.4-1.5 1.4-.5.1-1-.6-1v-1.3l-.7-.7.2-1h1.1l.7.7-.3 1 .8.7.8-1 1-2.7 1.4.9.7-.4 1.2-4.1-1-1 1-2 .2-.9-1.3-.8h-2.8l-1.4-1.5-1.8-3.8v-1.9l.8-.6.1-1.3-1.7-1.9-.9-2.5-2.7-4.1-4.8-1.3-7.4-7.1-.4-2.4 2.8-7.6-.4-1.9 1.2-1.1v-1.3l-2.8-1.5-3-.7-3.4 1.2-1.3-2.3.6-1.9-.7-2.4-8.6-8.4-2.2-1.5-2.5-5.9-1.2-5.4 1.4-3.7z",
      center: {
        x: 542.8501,
        y: 295.3
      }
    },
    mt: {
      name: "Montana",
      path: "m247 130.5 57.3 7.9 51 5.3 2-20.7 5.2-66.7-53.5-5.6-54.3-7.7-65.9-12.5-4.8 22 3.7 7.4-1.6 4.8 3.6 4.8 1.9.7 3.9 8.3v2.1l2.3 3h.9l1.4 2.1h3.2v1.6l-7.1 17-.5 4.1 1.4.5 1.6 2.6 2.8-1.4 3.6-2.4 1.9 1.9.5 2.5-.5 3.2 2.5 9.7 2.6 3.5 2.3 1.4.4 3v4.1l2.3 2.3 1.6-2.3 6.9 1.6 2.1-1.2 9 1.7 2.8-3.3 1.8-.6 1.2 1.8 1.6 4.1.9.1z",
      center: {
        x: 273.25,
        y: 87.1
      }
    },
    ne: {
      name: "Nebraska",
      path: "m402.5 191.1 38 1.6 3.4 3.2 1.7.2 2.1 2 1.8-.1 1.8-2 1.5.6 1-.7.7.5.9-.4.7.4.9-.4 1 .5 1.4-.6 2 .6.6 1.1 6.1 2.2 1.2 1.3.9 2.6 1.8.7 1.5-.2.5.9v2.3l.6 1.7v1.4l1.3 3.7 2.2 4.3.2 3.7 2.8 5 .4 6.1 1.3.7-.2 2.9.8 3.3-.7 2.2 1.8 4.4 1.3 1.3-.3 1.4 2.1 3.7 3.9 6.3h-32.4l-43.7-1.2-36-2 1.4-22.1-33.1-2.4 3.7-44.2z",
      center: {
        x: 419.5999,
        y: 223.55
      }
    },
    nv: {
      name: "Nevada",
      path: "m167.6 296.8-3.4 17.5-2.4 2.9h-2l-1.2-2.7-3.7-1.4-3.5.6-1 13.6.5 4.9-.5 2.9-1.4 3-70.4-105-1.1-3.5 16.4-63.1 47 11.2 24.4 5.4 23.3 4.7z",
      center: {
        x: 133.05,
        y: 252.3
      }
    },
    nh: {
      name: "New Hampshire",
      path: "m862.6 93.6-1.3.1-1-1.1-1.9 1.4-.5 6.1 1.2 2.3-1.1 3.5 2.1 2.8-.4 1.7.1 1.3-1.1 2.1-1.4.4-.6 1.3-2.1 1-.7 1.5 1.4 3.4-.5 2.5.5 1.5-1 1.9.4 1.9-1.3 1.9.2 2.2-.7 1.1.7 4.5.7 1.5-.5 2.6.9 1.8-.2 2.5-.5 1.3-.1 1.4 2.1 2.6 18.4-3.8 1-1.5.3-1.7 1.9-.6.5-1.1 1.7-1.1 1.3.3.8-4.8-2.3-1.4-.8-2.2-3.2-2-.6-4-11.9-36.8z",
      center: {
        x: 867.4001,
        y: 122.25
      }
    },
    nj: {
      name: "New Jersey",
      path: "m842.5 195.4-14.6-4.9-1.8 2.5.1 2.2-3 5.4 1.5 1.8-.7 2-1 1 .5 3.6 2.7.9 1 2.8 2.1 1.1 4.2 3.2-3.3 2.6-1.6 2.3-1.8 3-1.6.6-1.4 1.7-1 2.2-.3 2.1.8.9.4 2.3 1.2.6 2.4 1.5 1.8.8 1.6.8.1 1.1.8.1 1.1-1.2.8.4 2.1.2-.2 2.9.2 2.5 1.8-.7 1.5-3.9 1.6-4.8 2.9-2.8.6-3.5-.6-1.2 1.7-2.9v-1.2l-.7-1.1 1.2-2.7-.3-3.6-.6-8.2-1.2-1.4v1.4l.5.6h-1.1l-.6-.4-1.3-.2-.9.6-1.2-1.6.7-1.7v-1l1.7-.7.8-2.1z",
      center: {
        x: 834.05,
        y: 217.45
      }
    },
    nm: {
      name: "New Mexico",
      path: "M357.5 332.9h-.8l-7.9 99.3-31.8-2.6-34.4-3.6-.3 3 2 2.2-30.8-4.1-1.4 10.2-15.7-2.2L253.8 311l52.6 6.5 51.7 4.8z",
      center: {
        x: 297.2501,
        y: 374.15
      }
    },
    ny: {
      name: "New York",
      path: "m872.9 181.6-1.3.1-.5 1zm-30.6 22.7.7.6 1.3-.3 1.1.3.9-1.3h1.9l2.4-.9 5.1-2.1-.5-.5-1.9.8-2 .9.2-.8 2.6-1.1.8-1 1.2.1 4.1-2.3v.7l-4.2 3 4.5-2.8 1.7-2.2 1.5-.1 4.5-3.1 3.2-3.1 3-2.3 1-1.2-1.7-.1-1 1.2-.2.7-.9.7-.8-1.1-1.7 1-.1.9-.9-.2.5-.9-1.2-.7-.6.9.9.3.2.5-.3.5-1.4 2.6h-1.9l.9-1.8.9-.6.3-1.7 1.4-1.6.9-.8 1.5-.7-1.2-.2-.7.9h-.7l-1.1.8-.2 1-2.2 2.1-.4.9-1.4.9-7.7 1.9.2.9-.9.7-2 .3-1-.6-.2 1.1-1.1-.4.1 1-1.2-.1-1.2.5-.2 1.1h-1l.2 1h-.7l.2 1-1.8.4-1.5 2.3zm-.8-.4-1.6.4v1l-.7 1.6.6.7 2.4-2.3-.1-.9zm-10.1-95.2-.6 1.9 1.4.9-.4 1.5.5 3.2 2.2 2.3-.4 2.2.6 2-.4 1-.3 3.8 3.1 6.7-.8 1.8.9 2.2.9-1.6 1.9 1.5 3 14.2-.5 2 1.1 1-.5 15 .7 1 2.8 16.3 1.8 1.5-3.5 3.4 1.7 2.2-1.3 3.3-1.5 1.7-1.5 2.3-.2-.7.4-5.9-14.6-4.9-1.6-1.1-1.9.3-3-2.2-3-5.8h-2l-.4-1.5-1.7-1.1-70.5 13.9-.8-6 4.3-3.9.6-1.7 3.9-2.5.6-2.4 2.3-2 .8-1.1-1.7-3.3-1.7-.5-1.8-3-.2-3.2 7.6-3.9 8.2-1.6h4.4l3.2 1.6.9-.1 1.8-1.6 3.4-.7h3l2.6-1.3 2.5-2.6 2.4-3.1 1.9-.4 1.1-.5.4-3.2-1.4-2.7-1.2-.7 2-1.3-.1-1.8h-1.5l-2.3-1.4-.1-3.1 6.2-6.1.7-2.4 3.7-6.3 5.9-6.4 2.1-1.7 2.5.1 20.6-5.2z",
      center: {
        x: "809.2001",
        y: "157.3"
      }
    },
    nc: {
      name: "North Carolina",
      path: "m829 300.1-29.1 6.1-39.4 7.3-29.4 3.5v5.2l-1.5-.1-1.4 1.2-2.4 5.2-2.6-1.1-3.5 2.5-.7 2.1-1.5 1.2-.8-.8-.1-1.5-.8-.2-4 3.3-.6 3.4-4.7 2.4-.5 1.2-3.2 2.6-3.6.5-4.6 3-.8 4.1-1.3.9-1.5-.1-1.4 1.3-.1 4.9 21.4-3 4.4-1.9 1.3-.1 7.3-4.3 23.2-2.2.4.5-.2 1.4.7.3 1.2-1.5 3.3 3 .1 2.6 19.7-2.8 24.5 17.1 4-2.2 3-.7h1.7l1.1 1.1.8-2 .6-5 1.7-3.9 5.4-6.1 4.1-3.5 5.4-2.3 2.5-.4 1.3.4.7 1.1 3.3-6.6 3.3-5.3-.7-.3-4.4 6.8-.5-.8 2-2.2-.4-1.5-2-.5 1 1.3-1.2.1-1.2-1.8-1.2 2-1.6.2 1-2.7.7-1.7-.2-2.9-2.2-.1.9-.9 1.1.3 2.7.1.8-.5h2.3l2-1.9.2-3.2 1.3-1.4 1.2-.2 1.3-1-.5-3.7-2.2-3.8-2.7-.2-.9 1.6-.5-1-2.7.2-1.2.4-1.9 1.2-.3-.4h-.9l-1.8 1.2-2.6.5v-1.3l.8-1 1 .7h1l1.7-2.1 3.7-1.7 2-2.2h2.4l.8 1.3 1.7.8-.5-1.5-.3-1.6-2.8-3.1-.3-1.4-.4 1-.9-1.3zm7 31 2.7-2.5 4.6-3.3v-3.7l-.4-3.1-1.7-4.2 1.5 1.4 1 3.2.4 7.6-1.7.4-3.1 2.4-3.2 3.2zm1.9-19.3-.9-.2v1l2.5 2.2-.2-1.4zm2.9 2.1-1.4-2.8-2.2-3.4-2.4-3-2.2-4.3-.8-.7 2.2 4.3.3 1.3 3.4 5.5 1.8 2.1z",
      center: {
        x: 766.8,
        y: 333.5
      }
    },
    nd: {
      name: "North Dakota",
      path: "m464.7 68.6-1.1 2.8.8 1.4-.3 5.1-.5 1.1 2.7 9.1 1.3 2.5.7 14 1 2.7-.4 5.8 2.9 7.4.3 5.8-.1 2.1-29.5-.4-46-2.1-39.2-2.9 5.2-66.7 44.5 3.4 55.3 1.6z",
      center: {
        x: 414.7,
        y: 92.35
      }
    },
    oh: {
      name: "Ohio",
      path: "m685.7 208.8 1.9-.4 3 1.3 2.1.6.7.9h1l1-1.5 1.3.8h1.5l-.1 1-3.1.5-2 1.1 1.9.8 1.6-1.5 2.4-.4 2.2 1.5 1.5-.1 2.5-1.7 3.6-2.1 5.2-.3 4.9-5.9 3.8-3.1 9.3-5.1 4.9 29.9-2.2 1.2 1.4 2.1-.1 2.2.6 2-1.1 3.4-.1 5.4-1 3.6.5 1.1-.4 2.2-1.1.5-2 3.3-1.8 2h-.6l-1.8 1.7-1.3-1.2-1.5 1.8-.3 1.2h-1.3l-1.3 2.2.1 2.1-1 .5 1.4 1.1v1.9l-1 .2-.7.8-1 .5-.6-2.1-1.6-.5-1 2.3-.3 2.2-1.1 1.3 1.3 3.6-1.5.8-.4 3.5h-1.5l-3.2 1.4-1.2-2.1-3.5-1.4-.8-2.9-.5-.8-3.4 1.8-.6 1.7h-.9l-1.3.7-1.2-.8-3-.8-1.9.8v1l-2.2-.2-1.9-2.1-2.3.2-4.1-.7v-1l-2.2-3.4-2.9-1.2-1.9.8-2.2-.1-1.3-.5-6.6-57.2 21.4-3.5z",
      center: {
        x: 700.1002,
        y: 237.3
      }
    },
    ok: {
      name: "Oklahoma",
      path: "m501.5 398.6-4.6-3.8-2.2-.9-.5 1.6-5.1.3-.6-1.5-5 2.5-1.6-.7-3.7.3-.6 1.7-3.6.9-1.3-1.2-1.2.1-2-1.8-2.1.7-2-.5-1.8-2-2.5 4.2-1.2.8-1-1.8.3-2-1.2-.7-2.3 2.5-1.7-1.2-.1-1.5-1.3.5-2.6-1.7-3 2.6-2.3-1.1.7-2.1-2.3.1-1.9-3-3.5-1.1-2 2.3-2.3-2.2-1.4.4-2 .1-3.5-1.9-2.3.1-1.2-.7-.5-2.9-2.3-1.7-1.1 1.5-1.4-1-1.2-.4-1.1 1-1.5-.3-2.5-3-2.7-1.3 1.4-42.7-52.6-3.2.6-10.6 16.5 1 67.7 2.9 62 .1.2 10.8 4.1 24.4-.7 39z",
      center: {
        x: 433.0499,
        y: 361.3999
      }
    },
    or: {
      name: "Oregon",
      path: "m93.9 166.5 47 11.2 8.5-37.3 2.9-5.8.4-2.1.8-.9-.9-2-2.9-1.2.2-4.2 4-5.8 2.5-.8 1.6-2.3-.1-1.6 1.8-1.6 3.2-5.5 4.2-4.8-.5-3.2-3.5-3.1-1.6-3.6-30.3-7.3-2.8 1-5.4-.9-1.8-.9-1.5 1.2-3.3-.4-4.5.5-.9.7-4.2-.4-.8-1.6-1.2-.2-4.4 1.3-1.6-1.1-2.2.8-.2-1.8-2.3-1.2-1.5-.2-1-1.1-3 .3-1.2-.8h-1.2l-1.2.9-5.5.7-6.6-4.2 1.1-5.6-.4-4.1-3.2-3.7-3.7.1-.4-1.1.4-1.2-.7-.8-1 .1-1.1 1.3-1.5-.2-.5-1.1-1-.1-.7.6-2-1.9v4.3l-1.3 1.3-1.1 3.5-.1 2.3-4.5 12.3L38 114.5l-3.2 4.6-1.6-.1.1 2.1-5.2 7.1-.3 3.3 1 1.3.1 2.4-1.2 1.1-1.2 3 .1 5.7 1.2 2.9z",
      center: {
        x: 96.8,
        y: 118.6
      }
    },
    pa: {
      name: "Pennsylvania",
      path: "m826.3 189.4-1.9.3-3-2.2-3-5.8h-2l-.4-1.5-1.7-1.1-70.5 13.9-.8-6-4.2 3.4-.9.1-2.7 3-3.3 1.7 4.9 29.9 3.2 19.7 17.4-2.9 60.5-11.8 1.2-2.1 1.5-1.1 1.6-.3 1.6.6 1.4-1.7 1.6-.6 1.8-3 1.6-2.3 3.3-2.6-4.2-3.2-2.1-1.1-1-2.8-2.7-.9-.5-3.6 1-1 .7-2-1.5-1.8 3-5.4-.1-2.2 1.8-2.5z",
      center: {
        x: 782.6999,
        y: 211.95
      }
    },
    ri: {
      name: "Rhode Island",
      path: "m883.2 170.7-1.3-1.1-2.6-1.3-.6-2.2h-.8l-.7-2.6-6.5 2 3.2 12.3-.4 1.1.4 1.8 5.6-3.6.1-3-.8-.8.4-.6-.1-1.3-.9-.7 1.2-.4-.9-1.6 1.8.7.3 1.4.7 1.2-1.4-.8 1.1 1.7-.3 1.2-.6-1.1v2.5l.6-.9.4.9 1.3-1.5-.2-2.5 1.4 3.1 1-.9zm-4.7 12.2h.9l.5-.6-.8-1.3-.7.7z",
      center: {
        x: 877.6501,
        y: 173.2
      }
    },
    sc: {
      name: "South Carolina",
      path: "m772.3 350.2-19.7 2.8-.1-2.6-3.3-3-1.2 1.5-.7-.3.2-1.4-.4-.5-23.2 2.2-7.3 4.3-1.3.1-4.4 1.9-.1 1.9-1.9 1-1.4 3.2.2 1.3 6.1 3.8 2.6-.3 3.1 4 .4 1.7 4.2 5.1 2.6 1.7 1.4.2 2.2 1.6 1.1 2.2 2 1.6 1.8.5 2.7 2.7.1 1.4 2.6 2.8 5 2.3 3.6 6.7.3 2.7 3.9 2.1 2.5 4.8.8 3.1 4.2.4.8-1.5h.6l1.8-1.5.5-2 3.2-2.1.3-2.4-1.2-.9.8-.7.8.4 1.3-.4 1.8-2.1 3.8-1.8 1.6-2.4.1-.7 4.8-4.4-.1-.5-.9-.8 1.1-1.5h.8l.4.5.7-.8h1.3l.6-1.5 2.3-2.1-.3-5.4.8-2.3 3.6-6.2 2.4-2.2 2.2-1.1z",
      center: {
        x: 752.1498,
        y: 380.2
      }
    },
    sd: {
      name: "South Dakota",
      path: "m396.5 125.9 46 2.1 29.5.4-.1 2.2-.9 2-3.1 1.9-.3 1.2 1.7 2.5.4 1.8 2.6.6 1.5 1.9-.2 39.5-2.2-.1-.1 1.6 1.3 1.5-.1 1.1-1 .5.4 1.6 1.3.4.7 2-1.7 5.1-1 4.3 1.3 1.2.3 1.3.7 1.7-1.5.2-1.8-.7-.9-2.6-1.2-1.3-6.1-2.2-.6-1.1-2-.6-1.4.6-1-.5-.9.4-.7-.4-.9.4-.7-.5-1 .7-1.5-.6-1.8 2-1.8.1-2.1-2-1.7-.2-3.4-3.2-38-1.6-51.1-3.5 3.9-43.9 2-20.7z",
      center: {
        x: 412.6499,
        y: 163.7
      }
    },
    tn: {
      name: "Tennessee",
      path: "m620.9 365.1 45.7-4 22.9-2.9.1-4.9 1.4-1.3 1.5.1 1.3-.9.8-4.1 4.6-3 3.6-.5 3.2-2.6.5-1.2 4.7-2.4.6-3.4 4-3.3.8.2.1 1.5.8.8 1.5-1.2.7-2.1 3.5-2.5 2.6 1.1 2.4-5.2 1.4-1.2 1.5.1V317l.3-.7-4.6.5-.2 1-28.9 3.3-5.6 1.4-20.5 1.4-5.2.8-17.4 1-2.6.8-22.6 2-.7-.6h-3.7l1.2 3.2-.6.9-23.3 1.5-.8 1-.8-.7h-1v1.3l.6 1-.1 1-1.4.5 1.4 1.5-.8.7-1.7-.2.6 1 1.2 1.1v.7l-1.2.5-1 2 .1.6 1.4 1-.4.7h-1.5v.5l.9.9.1.8-1.4.2-.5.8-1.6.2-.9.9.6.9 1.1-.1.5.9-1.6 1.3.4 1.5-2-.6-.1.7.4 1.1-.3 1.4-1.3-.8-.8.8 1.1.1.1 1.5-.6 1 1.1.9-.3 1.5.8.7-.7 1-1.2-.5-.9 2.2-1.6.7z",
      center: {
        x: 657,
        y: 342
      }
    },
    tx: {
      name: "Texas",
      path: "m282.3 429 .3-3 34.4 3.6 31.8 2.6 7.9-99.3h.8l52.6 3.2-1.4 42.7 2.7 1.3 2.5 3 1.5.3 1.1-1 1.2.4 1.4 1 1.1-1.5 2.3 1.7.5 2.9 1.2.7 2.3-.1 3.5 1.9 2-.1 1.4-.4 2.3 2.2 2-2.3 3.5 1.1 1.9 3 2.3-.1-.7 2.1 2.3 1.1 3-2.6 2.6 1.7 1.3-.5.1 1.5 1.7 1.2 2.3-2.5 1.2.7-.3 2 1 1.8 1.2-.8 2.5-4.2 1.8 2 2 .5 2.1-.7 2 1.8 1.2-.1 1.3 1.2 3.6-.9.6-1.7 3.7-.3 1.6.7 5-2.5.6 1.5 5.1-.3.5-1.6 2.2.9 4.6 3.8 6.4 1.9 2.6 2.3 2.8-1.3 3.2.8.2 11.9.5 19.9.7 3.4 2.6 2.8.7 5.4 3.8 4.6.8 4.3h1l-.1 7.3-3.3 6.4 1.3 2.3-1.3 1.5.7 3-.1 4.3-2.2 3.5-.1.8-1.7 1.2 1 1.8 1.2 1.1-3.5.3-8.4 3.9-3.5 1.4-1.8 1.8-.7-.5 2.1-2.3 1.8-.7.5-.9-2.9-.1-.7-.8.8-2-.9-1.8h-.6l-2.4 1.3-1.9 2.6.3 1.7 3.3 3.4 1.3.3v.8l-2.3 1.6-4.9 4-4 3.9-3.2 1.4-5 3-3.7 2-4.5 1.9-4.1 2.5 3.2-3v-1.1l.6-.8-.2-1.8-1.5-.1-1.1 1.5-2.6 1.3-1.8-1.2-.3-1.7h-1.5l.8 2.2 1.4.7 1.2.9 1.8 1.6-.7.8-3.9 1.7-1.7.1-1.2-1.2-.5 2.1.5 1.1-2.7 2-1.5.2-.8.7-.4 1.7-1.8 3.3-1.6.7-1.6-.6-1.8 1.1.3 1.4 1.3.8 1 .8-1.8 3.5-.3 2.8-1 1.7-1.4 1-2.9.4 1.8.6 1.9-.6-.4 3.2-1.1-.1.2 1.2.3 1.4-1.3.9v3.1l1.6 1.4.6 3.1-.4 2.2-1 .4.4 1.5 1.1.4.8 1.7v2.6l1.1 2.1 2.2 2.6-.1.7-2.2-.2-1.6 1.4.2 1.4-.9-.3-1.4-.2-3.4-3.7-2.3-.6h-7.1l-2.8-.8-3.6-3-1.7-1-2.1.1-3.2-2.6-5.4-1.6v-1.3l-1.4-1.8-.9-4.7-1.1-1.7-1.7-1.4v-1.6l-1.4-.6.6-2.6-.3-2.2-1.3-1.4.7-3-.8-3.2-1.7-1.4h-1.1l-4-3.5.1-1.9-.8-1.7-.8-.2-.9-2.4-2-1.6-2.9-2.5-.2-2.1-1-.7.2-1.6.5-.7-1.4-1.5.1-.7-2-2.2.1-2.1-2.7-4.9-.1-1.7-1.8-3.1-5.1-4.8v-1.1l-3.3-1.7-.1-1.8-1.2-.4v-.7l-.8-.2-2.1-2.8h-.8l-.7-.6-1.3 1.1h-2.2l-2.6-1.1h-4.6l-4.2-2.1-1.3 1.9-2.2-.6-3.3 1.2-1.7 2.8-2 3.2-1.1 4.4-1.4 1.2-1.1.1-.9 1.6-1.3.6-.1 1.8-2.9.1-1.8-1.5h-1l-2-2.9-3.6-.5-1.7-2.3-1.3-.2-2.1-.8-3.4-3.4.2-.8-1.6-1.2-1-.1-3.4-3.1-.1-2-2.3-4 .2-1.6-.7-1.3.8-1.5-.1-2.4-2.6-4.1-.6-4.2-1.6-1.6v-1l-1.2-.2-.7-1.1-2.4-1.7-.9-.1-1.9-1.6v-1.1l-2.9-1.8-.6-2.1-2.6-2.3-3.2-4.4-3-1.3-2.1-1.8.2-1.2-1.3-1.4-1.7-3.7-2.4-1zm174.9 138.3.8.1-.6-4.8-3.5-12.3-.2-8.1 4.9-10.5 6.1-8.2 7.2-5.1v-.7h-.8l-2.6 1-3.6 2.3-.7 1.5-8.2 11.6-2.8 7.9v8.8l3.6 12z",
      center: {
        x: 404.55,
        y: 452.5001
      }
    },
    ut: {
      name: "Utah",
      path: "m233.2 217.9 3.3-21.9-47.9-8.2-21 109 46.2 8.2 40 6 11.5-88.3z",
      center: {
        x: 216.45,
        y: 249.4
      }
    },
    vt: {
      name: "Vermont",
      path: "m859.1 102.4-1.1 3.5 2.1 2.8-.4 1.7.1 1.3-1.1 2.1-1.4.4-.6 1.3-2.1 1-.7 1.5 1.4 3.4-.5 2.5.5 1.5-1 1.9.4 1.9-1.3 1.9.2 2.2-.7 1.1.7 4.5.7 1.5-.5 2.6.9 1.8-.2 2.5-.5 1.3-.1 1.4 2.1 2.6-12.4 2.7-1.1-1 .5-2-3-14.2-1.9-1.5-.9 1.6-.9-2.2.8-1.8-3.1-6.7.3-3.8.4-1-.6-2 .4-2.2-2.2-2.3-.5-3.2.4-1.5-1.4-.9.6-1.9-.8-1.7 27.3-6.9z",
      center: {
        x: 845.35,
        y: 127.7
      }
    },
    va: {
      name: "Virginia",
      path: "m834.7 265.4-1.1 2.8.5 1.1.4-1.1.8-3.1zm-34.6-7-.7-1 1-.1 1-.9.4-1.8-.2-.5.1-.5-.3-.7-.6-.5-.4-.1-.5-.4-.6-.6h-1l-.6-.1-.4-.4.1-.5-1.7-.6-.8.3-1.2-.1-.7-.7-.5-.2-.2-.7.6-.8v-.9l-1.2-.2-1-.9-.9.1-1.6-.3-.4.7-.4 1.6-.5 2.3-10-5.2-.2.9.9 1.6-.8 2.3.1 2.9-1.2.8-.5 2.1-.9.8-1.4 1.8-.9.8-1 2.5-2.4-1.1-2.3 8.5-1.3 1.6-2.8-.5-1.3-1.9-2.3-.7-.1 4.7-1.4 1.7.4 1.5-2.1 2.2.4 1.9-3.7 6.3-1 3.3 1.5 1.2-1.5 1.9.1 1.4-2.3 2-.7-1.1-4.3 3.1-1.5-1-.6 1.4.8.5-.5.9-5.5 2.4-3-1.8-.8 1.7-1.9 1.8-2.3.1-4.4-2.3-.1-1.5-1.5-.7.8-1.2-.7-.6-4.9 6.6-2.9 1-3 3-.4 2.2-2.1 1.3-.1 1.7-1.4 1.4-1.8.5-.5 1.9-1 .4-6.9 4.2 28.9-3.3.2-1 4.6-.5-.3.7 29.4-3.5 39.4-7.3 29.1-6.1-.6-1.2.4-.1.9.9-.1-1.4-.3-1.9 1.6 1.2.9 2.1v-1.3l-3.4-5.5v-1.2l-.7-.8-1.3.7.5 1.4h-.8l-.4-1-.6.9-.9-1.1-2.1-.1-.2.7 1.5 2.1-1.4-.7-.5-1-.4.8-.8.1-1.5 1.7.3-1.6v-1.4l-1.5-.7-1.8-.5-.2-1.7-.6-1.3-.6 1.1-1.7-1-2 .3.2-.9 1.5-.2.9.5 1.7-.8.9.4.5 1v.7l1.9.4.3.9.9.4.9 1.2 1.4-1.6h.6l-.1-2.1-1.3 1-.6-.9 1.5-.2-1.2-.9-1.2.6-.1-1.7-1.7.2-2.2-1.1-1.8-2.2 3.6 2.2.9.3 1.7-.8-1.7-.9.6-.6-1-.5.8-.2-.3-.9 1.1.9.4-.8.4 1.3 1.2.8.6-.5-.5-.6-.1-2.5-1.1-.1-1.6-.8.9-1.1-2-.1-.4-.5-1.4.6-1.4-.8-.5-1.2-2.1-1.2-2.1-1.8-2.2-1.9 3 1.3.9 1.2 2.1.7 2.3 2.5.2-1.7.6 1.3 2.3.5v-4l-.8-1.1 1.1.4.1-1.6-3.1-1.4-1.6-.2-1.3-.2.3-1.2-1.5-.3-.1-.6h-1.8l-.2.8-.7-1h-2.7l-1-.4-.2-1-1.2-.6-.4-1.5-.6-.4-.7 1.1-.9.2-.9.7h-1.5l-.9-1.3.4-3.1.5-2.4.6.5zM822 270l.9-.1v-.6l-.8.1zm7.5 14.2-1 2.7 1.2-1.3zm-1.8-15.3.7.3-.2 1.9-.5-.5-1.3 1 1 .4-1.8 4.4.1 8.1 1.9 3.1.5-1.5.4-2.7-.3-2.3.7-.9-.2-1.4 1.2-.6-.6-.5.5-.7.8 1.1-.2 1.1-.4 3.9 1.1-2.2.4-3.1.1-3-.3-2 .6-2.3 1.1-1.8.1-2.2.3-.9-4.6 1.6-.7.8z",
      center: {
        x: 766.4999,
        y: 282.9
      }
    },
    wa: {
      name: "Washington",
      path: "m161.9 83.6.7 4-1.1 4.3-30.3-7.3-2.8 1-5.4-.9-1.8-.9-1.5 1.2-3.3-.4-4.5.5-.9.7-4.2-.4-.8-1.6-1.2-.2-4.4 1.3-1.6-1.1-2.2.8-.2-1.8-2.3-1.2-1.5-.2-1-1.1-3 .3-1.2-.8h-1.2l-1.2.9-5.5.7-6.6-4.2 1.1-5.6-.4-4.1-3.2-3.7-3.7.1-.4-1.1.4-1.2-.7-.8-1 .1-2.1-1.5-1.2.4-2-.1-.7-1.5-1.6-.3 2.5-7.5-.7 6 .5.5v-2l.8-.2 1.1 2.3-.5-2.2 1.2-4.2 1.8.4-1.1-2-1 .3-1.5-.4.2-4.2.2 1.5.9.5.6-1.6h3.2l-2.2-1.2-1.7-1.9-1.4 1.6 1.2-3.1-.3-4.6-.2-3.6.9-6.1-.5-2-1.4-2.1.1-4 .4-2.7 2-2.3-.7-1.4.2-.6.9.1 7.8 7.6 4.7 1.9 5.1 2.5 3.2-.1.2 3 1-1.6h.7l.6 2.7.5-2.6 1.4-.2.5.7-1.1.6.1 1.6.7-1.5h1.1l-.4 2.6-1.1-.8.4 1.4-.1 1.5-.8.7-2.5 2.9 1.2-3.4-1.6.4-.4 2.1-3.8 2.8-.4 1-2.1 2.2-.1 1h2.2l2.4-.2.5-.9-3.9.5V39l2.6-2.8 1.8-.8 1.9-.2 1-1.6 3-2.3v-1.4h1.1l.1 4h-1.5l-.6.8-1.1-.9.3 1.1v1.7l-.7.7-.3-1.6-.8.8.7.6-.9 1.1h1.3l.7-.5.1 2-1 1.9-.9 1-.1 1.8-1-.2-.2-1.4.9-1.1-.8-.5-.8.7-.7 2.2-.8.9-.1-2 .8-1.1-.2-1.1-1.2 1.2.1 2.2-.6.4-2.1-.4-1.3 1.2 2.2-.6-.2 2.2 1-1.8.4 1.4.5-1 .7 1.8h.7l.7-.8.6-.1 2-1.9.2-1.2.8.6.3.9.7-.3.1-1.2h1.3l.2-2.9-.1-2.7.9.3-.7-2.1 1.4-.8.2-2.4 2.3-2.2 1 .1.3-1.4-1.2-1.4-.1-3.5-.8.9.7 2.9-.6.1-.6-1.9-.6-.5.3-2.3 1.8-.1.3.7.3-1.6-1.6-1.7-.6-1.6-.2 2 .9 1.1-.7.4-1-.8-1.8 1.3 1.5.5.2 2.4L91 28l.9-1.3 1.4 2.3-.4 1.9h-1.5v-1.2l-1.5-1.2.5-3-1.9-2.6 2.7-3 .6-4.1h.9l1.4 3.2v-2.6l1.2.3v-3.3l-.9-.8-1.2 2.5-1-3 1.3-.1L92 7.1l1.9-.6 25.4 7.5 31.7 8 23.6 5.5zM83.2 44.2h.5l.1.8-.5.3.1.6-.7.4-.2-.9.5-.4zm5-4.3L87 41.8l-.1.8.4.2.5-.6 1.1.1zm-.4-21.6.5.6 1.3-.3.2-1 1.2-1.8-1-.4-.7 1.6-.1-1.6-1.1.2-.7 1.4zm3.2-5.5.7 1.5-.9.2-.8.4-.2-2.4zm-2.7-1.6-1.1-.2.5 1.4zm-1 2.5.8.4-.4 1.1 1.7-.5-.2-2.2-.9-.2zm-2.7-.4.3 2.7 1.6 1.3.6-1.9-1.1-2.2zm1.9-1.1-1.1-1-.9.1 1.8 1.5zm3.2-7h-1.2V6l1.2.6zm-.9 32.5.4-2.7h-1.1l-.2 1.9z",
      center: {
        x: 116,
        y: 45.55
      }
    },
    wv: {
      name: "West Virginia",
      path: "m723.4 297.5-.8 1.2 1.5.7.1 1.5 4.4 2.3 2.3-.1 1.9-1.8.8-1.7 3 1.8 5.5-2.4.5-.9-.8-.5.6-1.4 1.5 1 4.3-3.1.7 1.1 2.3-2-.1-1.4 1.5-1.9-1.5-1.2 1-3.3 3.7-6.3-.4-1.9 2.1-2.2-.4-1.5 1.4-1.7.1-4.7 2.3.7 1.3 1.9 2.8.5 1.3-1.6 2.3-8.5 2.4 1.1 1-2.5.9-.8 1.4-1.8.9-.8.5-2.1 1.2-.8-.1-2.9.8-2.3-.9-1.6.2-.9 10 5.2.5-2.3.4-1.6.4-.7-.9-.4.2-1.6-1-.5-.2-.7h-.7l-.8-1.2.2-1-2.6.4-2.2-1.6-1.4.3-.9 1.4h-1.3l-1.7 2.9-3.3.4-1.9-1-2.6 3.8-2.2-.3-3.1 3.9-.9 1.6-1.8 1.6-1.7-11.4-17.4 2.9-3.2-19.7-2.2 1.2 1.4 2.1-.1 2.2.6 2-1.1 3.4-.1 5.4-1 3.6.5 1.1-.4 2.2-1.1.5-2 3.3-1.8 2h-.6l-1.8 1.7-1.3-1.2-1.5 1.8-.3 1.2h-1.3l-1.3 2.2.1 2.1-1 .5 1.4 1.1v1.9l-1 .2-.7.8-1 .5-.6-2.1-1.6-.5-1 2.3-.3 2.2-1.1 1.3 1.3 3.6-1.5.8-.4 3.5h-1.5l-3.2 1.4-.1 1.1.6 1-.6 3.6 1.9 1.6.8 1.1 1 .6-.1.9 4.4 5.6h1.4l1.5 1.8 1.2.3 1.4-.1z",
      center: {
        x: 748.7001,
        y: 264.15
      }
    },
    wi: {
      name: "Wisconsin",
      path: "m611 144-2.9.8.2 2.3-2.4 3.4-.2 3.1.6.7.8-.7.5-1.6 2-1.1 1.6-4.2 3.5-1.1.8-3.3.7-.9.4-2.1 1.8-1.1v-1.5l1-.9 1.4.1v2l-1 .1.5 1.2-.7 2.2-.6.1-1.2 4.5-.7.5-2.8 7.2-.3 4.2.6 2 .1 1.3-2.4 1.9.3 1.9-.9 3.1.3 1.6.4 3.7-1.1 4.1-1.5 5 1 1.5-.3.3.8 1.7-.5 1.1 1.1.9v2.7l1.3 1.5-.4 3 .3 4-45.9 2.8-1.3-2.8-3.3-.7-2.7-1.5-2-5.5.1-2.5 1.6-3.3-.6-1.1-2.1-1.6-.2-2.6-1.1-4.5-.2-3-2.2-3-2.8-.7-5.2-3.6-.6-3.3-6.3-3.1-.2-1.3h-3.3l-2.2-2.6-2-1.3.7-5.1-.9-1.6.5-5.4 1-1.8-.3-2.7-1.2-1.3-1.8-.3v-1.7l2.8-5.8 5.9-3.9-.4-13 .9.4.6-.5.1-1.1.9-.6 1.4 1.2.7-.1h2.6l6.8-2.6.3-1h1.2l.7-1.2.4.8 1.8-.9 1.8-1.7.3.5 1-1 2.2 1.6-.8 1.6-1.2 1.4.5 1.5-1.4 1.6.4.9 2.3-1.1v-1.4l3.3 1.9 1.9.7 1.9.7 3 3.8 17 3.8 1.4 1 4 .8.7.5 2.8-.2 4.9.8 1.4 1.5-1 1 .8.8 3.8.7 1.2 1.2.1 4.4-1.3 2.8 2 .1 1-.8.9.8-1.1 3.1 1 1.6 1.2.3zm-49.5-37.3-.5.1-1.5 1.6.2.5 1.5-.6v-.6l.9-.3zm1.6-1.1-1 .3-.2.7.9-.1zm-1.3-1.6-.2.9h1.7l.6-.4.1-1zm2.8-3-.3 1.9 1.2-.5.1-1.4zm58.3 31.9-2 .3-.4 1.3 1.3 1.7z",
      center: {
        x: 575.7499,
        y: 151.5
      }
    },
    wy: {
      name: "Wyoming",
      path: "m355.3 143.7-51-5.3-57.3-7.9-2 10.7-8.5 54.8-3.3 21.9 32.1 4.8 44.9 5.7 37.5 3.4 3.7-44.2z",
      center: {
        x: 294.25,
        y: 181.15
      }
    },
    dc: {
      name: "District of Columbia",
      path: "m803.5 252-2.6-1.8-1 1.7.5.4.4.1.6.5.3.7-.1.5.2.5z"
    }
  },
  borders: {
    render() {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
        class: "borders",
        fill: "none"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "al-fl",
        d: "m687.6 447.4-48.8 5.1-.5 2.9 2.5 2.8 1.7.7.9 1.2-.4 7.3-1.1.6"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "al-ga",
        d: "m666.6 361.1 12.9 45.8 2.9 6.1 1.8 1.9v3.2l1.7 1 .2 1.1-2.2 3.8-.3 3.7-.5 2.6 2.4 5.7-.6 6.3.5 1.4 1.5 1.5.7 2.2"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "al-ms",
        d: "m620.9 365.1 1.3 2-1.3 67 4.4 33.2"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "al-tn",
        d: "m620.9 365.1 45.7-4"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ar-la",
        d: "m516.7 414.2 52.3-1.3"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ar-mo",
        d: "m591.7 344.9-11.2.8 2.8-5.1 1.7-1.5v-2.2l-1.6-2.5-39.8 2-39.1.7"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ar-ms",
        d: "m569 412.9 1.2-1.5.5-3-1.5-2.3-.5-2.2.9-.7v-.8l-1.7-1.1-.1-.7 1.6-.9-1.2-1.1 1.7-7.1 3.4-1.6v-.8l-1.1-1.4 2.9-5.4h1.9l1.5-1.2-.3-5.2 3.1-4.5 1.8-.6-.5-3.1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ar-ok",
        d: "m507.9 400.5.7-39-4.1-24.4"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ar-tn",
        d: "m582.6 367.7 1.6-.7.9-2.2 1.2.5.7-1-.8-.7.3-1.5-1.1-.9.6-1-.1-1.5-1.1-.1.8-.8 1.3.8.3-1.4-.4-1.1.1-.7 2 .6-.4-1.5 1.6-1.3-.5-.9-1.1.1-.6-.9.9-.9 1.6-.2.5-.8 1.4-.2-.1-.8-.9-.9v-.5h1.5l.4-.7-1.4-1-.1-.6"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ar-tx",
        d: "m507.9 400.5 2.6 2.3 2.8-1.3 3.2.8.2 11.9"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "az-ca",
        d: "m149 338.1-.9 2.1 1.3 3.4 1.4 1.8 1.2 5.8 2.3 2.5.4 1.9-1.3 1.3-4.8 1.7-2.4 3.6-1.6 7-2.4 3.2-1.6.3-1.1 6.9 1.1 1.6 1.8.2 1 1.6-.8 2.4-3 2.2-2.2-.1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "az-nm",
        d: "m253.8 311-17.4 124.1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "az-nv",
        d: "m167.6 296.8-3.4 17.5-2.4 2.9h-2l-1.2-2.7-3.7-1.4-3.5.6-1 13.6.5 4.9-.5 2.9-1.4 3"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "az-ut",
        d: "m167.6 296.8 46.2 8.2 40 6"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ca-nv",
        d: "m93.9 166.5-16.4 63.1 1.1 3.5 70.4 105"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ca-or",
        d: "m27.8 147.9 66.1 18.6"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "co-ks",
        d: "m379.4 256.3-4.8 67"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "co-ne",
        d: "m347.7 231.8 33.1 2.4-1.4 22.1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "co-nm",
        d: "m253.8 311 52.6 6.5 51.7 4.8"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "co-ok",
        d: "m358.1 322.3 16.5 1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "co-ut",
        d: "M265.3 222.7 253.8 311"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "co-wy",
        d: "m265.3 222.7 44.9 5.7 37.5 3.4"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ct-ma",
        d: "m843.8 171.3 10.5-2.4.5.7.9-.3v-.7l14.9-3.4.1.3"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ct-ny",
        d: "m846.6 194.7-1.7-2.2 3.5-3.4-1.8-1.5-2.8-16.3"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ct-ri",
        d: "m870.7 165.5 3.2 12.3-.4 1.1.4 1.8"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "dc-md",
        d: "m801.8 254.6 1.7-2.6-2.6-1.8-1 1.7"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "dc-va",
        d: "m799.9 251.9.5.4.4.1.6.5.3.7-.1.5.2.5"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "de-md",
        d: "m817.9 230.1 7.6 27.1 10.9-2.3"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "de-nj",
        d: "m823.8 227.2-1 2.2-.3 2.1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "de-pa",
        d: "m817.9 230.1 1.2-2.1 1.5-1.1 1.6-.3 1.6.6"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "fl-ga",
        d: "m687.6 447.4 3.3 6 50.1-3.3.6 3.2 1 1.1 2.1-.6.5-4.3-1.4-2.1v-2.5l2.2-1.4 1.7.9 4 .7 3.6-.3"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ga-nc",
        d: "m689.5 358.2 21.4-3"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ga-sc",
        d: "m710.9 355.2-.1 1.9-1.9 1-1.4 3.2.2 1.3 6.1 3.8 2.6-.3 3.1 4 .4 1.7 4.2 5.1 2.6 1.7 1.4.2 2.2 1.6 1.1 2.2 2 1.6 1.8.5 2.7 2.7.1 1.4 2.6 2.8 5 2.3 3.6 6.7.3 2.7 3.9 2.1 2.5 4.8.8 3.1 4.2.4"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ga-tn",
        d: "m666.6 361.1 22.9-2.9"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ia-il",
        d: "m556.8 249.7.7-.7.1-2.3-.7-.9 1-1.5 1.8-.6.9-.3 1-1.2v-2.4l1.7-2.4.5-.5.1-3.5-.9-1.4-1-.3-1.1-1.6 1-4 3-.8h2.4l4.2-1.8 1.7-2.2.1-2.4 1.1-1.3 1.3-3.2-.1-2.6-2.8-3.5h-1.2l-.9-1.1.2-1.6-1.7-1.7-2.5-1.3.5-.6"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ia-mn",
        d: "M473.6 182h28.2l36.3-.9 18.6-.7"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ia-mo",
        d: "m484.5 246.8 25.9.1 27.2-1.2 14.3-.8 1.7 1.3.6 1.6 1.1 1.1 1.5.8"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ia-ne",
        d: "m484.5 246.8-1.8-4.4.7-2.2-.8-3.3.2-2.9-1.3-.7-.4-6.1-2.8-5-.2-3.7-2.2-4.3-1.3-3.7v-1.4l-.6-1.7v-2.3l-.5-.9"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ia-sd",
        d: "m473.5 204.2-.7-1.7-.3-1.3-1.3-1.2 1-4.3 1.7-5.1-.7-2-1.3-.4-.4-1.6 1-.5.1-1.1-1.3-1.5.1-1.6 2.2.1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ia-wi",
        d: "m567.2 202-1.3-2.8-3.3-.7-2.7-1.5-2-5.5.1-2.5 1.6-3.3-.6-1.1-2.1-1.6-.2-2.6"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "id-mt",
        d: "m188.8 30.5-4.8 22 3.7 7.4-1.6 4.8 3.6 4.8 1.9.7 3.9 8.3v2.1l2.3 3h.9l1.4 2.1h3.2v1.6l-7.1 17-.5 4.1 1.4.5 1.6 2.6 2.8-1.4 3.6-2.4 1.9 1.9.5 2.5-.5 3.2 2.5 9.7 2.6 3.5 2.3 1.4.4 3v4.1l2.3 2.3 1.6-2.3 6.9 1.6 2.1-1.2 9 1.7 2.8-3.3 1.8-.6 1.2 1.8 1.6 4.1.9.1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "id-nv",
        d: "m140.9 177.7 24.4 5.4 23.3 4.7"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "id-or",
        d: "m140.9 177.7 8.5-37.3 2.9-5.8.4-2.1.8-.9-.9-2-2.9-1.2.2-4.2 4-5.8 2.5-.8 1.6-2.3-.1-1.6 1.8-1.6 3.2-5.5 4.2-4.8-.5-3.2-3.5-3.1-1.6-3.6"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "id-ut",
        d: "m236.5 196-47.9-8.2"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "id-wa",
        d: "m174.6 27.5-12.7 56.1.7 4-1.1 4.3"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "id-wy",
        d: "m245 141.2-8.5 54.8"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "il-in",
        d: "m619.4 215.7 4.1 50.2-1 5.2v2l2.4 3.5v.7l-.3.9.9 1.9-.3 2.4-1.6 1.8-1.3 4.2-3.8 5.3-.1 7h-1l.9 1.9"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "il-ky",
        d: "m599.9 322.5-.3-1.8 4-3.7 6.9 3 1.5-.3.4-2.4-1.7-1.8.4-3.3 1-.5 1.2.6.6-1.2 3.7-.6.1-.9-1.5-2.2-.1-1.1 2.2-2.7v-.9"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "il-mo",
        d: "M599.9 322.5h-2.8l-1.4-1.5-1.8-3.8v-1.9l.8-.6.1-1.3-1.7-1.9-.9-2.5-2.7-4.1-4.8-1.3-7.4-7.1-.4-2.4 2.8-7.6-.4-1.9 1.2-1.1v-1.3l-2.8-1.5-3-.7-3.4 1.2-1.3-2.3.6-1.9-.7-2.4-8.6-8.4-2.2-1.5-2.5-5.9-1.2-5.4 1.4-3.7"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "il-wi",
        d: "m567.2 202 45.9-2.8"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "in-ky",
        d: "m618.3 302.7 1.1.8.6-1-.7-1.7 4.6-.5.2 1.2 1.1.2.4-.9-.6-1.3.3-.8 1.3.8 1.7-.4 1.7.6 3.4 2.1 1.8-2.8 3.5-2.2 3 3.3 1.6-2.1.3-2.7 3.8-2.3.2 1.3 1.9 1.2 3-.2 1.2-.7.1-3.4 2.5-3.7 4.6-4.4-.1-1.7 1.2-3.8 2.2 1 6.7-4.5-.4-1.7-1.5-2.1 1-1.9"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "in-mi",
        d: "m630.9 213.2 32.4-3.4.1 1.4"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "in-oh",
        d: "m670 268.4-6.6-57.2"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ks-mo",
        d: "m504.3 326.3-.5-48.1-3.2-.7-2.6-4.7-2.5-2.5.5-2.3 2.7-2.6.1-1.2-1.5-2.1-.9 1-2-.6-2.9-3"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ks-ne",
        d: "m379.4 256.3 36 2 43.7 1.2h32.4"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ks-ok",
        d: "m374.6 323.3 67.7 2.9 62 .1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ky-mo",
        d: "m596.7 333.5 1-2.7 1.4.9.7-.4 1.2-4.1-1-1 1-2 .2-.9-1.3-.8m-5.8 11.3-.7-.7.2-1h1.1l.7.7-.3 1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ky-oh",
        d: "m670 268.4 1.3.5 2.2.1 1.9-.8 2.9 1.2 2.2 3.4v1l4.1.7 2.3-.2 1.9 2.1 2.2.2v-1l1.9-.8 3 .8 1.2.8 1.3-.7h.9l.6-1.7 3.4-1.8.5.8.8 2.9 3.5 1.4 1.2 2.1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ky-tn",
        d: "M596.7 333.5 620 332l.6-.9-1.2-3.2h3.7l.7.6 22.6-2 2.6-.8 17.4-1 5.2-.8 20.5-1.4 5.6-1.4m-103.6 12.7h1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ky-va",
        d: "m697.7 321.1 6.9-4.2 1-.4.5-1.9 1.8-.5 1.4-1.4.1-1.7 2.1-1.3.4-2.2 3-3 2.9-1 4.9-6.6"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ky-wv",
        d: "m709.3 279.4-.1 1.1.6 1-.6 3.6 1.9 1.6.8 1.1 1 .6-.1.9 4.4 5.6h1.4l1.5 1.8 1.2.3 1.4-.1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "la-ms",
        d: "m569 412.9-.6 1.4 1.6 7.1 1.2 1-.5 1.7 2.4 2.5v3.3h-2l1.8 2.5-6 8.4-2.4 4.8-1.7 11.9 36-2-.1 1.4-1 1.4-.9 4.6 4.8 6.8-.3 1.3 1.2 1.8.6.7"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "la-tx",
        d: "m516.7 414.2.5 19.9.7 3.4 2.6 2.8.7 5.4 3.8 4.6.8 4.3h1l-.1 7.3-3.3 6.4 1.3 2.3-1.3 1.5.7 3-.1 4.3-2.2 3.5-.1.8-1.7 1.2 1 1.8 1.2 1.1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ma-nh",
        d: "m856 152.6 18.4-3.8 1-1.5.3-1.7 1.9-.6.5-1.1 1.7-1.1 1.3.3"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ma-ny",
        d: "m843.8 171.3-.7-1 .5-15"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ma-ri",
        d: "m870.7 165.5 6.5-2 .7 2.6h.8l.6 2.2 2.6 1.3 1.3 1.1 1.4 3"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ma-vt",
        d: "m843.6 155.3 12.4-2.7"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "md-pa",
        d: "m757.4 241.9 60.5-11.8"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "md-va",
        d: "m822.9 269.3-.8.1m13.2-4.3-.6.3m-1.3.2-4.6 1.6-.7.8m-28.2-16.1-.6-.6h-1l-.6-.1-.4-.4.1-.5-1.7-.6-.8.3-1.2-.1-.7-.7-.5-.2-.2-.7.6-.8v-.9l-1.2-.2-1-.9-.9.1-1.6-.3m11.6 13.5.3-.4-.7-1 1-.1 1-.9.4-1.8"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "md-wv",
        d: "m757.4 241.9 1.7 11.4 1.8-1.6.9-1.6 3.1-3.9 2.2.3 2.6-3.8 1.9 1 3.3-.4 1.7-2.9h1.3l.9-1.4 1.4-.3 2.2 1.6 2.6-.4-.2 1 .8 1.2h.7l.2.7 1 .5-.2 1.6.9.4"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "me-nh",
        d: "m881.9 138.3-2.3-1.4-.8-2.2-3.2-2-.6-4-11.9-36.8"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "mi-oh",
        d: "m663.4 211.2 21.4-3.5"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "mi-wi",
        d: "m565.6 112.3 1.9.7 3 3.8 17 3.8 1.4 1 4 .8.7.5 2.8-.2 4.9.8 1.4 1.5-1 1 .8.8 3.8.7 1.2 1.2.1 4.4-1.3 2.8 2 .1 1-.8.9.8-1.1 3.1 1 1.6 1.2.3"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "mn-nd",
        d: "m462.3 61.3 2.4 7.3-1.1 2.8.8 1.4-.3 5.1-.5 1.1 2.7 9.1 1.3 2.5.7 14 1 2.7-.4 5.8 2.9 7.4.3 5.8-.1 2.1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "mn-sd",
        d: "m473.6 182 .2-39.5-1.5-1.9-2.6-.6-.4-1.8-1.7-2.5.3-1.2 3.1-1.9.9-2 .1-2.2"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "mn-wi",
        d: "m556.7 180.4-1.1-4.5-.2-3-2.2-3-2.8-.7-5.2-3.6-.6-3.3-6.3-3.1-.2-1.3h-3.3l-2.2-2.6-2-1.3.7-5.1-.9-1.6.5-5.4 1-1.8-.3-2.7-1.2-1.3-1.8-.3v-1.7l2.8-5.8 5.9-3.9-.4-13 .9.4.6-.5.1-1.1.9-.6 1.4 1.2.7-.1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "mo-ne",
        d: "m491.5 259.5-3.9-6.3-2.1-3.7.3-1.4-1.3-1.3"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "mo-ok",
        d: "m504.3 326.3.2 10.8"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "mo-tn",
        d: "m591.7 344.9 1-2 1.2-.5v-.7l-1.2-1.1-.6-1 1.7.2.8-.7-1.4-1.5 1.4-.5.1-1-.6-1v-1.3m1 0 .8.7.8-1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ms-tn",
        d: "m582.6 367.7 38.3-2.6"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "mt-nd",
        d: "m362.5 56.3-5.2 66.7"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "mt-sd",
        d: "m357.3 123-2 20.7"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "mt-wy",
        d: "m355.3 143.7-51-5.3-57.3-7.9-2 10.7"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "nc-sc",
        d: "m710.9 355.2 4.4-1.9 1.3-.1 7.3-4.3 23.2-2.2.4.5-.2 1.4.7.3 1.2-1.5 3.3 3 .1 2.6 19.7-2.8 24.5 17.1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "nc-tn",
        d: "M731.1 317v5.2l-1.5-.1-1.4 1.2-2.4 5.2-2.6-1.1-3.5 2.5-.7 2.1-1.5 1.2-.8-.8-.1-1.5-.8-.2-4 3.3-.6 3.4-4.7 2.4-.5 1.2-3.2 2.6-3.6.5-4.6 3-.8 4.1-1.3.9-1.5-.1-1.4 1.3-.1 4.9"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "nc-va",
        d: "m731.1 317 29.4-3.5 39.4-7.3 29.1-6.1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "nd-sd",
        d: "m357.3 123 39.2 2.9 46 2.1 29.5.4"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ne-sd",
        d: "m351.4 187.6 51.1 3.5 38 1.6 3.4 3.2 1.7.2 2.1 2 1.8-.1 1.8-2 1.5.6 1-.7.7.5.9-.4.7.4.9-.4 1 .5 1.4-.6 2 .6.6 1.1 6.1 2.2 1.2 1.3.9 2.6 1.8.7 1.5-.2"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ne-wy",
        d: "m347.7 231.8 3.7-44.2"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "nh-vt",
        d: "m857.9 100.1 1.2 2.3-1.1 3.5 2.1 2.8-.4 1.7.1 1.3-1.1 2.1-1.4.4-.6 1.3-2.1 1-.7 1.5 1.4 3.4-.5 2.5.5 1.5-1 1.9.4 1.9-1.3 1.9.2 2.2-.7 1.1.7 4.5.7 1.5-.5 2.6.9 1.8-.2 2.5-.5 1.3-.1 1.4 2.1 2.6"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "nj-ny",
        d: "m827.9 190.5 14.6 4.9-.4 5.9"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "nj-pa",
        d: "m823.8 227.2 1.4-1.7 1.6-.6 1.8-3 1.6-2.3 3.3-2.6-4.2-3.2-2.1-1.1-1-2.8-2.7-.9-.5-3.6 1-1 .7-2-1.5-1.8 3-5.4-.1-2.2 1.8-2.5"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "nm-ok",
        d: "m358.1 322.3-.6 10.6"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "nm-tx",
        d: "m284.3 431.2-2-2.2.3-3 34.4 3.6 31.8 2.6 7.9-99.3h.8"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "nv-or",
        d: "m93.9 166.5 47 11.2"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "nv-ut",
        d: "m188.6 187.8-21 109"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ny-pa",
        d: "m827.9 190.5-1.6-1.1-1.9.3-3-2.2-3-5.8h-2l-.4-1.5-1.7-1.1-70.5 13.9-.8-6"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ny-vt",
        d: "m843.6 155.3-1.1-1 .5-2-3-14.2-1.9-1.5-.9 1.6-.9-2.2.8-1.8-3.1-6.7.3-3.8.4-1-.6-2 .4-2.2-2.2-2.3-.5-3.2.4-1.5-1.4-.9.6-1.9-.8-1.7"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "oh-pa",
        d: "m736.8 225.1-4.9-29.9"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "oh-wv",
        d: "m709.3 279.4 3.2-1.4h1.5l.4-3.5 1.5-.8-1.3-3.6 1.1-1.3.3-2.2 1-2.3 1.6.5.6 2.1 1-.5.7-.8 1-.2v-1.9l-1.4-1.1 1-.5-.1-2.1 1.3-2.2h1.3l.3-1.2 1.5-1.8 1.3 1.2 1.8-1.7h.6l1.8-2 2-3.3 1.1-.5.4-2.2-.5-1.1 1-3.6.1-5.4 1.1-3.4-.6-2 .1-2.2-1.4-2.1 2.2-1.2"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ok-tx",
        d: "m357.5 332.9 52.6 3.2-1.4 42.7 2.7 1.3 2.5 3 1.5.3 1.1-1 1.2.4 1.4 1 1.1-1.5 2.3 1.7.5 2.9 1.2.7 2.3-.1 3.5 1.9 2-.1 1.4-.4 2.3 2.2 2-2.3 3.5 1.1 1.9 3 2.3-.1-.7 2.1 2.3 1.1 3-2.6 2.6 1.7 1.3-.5.1 1.5 1.7 1.2 2.3-2.5 1.2.7-.3 2 1 1.8 1.2-.8 2.5-4.2 1.8 2 2 .5 2.1-.7 2 1.8 1.2-.1 1.3 1.2 3.6-.9.6-1.7 3.7-.3 1.6.7 5-2.5.6 1.5 5.1-.3.5-1.6 2.2.9 4.6 3.8 6.4 1.9"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "or-wa",
        d: "m161.5 91.9-30.3-7.3-2.8 1-5.4-.9-1.8-.9-1.5 1.2-3.3-.4-4.5.5-.9.7-4.2-.4-.8-1.6-1.2-.2-4.4 1.3-1.6-1.1-2.2.8-.2-1.8-2.3-1.2-1.5-.2-1-1.1-3 .3-1.2-.8h-1.2l-1.2.9-5.5.7-6.6-4.2 1.1-5.6-.4-4.1-3.2-3.7-3.7.1-.4-1.1.4-1.2-.7-.8-1 .1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "pa-wv",
        d: "m736.8 225.1 3.2 19.7 17.4-2.9"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "sd-wy",
        d: "m351.4 187.6 3.9-43.9"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "tn-va",
        d: "m697.7 321.1 28.9-3.3.2-1 4.6-.5-.3.7"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "ut-wy",
        d: "m236.5 196-3.3 21.9 32.1 4.8"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "va-wv",
        d: "m722.7 296.9.7.6-.8 1.2 1.5.7.1 1.5 4.4 2.3 2.3-.1 1.9-1.8.8-1.7 3 1.8 5.5-2.4.5-.9-.8-.5.6-1.4 1.5 1 4.3-3.1.7 1.1 2.3-2-.1-1.4 1.5-1.9-1.5-1.2 1-3.3 3.7-6.3-.4-1.9 2.1-2.2-.4-1.5 1.4-1.7.1-4.7 2.3.7 1.3 1.9 2.8.5 1.3-1.6 2.3-8.5 2.4 1.1 1-2.5.9-.8 1.4-1.8.9-.8.5-2.1 1.2-.8-.1-2.9.8-2.3-.9-1.6.2-.9 10 5.2.5-2.3.4-1.6.4-.7"
      }));
    }

  },
  separators: {
    render() {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
        class: "separators"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        fill: "none",
        d: "M215 493v55l36 45M0 425h147l68 68h85l54 54v46"
      }));
    }

  }
};
/* harmony default export */ __webpack_exports__["default"] = (maps);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _maps_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maps.js */ "./src/maps.js");
/* harmony import */ var _division_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./division.js */ "./src/division.js");
/* harmony import */ var _info_window__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info-window */ "./src/info-window.js");



/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */






/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save({
  attributes
}) {
  const {
    mapOf,
    mapId,
    mapColor,
    highlightColor,
    infoWindows
  } = attributes;
  const {
    name,
    divisionName,
    viewBox,
    divisions,
    borders,
    separators
  } = _maps_js__WEBPACK_IMPORTED_MODULE_5__["default"][mapOf];
  const mapColorStyle = mapColor !== undefined ? {
    "--cjd-blocks--interactive-map--map-color": `var(--wp--preset--color--${mapColor})`
  } : {};
  const highlightColorStyle = highlightColor !== undefined ? {
    "--cjd-blocks--interactive-map--highlight-color": `var(--wp--preset--color--${highlightColor})`
  } : {};
  const divisionSet = [];
  const infoWindowSet = [];

  for (const [key, division] of Object.entries(divisions)) {
    let hasInformation = false;
    const content = [];

    if (infoWindows.hasOwnProperty([key])) {
      hasInformation = true;

      if (hasInformation && infoWindows[key]["Projects Completed"] !== '') {
        content.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
          class: "info-window-subtitle"
        }, "Projects Completed: "), infoWindows[key]["Projects Completed"]));
      }

      if (hasInformation && infoWindows[key]["Project Types"] !== []) {
        const listItems = infoWindows[key]["Project Types"].map(item => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
          key: item
        }, item));
        content.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
          class: "info-window-subtitle"
        }, "Project Types"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("ul", null, listItems)));
      }
    }

    ;
    infoWindowSet.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_info_window__WEBPACK_IMPORTED_MODULE_7__["default"], {
      infoFor: key,
      title: division.name,
      center: division.center,
      content: content
    }));
    divisionSet.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_division_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: key,
      name: division.name,
      path: division.path,
      ofMap: mapId,
      isHighlighted: hasInformation
    }));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(), {
    style: Object.assign({}, mapColorStyle, highlightColorStyle)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: `cjd-blocks-interactive-map-${mapId}`,
    viewBox: viewBox,
    preserveAspectRatio: "true",
    overflow: "auto"
  }, divisionSet, separators.render(), infoWindowSet));
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkinteractive_map"] = self["webpackChunkinteractive_map"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map