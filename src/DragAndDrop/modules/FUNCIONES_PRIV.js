import { vars } from "./vars.js";

import {btn_submit} from './AGREGAR_TAB_FUNC.js';
//--------------------- FUNCIONES PRIVADAS ----------------
    //FUNCIONES DE AGREGAR_TAB

//ESQUELETO DE CADA FIELDSET
export function generar_elementos_comunes(id_val,nombre_field,id_global){
 
     let fieldset = document.createElement('fieldset');
     fieldset.classList.add('accordion','li_innertml-relative','border-0');
     fieldset.setAttribute('id',`acordeon${id_val}`)
 
     let heading = document.createElement('div');
     heading.classList.add('card','mb-2','border-0');
     
     let div_titulo =document.createElement('div');
     div_titulo.classList.add('card-header','d-flex','justify-content-between','flex-column','flex-sm-column','flex-md-row','align-items-center','w-100','bg-white');
     
     let h4 = document.createElement('h4');
     h4.classList.add('mb-0')
     h4.innerHTML= `<btn data-toggle ="collapse" class=" btn btn-success w-100" style="cursor:pointer;user-select:none;display:block">${nombre_field}</btn>`; // nombre_field 
   
     let x = document.createElement('span');
     
     x.classList.add('hover_x','bagde',);
     
     x.innerHTML='&times;';
     x.style.display='block'
 
     x.addEventListener('click',()=>{
         let element = x.parentNode.parentNode.parentNode;
         descartar(element,id_global,nombre_field);
     })
     
     div_titulo.appendChild(h4) // EL H4 CON EL DIV TITULO
     div_titulo.appendChild(x); //SE AGREGA LA X AL divtitulo
         
     
     heading.appendChild(div_titulo)  // EL DIV TITULO A EL DIV CABEZERA
     
     fieldset.appendChild(heading); //FINALMENTE SE AGREGA AL DIV PADRE, FIELDSET
 
     return fieldset;
}

//BODY DE CADA FIELDSET
export function generar_body_comun(div_name,fieldset_id){
    
     let div_parent= document.createElement('div');
     let div_body= document.createElement('div');
     
     div_parent.setAttribute('data-parent','#'+fieldset_id);
     div_parent.classList.add('collapse','show')
     div_parent.id=`${div_name}`;
 
     div_body.classList.add('card-body','border-bottom','rounded');
 
     div_parent.appendChild(div_body);
 
     return div_parent;
}

//accion previa del botón enviar 
export function checkdata(){
    let form= document.getElementById('form');
    var i;
    for(i=0;i<form.children.length;i++){
      let colapsable= form.children[i].firstElementChild.lastElementChild;
      
      if(!colapsable.classList.contains('show')){
          colapsable.classList.add('show')
      }
    }
 
 
 var validacion = vars.dragend.reportValidity();
   if(!validacion){
      error_submit('<h4>VERIFIQUE SUS DATOS.</h4>');
  }else{
      //ANIMACION DE LOADING MIENTRAS SE ENVIA HACIA EL SERVER
      console.log('fetch hacia server')
  } 

}

//muestra del archivo de avatar
export function procesarImagen(img){

    document.getElementById('img-thumbnail').innerHTML=""
  
  let img_from_device= img.target.files[0]
  
  document.getElementById('img-label').textContent= img_from_device.name;
  
  //2do. preparar la zona donde se pondra la imagen
  
      let preview = document.createElement('img');
      var reader = new FileReader();
      reader.onloadend = ()=>{
          preview.src = reader.result;
      }
      
      if (img_from_device){
          reader.readAsDataURL(img_from_device);
      }else{
          preview.src="";
      }
  
       preview.height='300'
      preview.width='300' 
      preview.classList.add('img-fluid');
      document.getElementById('img-thumbnail').appendChild(preview);
  
}


//-----------------FUNCIONES SECUNDARIAS DE AGREGAR TAB----------------
function descartar(element,id_global,nombre_field){
     
    vars.dragend.removeChild(element);

    let li = document.createElement('li');

    li.innerHTML=nombre_field;

    li.classList.add('list-group-item','list-group-item-action');

    li.setAttribute('draggable','true');

    li.id=id_global;

    if(document.getElementById('warning-nothing')){
        vars.dragstart.innerHTML=''
    }

    vars.dragstart.appendChild(li);

    vars.dragend.children.length==0 ? btn_submit(false):true
}

function error_submit(msg){
    
    document.getElementById('btn-send').setAttribute('disabled','')
    let alert= document.createElement('section');
    alert.innerHTML=msg;
    
    alert.classList.add('alert','bg-danger','w-50','fixed','text-white','text-center');

    alert.classList.add('section-x')
    alert.setAttribute('role','alert');
    
    document.body.insertBefore(alert,document.getElementById('home_header'));
    
    setTimeout(() => {
    
        document.getElementById('btn-send').removeAttribute('disabled')

    
    }, 3000);    


    
   
}

/* 
$(".section-x").fadeOut("fast",function(){
            $(".section-x").addClass('hidden');
            document.getElementById('btn-send').removeAttribute('disabled')
       });

*/


