<?php


function handleHighScoreInput(){
   if (isset($_POST['playerName']) && isset($_POST['playerTime'])){ //check that the playername and playertime have been sent to us by a POST request

    global $wpdb;
    $name = $_POST['playerName'];
    $time = $_POST['playerTime'];

    $wpdb->insert(
        'highscores',
        array(
            'playerName' => $name,
            'playerTime' => $time
        ),
        array(
            '%s',
            '%d'
        )
    ); 

   }


   wp_redirect(home_url());
   exit;

}



add_action('admin_post_storeScore', 'handleHighScoreInput');
add_action('admin_post_nopriv_storeScore', 'handleHighScoreInput');
