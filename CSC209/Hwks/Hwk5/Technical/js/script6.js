const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const button = document.getElementById("generateNewPoints");

const NRSTEPS_MAX = 30;
let NRSTEPS = NRSTEPS_MAX;
const points = [];

function generateNewPoints(){
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

function updatePoints() {
    for(i = 0; i < points.length; i++){
        // Scale the vector by the speed factor
        points[i].x += points[i].vector.x * 0.5;
        points[i].y += points[i].vector.y * 0.5;
        if (points[i].x <= 0 || points[i].x >= canvas.width) {
            points[i].vector.x = -points[i].vector.x; // Reverse x velocity
        }

        if (points[i].y <= 0 || points[i].y >= canvas.height) {
            points[i].vector.y = -points[i].vector.y; // Reverse y velocity
        }
    }
    if (NRSTEPS > 0){
        NRSTEPS--;
    }
    if (NRSTEPS <= 0) {
        clearInterval(intervalID); // Stop animation when NRSTEPS reaches zero
    }

}

function animate() {
    intervalID = setInterval(() => {
        drawScene();
        updatePoints();
    }, 80);
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
    NRSTEPS = NRSTEPS_MAX;
    drawScene();
    animate();
});
 // Initial draw