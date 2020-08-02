import {size,canvas_div,canvas,_2d,canvas_cords,paintbrush,cleaners,boolean} from "./variables.js";
import {color,rojo,verde,azul} from "./clases.js";
import {mousedown,mousemove,mouseup,mouseout} from "./eventos_canvas.js";
import {draw,erase} from "./funciones.js";
import {pincel_red,pincel_green,pincel_blue,borrador,pantalla} from "./eventos_opciones.js";







//EN CASO DE QUE LA PANTALLA SEA MUY PEQUEÑA. ADAPTA EL CANVAS.
if(document.body.offsetWidth <= 814){ canvas.width=300;} 
//DESACTIVA CLICK DERECHO
canvas.oncontextmenu=function(){return false};

//CUANDO LA PANTALLA SE REDIMENSIONA
 window.onresize=function(){
     if(document.body.offsetWidth <= 814){ canvas.width=300;}
     else{ canvas.width=800;}
 };
 

