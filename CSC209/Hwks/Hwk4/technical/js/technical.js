function startMovement(){
    let squares = document.querySelectorAll(".squares");
    console.log(squares); //this keeps returning an empty list, I'm not sure how to make this work. Maybe mkae a function that will create the squares? 

    squares.forEach(square => {
        let leftPos = parseInt(square.style.left);
        let topPos = parseInt(square.style.top);

        let horizontalDirection = Math.random() > 0.5 ? 1 : -1; 
        let verticalDirection = Math.random() > 0.5 ? 1 : -1; 

        if(square.dataset.intervalId) {
            clearInterval(square.dataset.intervalId);
        }

        if (leftPos == 350 || topPos == 0 || leftPos == 0 || topPos == 350){
            clearInterval(stepId);
        } else {
            leftPos += horizontalDirection;
            topPos  += verticalDirection;

            square.style.left = leftPos + "px";
            square.style.top = topPos = "px";
        }

    })
}