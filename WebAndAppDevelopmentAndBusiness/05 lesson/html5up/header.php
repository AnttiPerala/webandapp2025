<!DOCTYPE HTML>
<!--
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>Escape Velocity by HTML5 UP</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="<?php bloginfo("stylesheet_url"); ?>" />
	</head>
	<body class="homepage is-preload">
		<div id="page-wrapper">

			<!-- Header -->
				<section id="header" class="wrapper">

					<!-- Logo -->
						<div id="logo">
							<h1><a href="index.html"><?php bloginfo('name'); ?></a></h1>
							<p><?php bloginfo('description'); ?></p>
						</div>

					<!-- Nav -->
						<nav id="nav">
							<?php wp_nav_menu(
                                array(
                                    'theme_location' => 'primary-menu'
                                )
                            ); ?>
						</nav>

				</section>
