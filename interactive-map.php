<?php
/**
 * Plugin Name:       Interactive Map
 * Description:       An interactive map that highlights certain states by filtering criteria.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Candace Johnson Designs
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       interactive-map
 *
 * @package           cjd-blocks/interactive-map
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function cjd_blocks_interactive_map_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'cjd_blocks_interactive_map_block_init' );
