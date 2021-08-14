var backgroundimg;
var roverimg;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rover_x = 50;
var rover_y = 50;
var rover_height = 70;
var rover_width = 80;
var keydown;
var backgroundImgArray = ['nasa_image_1.jpg', 'nasa_image_2.jpeg', 'nasa_image_3.jpg', 'nasa_image_4.jpg'];
var random_img = Math.floor(Math.random() * 4);
console.log(random_img);
function add() {
    backgroundimg = new Image();
    backgroundimg.onload = uploadBackground;
    backgroundimg.src = backgroundImgArray[random_img];

    roverimg = new Image();
    roverimg.onload = uploadRover;
    roverimg.src = "rover.png";
}

function uploadBackground() {
    ctx.drawImage(backgroundimg, 0, 0, canvas.width + 200, canvas.height + 200);
}

function uploadRover() {
    ctx.drawImage(roverimg, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keydown = e.keyCode;
    if (keydown == 38) {
        up();
    }
    if (keydown == 40) {
        down();
    }
    if (keydown == 37) {
        left();
    }
    if (keydown == 39) {
        right();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x -= 5;
        add();
        }
}

function right() {
    if (rover_x <= 520) {
        rover_x += 5;
        add();      
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y -= 5;
        add();
    }
}

function down() {
    if (rover_y <= 325) {
        rover_y += 5;
        add();
    }
}
