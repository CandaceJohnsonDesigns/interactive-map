import { __ } from '@wordpress/i18n';

import { useState } from '@wordpress/element';

import {
	__experimentalFlex as Flex,
    __experimentalFlexBlock as FlexBlock,
    __experimentalFlexItem as FlexItem,
	TextControl,
	Button,
	CheckboxControl
} from '@wordpress/components';

import FieldOption from './cjd-blocks-option';

function InfoWindowForm( { filterOptions } ) {

	const [ projectsCompleted, setProjectsCompleted ] = useState( '' );

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

	return (
		<div>
			<TextControl
				label="Projects Completed"
				value={ projectsCompleted }
				onChange={ setProjectsCompleted }
			/>
			<ol>
				{ filterOptions.map( ( filterOption, index ) => (
					<FieldOption
						type='checkbox'
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
		</div>
	);
}

export default InfoWindowForm;

