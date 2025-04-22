<?php

function recipe_theme_scripts(){
    wp_enqueue_style('main-style', get_stylesheet_uri());

    wp_enqueue_script(
        'globals', // handle/name of the script
         get_template_directory_uri() . '/js/globals.js', // source
         array(), // dependencies
         '1.0', // version number
         true); // load in footer

    wp_enqueue_script('createFoods', get_template_directory_uri() . '/js/createFoods.js', array('globals'), '1.0', true);
    wp_enqueue_script('createRecipes', get_template_directory_uri() . '/js/createRecipes.js', array('globals'), '1.0', true);
    wp_enqueue_script('unitsConversion', get_template_directory_uri() . '/js/unitsConversion.js', array('globals'), '1.0', true);
    wp_enqueue_script('addNewRecipeInputs', get_template_directory_uri() . '/js/addNewRecipeInputs.js', array('globals'), '1.0', true);
    wp_enqueue_script('saveRecipeFromInputs', get_template_directory_uri() . '/js/saveRecipeFromInputs.js', array('globals'), '1.0', true);
    wp_enqueue_script('events', get_template_directory_uri() . '/js/events.js', array('globals'), '1.0', true);
    wp_enqueue_script('domloaded', get_template_directory_uri() . '/js/domLoaded.js', array('globals'), '1.0', true);

    wp_localize_script(
    'globals', //attach data to the globals script handle
     'info', //name of the object in the script
      array( //now create the data references that we need
        'root_url' => get_site_url(), //this is the URL of the site
        'themeUri' => get_template_directory_uri(), //this is the URL of the theme
        'imagesUri' => get_template_directory_uri() . '/img/', //this is the URL of the images folder in the theme
    ));
}

add_action('wp_enqueue_scripts', 'recipe_theme_scripts');