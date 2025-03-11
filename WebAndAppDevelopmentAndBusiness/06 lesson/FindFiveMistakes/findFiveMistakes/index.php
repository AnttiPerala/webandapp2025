<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>

        path {
            opacity: 0;
        }

        #sendHighScore {
            display: none;
        }

    </style>

</head>
<body>

    <div id="hud">
        <p id="foundMistakes">Found Mistakes: 0</p>
        <p id="timePassed">Time Passed: 0</p>
        <form id="sendHighScore" action="<?php echo esc_url(admin_url('admin-post.php')) ?>" method="post">
            <input type="hidden" name="action" value="storeScore">
            <input type="hidden" name="playerTime" id="playerTime">
            <input type="text" name="playerName" required placeholder="Your name">
            <input type="submit" value="Submit High Score">
        </form>
    </div>
        
    <svg version="1.1" viewBox="0 0 1920 985" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <image width="1920" height="985" preserveAspectRatio="none" xlink:href="<?php bloginfo('template_url'); ?>/room.jpg"/>
    <path class="hotspot1" d="m655 745c33.5-46.5 124-2.59 95.1 52.6-26 50.9-119 38.8-124-20.8-4.47-18.5 6.43-49.1 29.3-31.8z" style="fill-opacity:0;stroke-width:9.69;stroke:#d34e28"/>
    <path class="hotspot1" d="m1577 741c14.7-20.8 42.2-29.5 66.8-26.4 18.1 2.04 36.3 12.8 42.5 30.6 3 8.41 3.39 17.5 3.97 26.3 0.239 26.8-21.2 50.7-46.9 56.4-16.4 4.02-34.3-0.462-47.2-11.3-13.7-10.5-24.8-24.4-33-39.6-4.19-8.55-8.71-19.5-3.06-28.4 3.83-5.31 10.7-6.98 16.9-7.57z" style="fill-opacity:0;stroke-width:9.69;stroke:#d34e28"/>
    <path class="hotspot2" d="m124 653c14.9-24.9 56.9-40.6 78.6-16.2 18.2 18.9 21 56.3-6.14 68.8-24.9 9.46-73.5 21.8-80.5-15.5-2.18-12.6-0.228-26.8 7.97-37z" style="fill-opacity:0;stroke-width:9.69;stroke:#d34e28"/>
    <path class="hotspot2" d="m1062 668c16.7-34.2 73.6-51.2 98.1-16.7 27.2 42.6-23.1 76-62.2 64.4-24.2-0.533-52.4-21.8-35.9-47.8z" style="fill-opacity:0;stroke-width:9.69;stroke:#d34e28"/>
    <path class="hotspot3" d="m237 585c35.7-58 121-41.4 166-5.16 47.9 64-54.5 112-108 89-31.7-9.78-84.5-45.7-58.3-83.9z" style="fill-opacity:0;stroke-width:9.69;stroke:#d34e28"/>
    <path class="hotspot3" d="m1166 575c43.5-32 105-33.6 152-8.03 20.1 9.58 35.4 31.8 31.6 54.6-4.81 29.7-33.7 51.2-62.9 52.8-8.68-0.401-16.7 3.7-25.4 3.96-39.6 4.12-81.2-19-96.3-56.3-6.55-14.8-7.65-32.8 0.908-47z" style="fill-opacity:0;stroke-width:9.69;stroke:#d34e28"/>
    <path class="hotspot4" d="m315 422c-30.6-49.3 26.4-153 75.2-83.7 20.7 46.9 38.9 137-21.5 159-43.7 8.89-74.1-37.7-53.7-75.6z" style="fill-opacity:0;stroke-width:9.69;stroke:#d34e28"/>
    <path class="hotspot4" d="m1330 469c-61 17-76.7-63.6-73.6-108-16.2-66 103-97.4 94.1-17.2 3.2 41.9 5.62 89.7-20.5 125z" style="fill-opacity:0;stroke-width:9.69;stroke:#d34e28"/>
    <path class="hotspot5" d="m441 145c21.6-58.7 125-38.7 108 28-8.18 55.2-88.8 72.2-119 25.7-14.5-16.8-17.2-49.8 11.2-53.6z" style="fill-opacity:0;stroke-width:9.69;stroke:#d34e28"/>
    <path class="hotspot5" d="m1384 133c26.9-43.1 101-26.3 110 23.1 16.3 51.9-60.1 105-99.6 63.4-21.4-21.7-30.8-61.3-10.1-86.5z" style="fill-opacity:0;stroke-width:9.69;stroke:#d34e28"/>
    </svg>

    <h2>High Scores:</h2>

    <?php 

        global $wpdb;
        $rowResults = $wpdb->get_results("SELECT playerName, playerTime FROM highscores ORDER BY playerTime ASC");
    ?>

    <table class="highScoreTable">

        <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Time</th>
        </tr>
        <?php 
        $i = 1;
        foreach ($rowResults as $row){
            ?>
        <tr>
            <td><?php echo $i ?></td>
            <td><?php echo $row->playerName; ?></td>
            <td><?php echo $row->playerTime; ?></td>
        </tr>
        <?php
        $i++;
         } 
        ?>

    </table>

    <script>

        let foundMistakes = 0;
        let timePassed = 0;

        setInterval(function(){
            if (foundMistakes < 5){
                timePassed++;
                document.querySelector('#timePassed').textContent = "Time Passed: " + timePassed;
            }
            
        }, 1000);

        document.querySelectorAll('path').forEach(function(element){ //select all paths and run a function for each of the
            element.addEventListener('click', handleClick); //for each path we attach a click detector and if a click has been detected we call a function called handleClick
        })

        function handleClick(event){
            let classNamePair = this.classList[0]; //take the first class of the clicked element
            
            document.querySelectorAll('.' + classNamePair).forEach(function(elem){ //select all elements that have the same class as the clicked element
               elem.style.opacity = "1"; //set the opacity of each element to 1. This will make both path pairs visible
               elem.removeEventListener('click', handleClick); //allow only one click for each pair so that the user cant cheat with their score
            }) 
            foundMistakes++;
            document.querySelector('#foundMistakes').textContent = "Found Mistakes: " + foundMistakes;
            if (foundMistakes > 4) {
                document.querySelector('#sendHighScore').style.display = 'block'; //reveal the high score form after the game has been beaten
                document.querySelector('#playerTime').value = timePassed; //add the final time to the hidden input field
                alert("Congratulations, you found all five mistakes!");
            }
            
        }
    </script>

</body>
</html>

