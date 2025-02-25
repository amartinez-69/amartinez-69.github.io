   
function moveRed()
{   
    var redSquare = document.getElementById("redSq");   
    var redPos = 0;
    var stepRedId = setInterval(stepRed, 10); //makes function call at specified intervals

    function stepRed() {
        if (redPos == 350) {
            clearInterval(stepRedId); //clears a timer set with the setInterval() method
        } else {
            redPos++; 
            redSquare.style.top = redPos + 'px'; 
            redSquare.style.left = redPos + 'px';
        }
    }
    
}

function moveBlue()
{   
    var blueSquare = document.getElementById("blueSq");   
    var bluePos = 350;
    var stepBlueId = setInterval(stepBlue, 10); //makes function call at specified intervals

    function stepBlue() {
        if (bluePos == 0) {
            clearInterval(stepBlueId); //clears a timer set with the setInterval() method
        } else {
            blueSquare.style.top = bluePos - 'px'; 
            blueSquare.style.left = bluePos - 'px';
            bluePos--; 
        }
    }
    
}


