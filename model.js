let dimensions = { columns: 12, rows: 12 }

let image_list = {
    1: { src: "./pics/1.png", ang: 0 },
    2: { src: "./pics/2.png", ang: 0 },
    3: { src: "./pics/3.png", ang: 0 },
    4: { src: "./pics/4.png", ang: 0 },
    5: { src: "./pics/5.png", ang: 0 }
}

function rand(min, max){
    let d = max - min;
    return Math.floor(Math.random()*d) + min;
}

function screen_buffer(callback) {
    let buffer = [];
    ImageLoader(image_list, (images) => {
        for (let i = 0; i < dimensions.rows; i++) {
            let aRow = [];
            for (let j = 0; j < dimensions.columns; j++) {
                let place = rand(0, Object.keys(images).length)
                let cell = images[Object.keys(images)[place]];
                
                // cell.ang = [0,Math.PI/2, Math.PI, (2*Math.PI)*(3/4), 2*Math.PI][rand(0,4)]

                aRow.push(cell);

            }
            buffer.push(aRow);
        }
        callback(buffer);
    })
    
}



function ImageLoader(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;

    numImages = Object.keys(sources).length;

    for (var obj in sources) {
        images[obj] = { img: new Image(), ang: sources[obj].ang };
        images[obj].img.onload = function () {

            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[obj].img.src = sources[obj].src;
    }
}