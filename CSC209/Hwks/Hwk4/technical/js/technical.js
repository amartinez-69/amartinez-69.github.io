function startMovement(){
    const squares = document.querySelectorAll(".squares");
    const squareData = [];

    squares.forEach((square, index) => {
        let initialPosition = {
            top: parseInt(square.style.top),
            left: parseInt(square.style.left)
        };

        // Initial direction of motion: positive for moving down/right, negative for up/left
        let direction = index % 2 === 0 ? 1 : -1; // alternate direction for variety
        
        squareData.push({
            square,
            topPos: initialPosition.top,
            leftPos: initialPosition.left,
            topDirection: direction, // 1 or -1
            leftDirection: direction  // 1 or -1
        });
    });
    console.log(squareData);
}