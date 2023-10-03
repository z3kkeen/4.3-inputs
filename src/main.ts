const canvas = document.createElement('canvas');
canvas.width = 1000;
canvas.height = 700;
const context = canvas.getContext('2d')!;
document.querySelector('#app')!.append(canvas);

let player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    w: 100,
    h: 50,
    r: 25,
    color: 'orange'
}

let W: boolean = false;
let A: boolean = false;
let S: boolean = false;
let D: boolean = false;

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

requestAnimationFrame(gameLoop);

function gameLoop() {

    context.clearRect(0, 0, canvas.width, canvas.height);
    update();
    checkCollision();
    drawPlayer(player.x, player.y, player.w, player.color);
    requestAnimationFrame(gameLoop);
};

function drawPlayer(x: number, y: number, w: number, color: string) {
    context.beginPath();
    context.arc(x, y, w / 2, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
};

function onKeyDown(e: any) {
    if(e.key == "w") {
        W = true;
    };

    if(e.key == "a") {
        A = true;
    };

    if(e.key == "s") {
        S = true;
    };

    if(e.key == "d") {
        D = true;
    };
};

function onKeyUp(e: any) {
    if(e.key == "w") {
        W = false;
    };

    if(e.key == "a") {
        A = false;
    };

    if(e.key == "s") {
        S = false;
    };

    if(e.key == "d") {
        D = false;
    };
};

function update() {
    if(W) {
        context.fillRect(0, player.y -= 6, 0, 0);
    };

    if(A) {
        context.fillRect(player.x -= 6, 0, 0, 0);
    };

    if(S) {
        context.fillRect(0, player.y += 6, 0, 0);
    };

    if(D) {
        context.fillRect(player.x += 6, 0, 0, 0);
    };
};

function checkCollision() {
    // Check right edge collision
    if (player.x + player.w / 2 >= canvas.width) {
        player.x = canvas.width - player.w / 2;
      }
  
      // Check left edge collision
      if (player.x - player.w / 2 <= 0) {
        player.x = player.w / 2;
      }
  
      // Check top edge collision
      if (player.y - player.w / 2 <= 0) {
        player.y = player.w / 2;
      }
  
      // Check bottom edge collision
      if (player.y + player.w / 2 >= canvas.height) {
        player.y = canvas.height - player.w / 2;
      }
}