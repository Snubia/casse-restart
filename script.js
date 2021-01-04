const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')

// Create balls properties

const ball = {
    x: canvas.width /2,
    y: canvas.height /2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4
};

// Draw the ball in the canvas from canvas documentation

function drawball() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2); // Outer circle
    ctx.fillStyle = '#0095dd'; //filling the circle making it visible
    ctx.fill();
    ctx.closePath();
}
drawball();

// rules and close evt handlers

rulesBtn.addEventListener('click', () =>
rules.classList.add('show'));
closeBtn.addEventListener('click', () =>
rules.classList.remove('show'));
