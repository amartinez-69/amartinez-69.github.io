function startMovement(){
    const squares = document.querySelectorAll(".squares");
    const squareData = [];

    squares.forEach((square) => {
        squareData.push({
            square,
            topPos: square.top,
            leftPos: square.left,
        });
    });
    console.log(squareData);
}