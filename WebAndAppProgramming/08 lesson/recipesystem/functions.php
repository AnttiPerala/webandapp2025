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
    wp_enqueue_script('getFoodFromDB', get_template_directory_uri() . '/js/getFoodFromDB.js', array('globals'), '1.0', true);
    wp_enqueue_script('events', get_template_directory_uri() . '/js/events.js', array('globals'), '1.0', true);
    wp_enqueue_script('domloaded', get_template_directory_uri() . '/js/domLoaded.js', array('globals'), '1.0', true);

    wp_localize_script(
    'globals', //attach data to the globals script handle
     'info', //name of the object in the script
      array( //now create the data references that we need
        'root_url' => get_site_url(), //this is the URL of the site
        'themeUri' => get_template_directory_uri(), //this is the URL of the theme
        'imagesUri' => get_template_directory_uri() . '/img/', //this is the URL of the images folder in the theme
        'ajaxUrl' => admin_url('admin-ajax.php'), //this is the URL of the AJAX endpoint
    ));
}

function get_foods() {
    global $wpdb;
    $search_text = ($_POST)['searchString'];
    $sanitized_search_text = sanitize_text_field($search_text);

    $foods = $wpdb->get_results($wpdb->prepare("SELECT * FROM fineli_eng WHERE name LIKE %s", '%' . $wpdb->esc_like($sanitized_search_text) . '%'), ARRAY_A);

    $jsonEncodedFoods = json_encode($foods, JSON_UNESCAPED_UNICODE);

    echo $jsonEncodedFoods;

    exit();
 
}

add_action('wp_enqueue_scripts', 'recipe_theme_scripts');

add_action('wp_ajax_nopriv_getFood', 'get_foods'); //for non-logged in users
add_action('wp_ajax_getFood', 'get_foods'); //for logged in users
