const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')

let score = 0;
// bricks props
const brickRowcount = 9;
const brickColumnCount = 5;

// Create balls properties

const ball = {
    x: canvas.width /2,
    y: canvas.height /2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4
};

// create paddle properties
const paddle = {
    x: canvas.width /2 - 40,
    y: canvas.height - 20,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0
};

// create bricks properties:
const brickInfo = {
    w: 70,
    h: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visible: true // when hit the bricks dissapears
}

// create breacks (arrays with bricks inside)

const bricks = [];
for(let i =0; i < brickRowcount; i++) {
bricks[i] = [];
for(let j = 0; j < brickColumnCount; j++) {
    const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
    const y = j * (brickInfo.w + brickInfo.padding) + brickInfo.offsetY;
    bricks[i][j] = {x, y, ...brickInfo} // spread operator
} 
}
// Draw the ball in the canvas from canvas documentation

function drawball() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2); // Outer circle
    ctx.fillStyle = '#0095dd'; //filling the circle making it visible
    ctx.fill();
    ctx.closePath();
}


// Draw the paddle in the canvas from canvas documentation

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h); // rectangle
    ctx.fillStyle = '#0095dd'; //filling the circle making it visible
    ctx.fill();
    ctx.closePath();
}

// draw bricks on canvas


// Draw everything inside the canvas

function draw() {
    drawball();
    drawPaddle();
    drawScore();
}

// Draw score
function drawScore() {
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
}
draw();

// rules and close evt handlers

rulesBtn.addEventListener('click', () =>
rules.classList.add('show'));
closeBtn.addEventListener('click', () =>
rules.classList.remove('show'));
