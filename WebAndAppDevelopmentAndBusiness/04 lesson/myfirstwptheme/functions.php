<?php

/* This section creates a customizeable menu */
register_nav_menus(
    array(
        'primary-menu' => __('Primary Menu')
    )
);


/* This section makes it possible to select a background color or image for the body of the page */
add_theme_support("custom-background");


/* This section will allow the user to use widgets in the theme */

function init_widgets(){
    register_sidebar(array(
        'name' => __('Main Sidebar'),
        'id' => 'sidebar-1',
        'description' => __('The main sidebar appears on the right side of the blog pages')
    ));
}

add_action('widgets_init', 'init_widgets');