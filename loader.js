var main = function(){
    var overlay = document.getElementsByClassName('loading')[0],
        $update = document.getElementsByClassName('update-btn')[0];       
    // on click events
    $update.onclick = function(){
        overlay.classList.add('loader-show');    
    }
    overlay.onclick = function(){
        overlay.classList.remove('loader-show');    
    }            
};

main();