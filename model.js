let dimensions = { columns: 24, rows: 12 }

let image_list = {
    1: { src: "./pics/1.png"},
    2: { src: "./pics/2.png"},
    3: { src: "./pics/3.png"},
    4: { src: "./pics/4.png"},
    5: { src: "./pics/5.png"}
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
        images[obj] = { img: new Image()};
        images[obj].img.onload = function () {

            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[obj].img.src = sources[obj].src;
    }
}