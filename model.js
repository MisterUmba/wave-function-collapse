let dimensions = { columns: 24, rows: 12 }

let paths_and_rules = {
    1: { src: "./pics/1.png", rules: [true, true, false, true] },
    2: { src: "./pics/2.png", rules: [false, false, false, false] },
    3: { src: "./pics/3.png", rules: [false, true, false, true] },
    4: { src: "./pics/4.png", rules: [true, true, true, true] },
    5: { src: "./pics/5.png", rules: [true, false, false, true] }
}

function rand(min, max) {
    let d = max - min;
    return Math.floor(Math.random() * d) + min;
}

function connecting_pieces(current_piece) {

}

function table_buffer(image_objects, callback) {
    console.log(image_objects)
    let buffer = [];
    let working_set = []

    // initiate buffer to all empties cells
    for (let i = 0; i < dimensions.rows; i++) {
        var aRow = [];
        for (let j = 0; j < dimensions.columns; j++) {
            aRow.push(image_objects[2])
        }
        buffer.push(aRow);
    }

    // Pick a random location, & give it random seed
    var rx = rand(0, dimensions.rows);
    var ry = rand(0, dimensions.columns);
    var tx = rand(0, Object.keys(image_objects).length) + 1;
    var test = image_objects[tx];
    buffer[rx][ry] = test;

    // put it in the working set list

    // while working set isn't empty
    // take the cell with least waves/potential
    // collapse it to random potential
    // add it's neighbors to the working set list. 
    console.log(buffer);
    callback(buffer);
}

function screen_buffer(image_object, callback) {
    buffer = []
    for (let i = 0; i < dimensions.rows; i++) {
        var aRow = [];
        for (let j = 0; j < dimensions.columns; j++) {
            aRow.push(image_object[i][j].img);
        }
        buffer.push(aRow);
    }



    callback(buffer);
}

function ImageLoader(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;

    numImages = Object.keys(sources).length;

    for (var obj in sources) {
        images[obj] = { img: new Image() };
        images[obj].img.onload = function () {

            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[obj].img.src = sources[obj].src;
        images[obj].rules = sources[obj].rules;
    }
}