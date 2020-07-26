require('./index.scss');

"use strict";

const DomMainTag = document.querySelector("main") as HTMLElement;

DomMainTag.addEventListener('click', (e: Event) => {

    //IDENTIFICAR EL BOTON PRESIONADO
    const SelectedBtn = e.target as HTMLButtonElement;
    
    //USANDO SU ELEMENTO SPAN HIJO
    const SelectedBtn_child = SelectedBtn.firstElementChild as HTMLSpanElement;

    //USANDO EL ELEMENTO ADYACENTE
    const div = SelectedBtn.nextElementSibling as HTMLDivElement;
    
    // DESPLEGANDO O NO CONTENEDORES DIV EN FUNCION DEL CLASSNAME DEL Selected_child <- línea 12


    switch (SelectedBtn_child.className) {
        case 'plus':

            div.style.height = `${div.scrollHeight.toString()}px`;
            SelectedBtn_child.classList.replace('plus', 'minus');

            break;

        case 'minus':
            
            div.style.height = "0px";
            SelectedBtn_child.classList.replace('minus', 'plus');

            break;

        default:
            throw Error('something Happened')
    }
});