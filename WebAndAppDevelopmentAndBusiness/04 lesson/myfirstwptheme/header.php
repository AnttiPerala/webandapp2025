<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="<?php bloginfo("stylesheet_url") ?>" rel="stylesheet">

    <?php wp_head(); ?>


</head>
<body <?php body_class(); ?>>

    <header>
        <a href="<?php echo home_url(); ?>"><h1><?php bloginfo("name"); ?></h1></a>
        <p><?php bloginfo("description"); ?></p>

        <nav>
            <?php wp_nav_menu(array('theme_location' => 'primary-menu')); ?>
        </nav>
    </header>