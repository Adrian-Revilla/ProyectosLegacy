"use strict";
var fotos,btns,btn_seleccion,flechas;
flechas={
    D:document.getElementById("derecha"),
    I:document.getElementById("izquierda")
};

fotos=document.getElementsByTagName("img");
btns=document.getElementById("btns");

for(var i=0;i<fotos.length;i++){ btns.children[i].addEventListener("click",cambiar_img); }
flechas.D.addEventListener("click",cambiar_img);
flechas.I.addEventListener("click",cambiar_img);

btn_seleccion=0;
fotos[btn_seleccion].style.display="block"; //Habilitar la primera imagen por defecto

function cambiar_img(arrow_btn){
    
    fotos[btn_seleccion].style.display="none";

    for(var i=0;i<btns.childElementCount;i++){ btns.children[i].className=""; }

    if(arrow_btn.target.id=="_1" || "_2" || "_3"){ arrow_btn.target.className="active"; }

    switch(arrow_btn.target.id){

        case "_1":
            btn_seleccion=0;
        break;

        case "_2":
            btn_seleccion=1;
        break;

        case "_3":
            btn_seleccion=2;
        break;

        case "derecha":
            btn_seleccion++;
        break;

        case "izquierda":
            btn_seleccion--;
        break;
    }

    if(btn_seleccion==fotos.length){ btn_seleccion=0; }

    if(btn_seleccion < 0){ btn_seleccion=(fotos.length-1); }

    fotos[btn_seleccion].style.display="block";

    btns.children[btn_seleccion].className="active";    
}