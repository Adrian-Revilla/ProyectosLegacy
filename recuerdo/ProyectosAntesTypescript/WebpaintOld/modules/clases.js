import {canvas_div,boolean} from "./variables";
export class color{
    constructor(c){
        this.c=c;
    }
    cambiar_color(){
        canvas_div.style.cursor='url("../img/pincel.ico"),auto'; //'url("img/pincel.ico"), auto'
        boolean.is_eraser_activated=false;
        return this.c.id;
    }
}
export var rojo= new color(document.getElementById("red"));
export var verde= new color(document.getElementById("green"));
export var azul= new color(document.getElementById("blue"));
