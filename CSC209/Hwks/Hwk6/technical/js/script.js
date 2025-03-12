    class GameGrid {
        //contructor for GameGrid class
        constructor(canvasId, rows, cols, cell) {
            this.canvasId = canvasId;
            this.rows = rows;
            this.cols = cols; 
            this.cell = cell;
        }

        init() {
            //assigns all parameters for the grid
            this.canvas = document.getElementById(this.canvasId);
            this.ctx = this.canvas.getContext("2d");
            this.canvas.width = this.cols * this.cell;
            this.canvas.height = this.rows * this.cell; 
            this.grid = Array.from({length: this.rows}, () => Array(this.cols).fill(0));  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
            //draws grid and initializes cell pattern
            this.drawGrid();
            this.setPattern();
            //next button 
            document.getElementById('next').addEventListener("click", () => {
                gameGrid.updateGrid(); 
            });


        }

        setPattern(){
            this.grid = Array.from({length: this.rows}, () => Array(this.cols).fill(0)); //array method to make 2d array
            //start cell
            let startRow = 6;
            let startCol = 6;
            //makes pattern
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
                    this.ctx.fillStyle = this.grid[row][col] ? "black" : "white";
                    this.ctx.fillRect(col * this.cell, row * this.cell, this.cell, this.cell);
                    this.ctx.strokeStyle = "black";
                    this.ctx.strokeRect(col * this.cell, row * this.cell, this.cell, this.cell);
                }
            }
        }
        //Generates next grid to draw 
        nextGen() {
            let newGrid = Array.from({ length: this.rows }, () => Array(this.cols).fill(0));
            for(let row = 0; row < this.rows; row++){
                for(let col = 0; col < this.cols; col++){
                    let numNeighbors = this.liveNeighbors(row, col); //liveNeighbors counts how many live neighbors (colored cells) the cell has. if it has more than 2 it dies
                    if(this.grid[row][col] === 1){
                        newGrid[row][col] = (numNeighbors === 2 || numNeighbors === 3) ? 1 : 0;
                    } else {
                        newGrid[row][col] = (numNeighbors === 3) ? 1 : 0;

                    }
                }
            }
            return newGrid;
        }
        //Look one comment above
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
        }

    }

    document.getElementById('cols').addEventListener('input', (e) => {
        cols = parseInt(e.target.value, 10);
    });

    document.getElementById('rows').addEventListener('input', (e) => {
        rows = parseInt(e.target.value, 10)
    })

    document.getElementById('generate').addEventListener("click", () => {
        const gameGrid = new GameGrid("canvas", rows, cols, 20); 
        gameGrid.init(); 
    })
    //const gameGrid = new GameGrid("canvas", rows, cols, 20);
    //gameGrid.init(); 