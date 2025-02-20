
<?php get_header(); ?>

    <main class="singlePostWrapper">

            <div class="gutter"></div>

            <div class="mainContent">

                <p>This content is structured by: single.php</p>

                        <!-- Wordpress loop -->

                        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                        <h1><?php the_title(); ?></h1>
                        <?php the_content(); ?>

                        <?php endwhile; else: ?>
                            <p><?php _e('Sorry, no posts matched your criteria') ?></p>
                        <?php endif; ?>

                        <!-- End WordPress loop -->

            </div>

            <div class="sidebar"><?php get_sidebar(); ?></div>

            <div class="gutter"></div>

    </main>

<?php get_footer(); ?>    

   