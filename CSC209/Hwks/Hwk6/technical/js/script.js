(function() {
    class gameGrid {

        constructor(canvasId, rows, cols, cell) {
            this.canvasId = canvasId;
            this.rows = 50;
            this.cols = 50; 
            this.cell = cell;
        }

        init() {

            this.canvas - document.getElementById(this.canvasId);
            this.ctx = this.canvas.getContext('2d');
            this.canvas.width = this.cols * this.cell;
            this.canvas.height = this.rows * this.cell; 
            
        }
    }
})