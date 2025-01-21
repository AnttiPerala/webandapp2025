document.addEventListener('keydown', function(event){
    if (event.key == 'q'){
        document.querySelector('#kick').play();
    }

    if (event.key == 'w'){
        document.querySelector('#hihat').play();
    }

    if (event.key == 'e'){
        document.querySelector('#snare').play();
    }

    if (event.key == 'r'){
        document.querySelector('#extra').play();
    }
})