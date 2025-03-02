const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Point properties
const point = { x: 150, y: 150, radius: 10, color: 'blue' };

// Vector properties
const vector = { x: 15, y: 15, color: 'blue' };

// Draw the point
function drawPoint() {
    ctx.beginPath();
    ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
    ctx.strokeStyle = point.color;
    ctx.stroke();  
}

// Draw the vector
function drawVector() {
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
    ctx.lineTo(point.x + vector.x, point.y + vector.y);
    ctx.strokeStyle = vector.color;
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Draw the scene
function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPoint();
    drawVector();
}

drawScene();  // Initial draw