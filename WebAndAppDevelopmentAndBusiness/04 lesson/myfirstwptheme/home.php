
<?php get_header(); ?>
<main class="verticalContent">

<p>This page is structure by home.php because it has been set to be the blog roll page</p>

<h1>Welcome to the blog roll!</h1>

 <!-- Wordpress loop -->

 <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

        <a href="<?php the_permalink(); ?>">
            <h1><?php the_title(); ?></h1>
            <?php the_content(); ?>
        </a>


        <?php endwhile; else: ?>
            <p><?php _e('Sorry, no posts matched your criteria') ?></p>
        <?php endif; ?>

        <!-- End WordPress loop -->
</main>
<?php get_footer(); ?>    