// script.js
document.getElementById("startButton").addEventListener("click", startMovement);

function startMovement() {
    const squares = document.getElementsByClassName('.square');
    const squareData = [];

    squares.forEach((square, index) => {
        var initialPosition = {
            top: parseInt(square.style.top),
            left: parseInt(square.style.left)
        };

        // Initial direction of motion: positive for moving down/right, negative for up/left
        var direction = index % 2 === 0 ? 1 : -1; // alternate direction for variety
        
        squareData.push({
            square,
            topPos: initialPosition.top,
            leftPos: initialPosition.left,
            topDirection: direction, // 1 or -1
            leftDirection: direction  // 1 or -1
        });
    });

    // Start moving all squares
    squareData.forEach(data => {
        moveSquare(data);
    });
}

function moveSquare(data) {
    var stepId = setInterval(() => {
        // Update position based on direction
        data.topPos += data.topDirection;
        data.leftPos += data.leftDirection;

        // Set new positions
        data.square.style.top = data.topPos + 'px';
        data.square.style.left = data.leftPos + 'px';

        // Stop when the square reaches a boundary (container's edges)
        if (data.topPos <= 0 || data.leftPos <= 0 || data.topPos >= 350 || data.leftPos >= 350) {
            clearInterval(stepId); // Stop the square when it hits a border
        }
    }, 10);
}
