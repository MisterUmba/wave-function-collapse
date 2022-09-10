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

function table_buffer(image_objects, callback) {
    // let obj_paths = paths_rules;

    // callback(obj_paths);
    let buffer = [];
    for (let i = 0; i < dimensions.rows; i++) {
        let aRow = [];
        for (let j = 0; j < dimensions.columns; j++) {
            let place = rand(0, Object.keys(image_objects).length)
            let cell = image_objects[Object.keys(image_objects)[place]];

            aRow.push(cell);

        }
        buffer.push(aRow);
    }
    callback(buffer);
}

function screen_buffer(image_objects, callback) {
    // Just passing stream of data to draw()
    // Might do something special in the future. 
    callback(image_objects);
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
    }
}