const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const button = document.getElementById("generateNewPoints");
// Point properties
//const point = { x: 150, y: 150, radius: 10, color: 'blue' };

// Vector properties
//const vector = { x: 15, y: 15, color: 'blue' };
/*
const points = [
    { x: Math.random() * (300-1) + 1, y: Math.random() * (300-1) + 1, radius: 10, color: 'red', vector: { x: 15, y: 15 } },
    { x: Math.random() * (300-1) + 1, y: Math.random() * (300-1) + 1, radius: 10, color: 'green', vector: { x: -15, y: 15 } },
    { x: Math.random() * (300-1) + 1, y: Math.random() * (300-1) + 1, radius: 10, color: 'blue', vector: { x: 15, y: -15 } }
];
*/

function generateNewPoints(){
    const points = [];
    for(i = 0; i < NRPTS; i++){
        points[i] = { 
            x: Math.random() * (290-1) + 1, 
            y: Math.random() * (290-1) + 1, 
            radius: 10, color: `hsl(${Math.random() * 360}, 100%, 50%)`, 
            vector: { x: Math.ceil((Math.random() - 0.5) * 2) < 1 ? -15 : 15, y: Math.ceil((Math.random() - 0.5) * 2) < 1 ? -15 : 15 } }
    }
    return(points);
}

// Draw the point
function drawPoint(point) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
    ctx.strokeStyle = point.color;
    ctx.stroke();  
}

// Draw the vector
function drawVector(point) {
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
    ctx.lineTo(point.x + point.vector.x, point.y + point.vector.y);
    ctx.strokeStyle = point.color;
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Draw the scene
function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < points.length; i++){
        drawPoint(points[i]);
        drawVector(points[i]);
    }
}
// Update points when button is clicked
button.addEventListener('click', () => {
    points = generateNewPoints();
    drawScene();
});
 // Initial draw