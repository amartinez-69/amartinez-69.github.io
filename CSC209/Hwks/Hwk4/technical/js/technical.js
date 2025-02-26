function startMovement(){
    const squares = document.getElementsByClassName("squares");
    const squareData = [];

    squares.forEach((square) => {
        squareData.push({
            square,
            topPos: square.style.top,
            leftPos: square.style.left,
        });
    });
    console.log(squares);
}