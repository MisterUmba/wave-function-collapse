"use strict";

clear();
resize();

window.onresize = () => {
    resize();
    clear();
}


table_buffer(paths_and_rules, (obj_paths)=>{
    ImageLoader(obj_paths, (images)=>{
        screen_buffer(images, draw);
    });
})
    ;
