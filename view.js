"using strict";

let canvas = document.getElementById("canvas_screen");
let pen = canvas.getContext("2d");


// Make the canvas as large as the page
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function resize() {
    // Lookup the size the browser is displaying the canvas.
    let dispW = window.innerWidth;
    let dispH = window.innerHeight;

    // Check if canvas is not same size
    if (canvas.width !== dispW || canvas.height !== dispH) {
        // Make the canvas the same size
        canvas.width = dispW;
        canvas.height = dispH;
    }
}

function draw(screen) {
    console.log(screen);
    for (let i = 0; i < screen[0].length; i++) {
        for (let j = 0; j < screen.length; j++) {
            var x = i * (canvas.width / dimensions.columns);
            var y = j * (canvas.height / dimensions.rows);
            var w = (canvas.width / dimensions.columns);
            var h = (canvas.height / dimensions.rows);
            pen.save();
            pen.drawImage(screen[j][i], x, y, w, h)
            pen.restore();
        }
    }
}

function clear() {
    pen.save();
    pen.fillStyle = "blue";
    pen.fillRect(0, 0, canvas.width, canvas.height);
    pen.restore();
}