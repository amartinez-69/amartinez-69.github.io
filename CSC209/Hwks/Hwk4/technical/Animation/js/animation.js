   
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


