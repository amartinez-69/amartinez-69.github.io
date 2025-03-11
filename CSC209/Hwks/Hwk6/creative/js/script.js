//script is mostly the same from technical but has additional start button. which uses the animate function I created for hwk5 but altered for this hwk. 

(function() {
    class GameGrid {
        constructor(canvasId, rows, cols, cell) {
            this.canvasId = canvasId;
            this.rows = rows;
            this.cols = cols; 
            this.cell = cell;
        }

        init() {

            this.canvas = document.getElementById(this.canvasId);
            this.ctx = this.canvas.getContext("2d");
            this.canvas.width = this.cols * this.cell;
            this.canvas.height = this.rows * this.cell; 
            this.grid = Array.from({length: this.rows}, () => Array(this.cols).fill(0)); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

            this.drawGrid();
            this.setPattern();

            document.getElementById('next').addEventListener("click", () => {
                gameGrid.updateGrid(); 
            });

            document.getElementById('start').addEventListener("click", () => {
                NRSTEPS = 100;
                gameGrid.animate(); 
            })


        }

        setPattern(){
            this.grid = Array.from({length: this.rows}, () => Array(this.cols).fill(0));
            let startRow = 6;
            let startCol = 6;

            this.grid[startRow][startCol] = 1; 
            this.grid[startRow][startCol + 1] = 1;
            this.grid[startRow][startCol + 2] = 1;
            this.grid[startRow - 1][startCol + 2] = 1;
            this.grid[startRow - 2][startCol + 1] = 1;

            this.drawGrid();
        }

        drawGrid(){
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            for(let row = 0; row < this.rows; row++){
                for(let col = 0; col < this.cols; col++){
                    this.ctx.fillStyle = this.grid[row][col] ? "pink" : "purple";
                    this.ctx.fillRect(col * this.cell, row * this.cell, this.cell, this.cell);
                    this.ctx.strokeStyle = "pink";
                    this.ctx.strokeRect(col * this.cell, row * this.cell, this.cell, this.cell);
                }
            }
        }

        nextGen() {
            let newGrid = Array.from({ length: this.rows }, () => Array(this.cols).fill(0));
            for(let row = 0; row < this.rows; row++){
                for(let col = 0; col < this.cols; col++){
                    let numNeighbors = this.liveNeighbors(row, col);
                    if(this.grid[row][col] === 1){
                        newGrid[row][col] = (numNeighbors === 2 || numNeighbors === 3) ? 1 : 0;
                    } else {
                        newGrid[row][col] = (numNeighbors === 3) ? 1 : 0;

                    }
                }
            }
            return newGrid;
        }

        liveNeighbors(row, col){
            let directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
            let count = 0;

            for(let [dx, dy] of directions){
                let row2 = row + dx;
                let col2 = col + dy; 
                
                if (row2 >= 0 && row2 < this.rows && col2 >= 0 && col2 < this.cols) {
                    count += this.grid[row2][col2];
                }

            }

            return count;
        }

        updateGrid(){
            this.grid = this.nextGen();
            this.drawGrid();
            if (NRSTEPS > 0){
                NRSTEPS--;
            }
            if (NRSTEPS <= 0) {
                clearInterval(intervalID); // Stop animation when NRSTEPS reaches zero
            }
        
        }

        animate(){
            intervalId = setInterval(() => {
                this.updateGrid();
                this.drawGrid()
            }, 80);
        }

    }

    const gameGrid = new GameGrid("canvas", 50, 50, 20);
    gameGrid.init(); 
})();