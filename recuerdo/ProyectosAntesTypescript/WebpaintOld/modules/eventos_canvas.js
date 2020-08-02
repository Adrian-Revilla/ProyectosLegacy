import {size,canvas_div,canvas,_2d,canvas_cords,paintbrush,cleaners,boolean} from "./variables.js";
import {draw,erase} from "./funciones.js";

export var mousedown= canvas.addEventListener("mousedown",function(mouse){
    
    if(mouse.button==0){
        boolean.pressed=true;
    }
})

export var mousemove=canvas.addEventListener("mousemove", function(movement){

    var x=boolean.check();
    if(x==1){
        draw(movement.offsetX,movement.offsetY,paintbrush.color);               
    }else if(x==0){
        erase(movement.offsetX,movement.offsetY);
    }

})

export var mouseup=canvas.addEventListener("mouseup",reset);
export var mouseout=canvas.addEventListener("mouseout",reset);

function reset(){
    boolean.pressed=false; 
    canvas_cords.resetCords();
}
