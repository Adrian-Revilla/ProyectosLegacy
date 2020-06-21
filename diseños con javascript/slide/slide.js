"use strict";
var btn= document.getElementById("btn");
var x= document.getElementById("x");
var slider=document.getElementsByClassName("slideontop")[0];

btn.addEventListener("click",desplegar);

function desplegar(){

    var width_device;
    width_device=document.body.offsetWidth;
    btn.blur();  
    x.style.display="block";
    
    slider.style.visibility="visible";
    if(width_device <= 1160 ){
        slider.style.height="100vh";
    }else{
        slider.style.width="100%";
    }
}
x.addEventListener("click",cerrar);

function cerrar(){
    var width_device;
    width_device=document.body.offsetWidth;
    x.style.display="none";
   
    if(width_device <= 1160 ){
      
        slider.style.height="0vh";
    }else{    
        slider.style.width="0%";
    }    
    slider.style.visibility="hidden";
}

