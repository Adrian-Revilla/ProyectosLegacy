export const size= 32;

export var canvas_div=document.getElementsByTagName("div")[0];

export var canvas = document.getElementById("canvas_");

export var _2d=canvas.getContext("2d");

export var canvas_cords={
    x_final:undefined,
    y_final:undefined,
    resetCords:function(){
        this.x_final=undefined;
        this.y_final=undefined;
    }
};

export let paintbrush={
    color:undefined
}

export var cleaners={
    clean_all:document.getElementById("limpiar"),
    clean_by_parts:document.getElementById("limpiar_partes")
};

export var boolean ={
    
    pressed:false,
    is_eraser_activated:false,
    check:function(){
      if(this.pressed== true && this.is_eraser_activated==true){
        return 0;
      }else if(this.pressed==true && this.is_eraser_activated==false){
        return  1;
      }      
    }
}; 

