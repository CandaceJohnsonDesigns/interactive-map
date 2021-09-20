<?php
/**
 * Plugin Name:       Interactive USA Map
 * Description:       An interative map of the US that highlights certain states by filtering criteria.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       usa-map
 *
 * @package           cjd-blocks/usa-map
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function cjd_blocks_usa_map_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'cjd_blocks_usa_map_block_init' );
