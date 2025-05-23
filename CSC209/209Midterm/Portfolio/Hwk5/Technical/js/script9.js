const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const button = document.getElementById("generateNewPoints");
const animateBtn = document.getElementById("animate");
const resetBtn = document.getElementById("reset");
const showTraceCheckbox = document.getElementById('showTrace');

//I still have no idea how to get the trace to work

function generateNewPoints(){
    for(i = 0; i < NRPTS; i++){
        let x = Math.random() * (290-1) + 1
        let y = Math.random() * (290-1) + 1
        points[i] = { 
            x: x, 
            y: y, 
            originalX: x,
            originalY: y,
            radius: 10, 
            color: `hsl(${Math.random() * 360}, 100%, 50%)`, 
            vector: { x: Math.ceil((Math.random() - 0.5) * 2) < 1 ? -15 : 15, y: Math.ceil((Math.random() - 0.5) * 2) < 1 ? -15 : 15 },
            trail: []
         }
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
    vectors.push({x: point.vector.x, y: point.vector.y})
}

function drawTrace(point) {
    ctx.beginPath();
    ctx.moveTo(point.trail[0].x, point.trail[0].y); // Start from the first point in the trail
    for (let j = 1; j < point.trail.length; j++) {
        ctx.lineTo(point.trail[j].x, point.trail[j].y); // Draw line to each subsequent trail point
    }
    ctx.strokeStyle = point.color;  // Set the color of the trail
    ctx.lineWidth = 2;  // Set the line width for the trail
    ctx.stroke();
}

function updatePoints() {
    for(i = 0; i < points.length; i++){
        // Scale the vector by the speed factor
        points[i].x += points[i].vector.x * 0.5;
        points[i].y += points[i].vector.y * 0.5;
        points[i].trail.push({ x: points[i].x, y: points[i].y });

        // Keep the trail length within limits
        if (points[i].trail.length > 100) {
            points[i].trail.shift();
        }

        if (points[i].x <= 0 || points[i].x >= canvas.width) {
            points[i].vector.x = -points[i].vector.x; // Reverse x velocity
        }

        if (points[i].y <= 0 || points[i].y >= canvas.height) {
            points[i].vector.y = -points[i].vector.y; // Reverse y velocity
        }
        if (showTraceCheckbox.checked) {
            drawTrace(points[i]);
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
        //drawScene();
        updatePoints();
        drawScene();
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

function reset() {
    for(i = 0; i < points.length; i++){
        points[i].x = points[i].originalX;
        points[i].y = points[i].originalY;
    }
}
button.addEventListener('click', () => {
    points = generateNewPoints();
    drawScene();
});


document.getElementById('numPoints').addEventListener('input', (e) => {
    NRPTS = parseInt(e.target.value, 10);
});

animateBtn.addEventListener('click', () => {
    //points = generateNewPoints();
    NRSTEPS = NRSTEPS_MAX;
    drawScene();
    animate();
});

resetBtn.addEventListener('click', () => {
    clearInterval(intervalID);
    reset();
    drawScene();
});
