import {vars} from './vars.js';
import {avatar,nombreYapellidos,edad_nacimiento_sexo,biografia,btn_submit} from './AGREGAR_TAB_FUNC.js';


vars.dragstart.addEventListener('dragstart',(e) => e.dataTransfer.setData('text/plain',e.target.id))

vars.dragstart.addEventListener('mouseover',(e)=>{
    switch(vars.dragstart.children.length){
        case 0:
            vars.dragstart.style.cursor='default';    
        break;
        default:
            vars.dragstart.style.cursor='move';    
        break;
    }
})

vars.dragend.addEventListener('dragover',(e)=>e.preventDefault())

vars.dragend.addEventListener('drop',(e)=>{
    
   e.preventDefault();
    //EL ELEMENTO A TRANSFERIR
    let elemento_li = e.dataTransfer.getData('text');
    //EL ELEMENTO FIELDSET QUE SE VA AGREGAR AL FORM LUEGO DE GENERAR TODO EL CONTENIDO
    let fieldset_final; 
    
    switch(elemento_li){ //escogiendo el tipo de elemento dependiendo de datatransfer
        case vars.ul_ids[0]:
            
             fieldset_final= avatar();
        break;
        case vars.ul_ids[1]:
                
              fieldset_final = nombreYapellidos();
        break;
        case vars.ul_ids[2]:
                
                fieldset_final = edad_nacimiento_sexo();
        break;
        case vars.ul_ids[3]:

                fieldset_final = biografia();
        break;
        default:
                return console.error();
        break;
    }

    
    //SI NO EXISTE WARNING-NOTHING (EL AVISO) elimina el elemento
    vars.dragstart.children.length != 0 && document.getElementById('warning-nothing')== null ? vars.dragstart.removeChild(document.getElementById(elemento_li)): false;

    //AVISO DE QUE NO HAY MAS ITEMS EN DRAGSTART
    vars.dragstart.children.length == 0 ? vars.dragstart.innerHTML='<h4 id="warning-nothing" style="cursor:help" class="text-muted" ondragstart="return false"><i>&check; Se han usado todos los módulos</i></h4>':false;
    
    //añade el boton al dragend si HAY ELEMENTOS AÑADIDOS EN EL FIELDSET_FINAL
    fieldset_final !== undefined ? vars.dragend.appendChild(fieldset_final) && btn_submit(true): btn_submit(false);

});