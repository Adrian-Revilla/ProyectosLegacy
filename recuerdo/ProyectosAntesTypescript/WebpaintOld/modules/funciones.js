import {_2d,canvas_cords,size} from "./variables";
//realiza el trazo
export function draw(x,y,color_l="red"){

    _2d.beginPath();
    _2d.strokeStyle=color_l;
    _2d.lineWidth=2;
    _2d.moveTo(x,y);
    _2d.lineTo(canvas_cords.x_final,canvas_cords.y_final);
    _2d.stroke();
    canvas_cords.x_final=x;
    canvas_cords.y_final=y;
}

//BORRA LA ZONA MARCADA CON LA OPCION BORRADOR
export function erase(x,y){
    _2d.clearRect(x,y,size,size);
}