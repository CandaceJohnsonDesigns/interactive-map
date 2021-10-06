import { useState } from '@wordpress/element';
import {
	__experimentalFlex as Flex,
    __experimentalFlexBlock as FlexBlock,
    __experimentalFlexItem as FlexItem,
	TextControl,
	CheckboxControl
} from '@wordpress/components';

function InfoWindowForm( { filterOptions } ) {

	const cleanFilterOptions = filterOptions.filter( function( e ) { return e === 0 || e } );

	const [ projectsCompleted, setProjectsCompleted ] = useState( '' );

	return (
		<div>
			<TextControl
				label="Projects Completed"
				value={ projectsCompleted }
				onChange={ setProjectsCompleted }
			/>
			{ cleanFilterOptions.length > 0 &&
				cleanFilterOptions.map( ( filterOption, index ) => (
					<CheckboxControl key={ index }
						label={ filterOption }
					/>
				))
			}
		</div>
	);
}

export default InfoWindowForm;

