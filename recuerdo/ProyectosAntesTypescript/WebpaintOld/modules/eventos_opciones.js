import {rojo,verde,azul} from "./clases.js";
import {canvas_div,canvas,_2d,cleaners,boolean,paintbrush} from "./variables.js"

//AL HACER CLICK CAMBIA EL COLOR DEL PINCEL
export var pincel_red= rojo.c.addEventListener("click",function(){
    
    paintbrush.color=rojo.cambiar_color();
})

export var pincel_green= verde.c.addEventListener("click",function(){  
     paintbrush.color=verde.cambiar_color(); 
});
export const pincel_blue= azul.c.addEventListener("click",function(){ 
     paintbrush.color=azul.cambiar_color(); 
});
 
//ACTIVA EL BORRADOR
export const borrador= cleaners.clean_by_parts.addEventListener("click",function(){  
    canvas_div.style.cursor='url("../img/eraser.png"), auto';
    boolean.is_eraser_activated=true;
});

//LIMPIA LA PANTALLA COMPLETA
export const pantalla= cleaners.clean_all.addEventListener("click",function(){
    _2d.clearRect(0,0,canvas.width,canvas.height);
});

