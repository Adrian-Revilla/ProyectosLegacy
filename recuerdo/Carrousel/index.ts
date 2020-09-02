require('./index.scss');
require('./images/1.png');
require('./images/2.png');
require('./images/3.png');

"use strict";
//TODO: HACER DE ZERO EL CODIGO DEL CARRUSEL Y MEJORAR CSS. ES DECIR HACER TODO.



let fotos = document.getElementsByTagName("img") as HTMLCollectionOf<HTMLImageElement>,
    btn_seleccion: number,
    flechas = {
        D: document.getElementById("derecha") as HTMLSpanElement,
        I: document.getElementById("izquierda") as HTMLSpanElement
    },
    btns = document.getElementById("btns") as HTMLDivElement,
    main = document.querySelector("main") as HTMLElement;


btn_seleccion = 0;
fotos[btn_seleccion].style.display = "block"; //Habilitar la primera imagen por defecto


main.addEventListener("click", (e: Event) => {
    const Selection = e.target as HTMLElement;

    fotos[btn_seleccion].style.display = "none";

    for (var i = 0; i < btns.childElementCount; i++) { btns.children[i].className = ""; }
    
    if (Selection.id == "_1" || "_2" || "_3") { Selection.className = "active"; }


    switch (Selection.id) {

        case "_1":
            btn_seleccion = 0;
            break;

        case "_2":
            btn_seleccion = 1;
            break;

        case "_3":
            btn_seleccion = 2;
            break;

        case "derecha":
            btn_seleccion++;
            break;

        case "izquierda":
            btn_seleccion--;
            break;
    }

    if (btn_seleccion == fotos.length) { btn_seleccion = 0; }

    if (btn_seleccion < 0) { btn_seleccion = (fotos.length - 1); }

    fotos[btn_seleccion].style.display = "block";

    btns.children[btn_seleccion].className = "active";
    
});

