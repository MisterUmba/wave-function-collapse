"use strict";

clear();
resize();

window.onresize = () => {
    resize();
    clear();
}


ImageLoader(paths_and_rules, (obj_paths)=>{
    table_buffer(obj_paths, (images)=>{
        screen_buffer(images, draw);
    });
})
    ;
