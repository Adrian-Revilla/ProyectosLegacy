/* import {vars} from './vars.js';
import {generar_body_comun,generar_elementos_comunes,checkdata,procesarImagen} from './FUNCIONES_PRIV.js'

export function avatar(){

    //SE CREA EL FIELDSET GENÉRICO
    let fieldset= generar_elementos_comunes(1,'Avatar',vars.ul_ids[0])
    
    //SE CREA EL CUERPO DEL CARD
    let fieldset_body= generar_body_comun('div_avatar',fieldset.id);
 
     //MODIFICACION DEL H4 PARA DIRIGIR EL HEADER AL CONTENEDOR div_avatar_body
     let h4 = fieldset.firstElementChild.firstElementChild.firstElementChild.firstElementChild;
 
     h4.setAttribute('data-target',`#${fieldset_body.id}`) 
     
     
     
     let $FIELDSET_CONTENT= fieldset_body.firstElementChild; 
 
     $FIELDSET_CONTENT.classList.add('d-flex','align-items-center','flex-column','flex-sm-column','flex-md-column','flex-lg-column','flex-xl-column','w-100',)


     let formgroup_img=document.createElement('section');
     formgroup_img.id='img-thumbnail';
     formgroup_img.classList.add('img-thumbnail','mb-2')
     
     
     let formgroup1= document.createElement('section');
     formgroup1.classList.add('custom-file');
 
 
     let imagen_submit_label= document.createElement('label');
     imagen_submit_label.classList.add('custom-file-label');
     imagen_submit_label.textContent=
     'Escoja el archivo...';
     
     imagen_submit_label.id='img-label';

     let imagen_submit= document.createElement('input');
        imagen_submit.setAttribute('type','file');
        imagen_submit.setAttribute('name','imagen_profile');
        imagen_submit.setAttribute('required','');
        imagen_submit.classList.add('custom-file-input')
        imagen_submit.setAttribute('accept','.png, .jpg, .jpeg')
     
     imagen_submit.addEventListener('change',procesarImagen)

     formgroup1.appendChild(imagen_submit_label);
     formgroup1.appendChild(imagen_submit);

     $FIELDSET_CONTENT.appendChild(formgroup_img);
     $FIELDSET_CONTENT.appendChild(formgroup1);
     fieldset_body.appendChild($FIELDSET_CONTENT);
     fieldset.firstElementChild.appendChild(fieldset_body);

     return fieldset; 
}
 
export function nombreYapellidos(){
     
    
     let regex= '[a-zA-ZÀ-ÿ\u00f1\u00d1]{1,20} [a-zA-ZÀ-ÿ\u00f1\u00d1]{0,20}$';
     let fieldset= generar_elementos_comunes(2,'Nombre y Apellidos',vars.ul_ids[1]) //SE CREA EL TAB 
 
     let fieldset_body= generar_body_comun('div_nombre_apellidos',fieldset.id); 
 
     //MODIFICACION DEL H4 PARA DIRIGIR EL HEADER AL CONTENEDOR fieldset_body
     
     let h4 = fieldset.firstElementChild.firstElementChild.firstElementChild.firstElementChild;
     
 
     h4.setAttribute('data-target',`#${fieldset_body.id}`) //EL VALOR DE FIELDSET_BODY SERA IGUAL AL PRIMER ARGUMENTO DE GENERAR_BODY_COMUN
     
    
     
     //SECTION ESPECIAL DEL ACORDEON que irá dentro del fieldset_body LLAMADO <<-- FIELDSET_CONTENT  -->>
 
 
     let $FIELDSET_CONTENT= fieldset_body.firstElementChild; 
 
     $FIELDSET_CONTENT.classList.add('d-flex','justify-content-center','flex-column','flex-sm-column','flex-md-column','flex-lg-row','flex-xl-row','w-100')   
 
     let nombre = document.createElement('input');
     let apellido =document.createElement('input');
     
     let label_nombre = document.createElement('label');
     let label_apellido = document.createElement('label');

     let nombre_id='nombre_input';
     let apellido_id='apellido_input';
 
     let form_group1= document.createElement('section')
 
     label_nombre.setAttribute('for',nombre_id);
     label_nombre.textContent='Nombre'
     label_nombre.classList.add('h6')
     
     nombre.setAttribute('type','text');
     nombre.id=nombre_id
     nombre.classList.add('form-control','flex-fill');
     nombre.setAttribute('placeholder','Tu nombre...')
     nombre.setAttribute('name',nombre_id+'_')
     nombre.setAttribute('required',"");   
     nombre.setAttribute('pattern',regex);
     nombre.setAttribute('maxlength','20')
 
     form_group1.appendChild(label_nombre)
     form_group1.appendChild(nombre);
     form_group1.classList.add('form-group','w-100','w-sm-100','w-md-50','ml-0','ml-md-1');
 
 
     let form_group2= document.createElement('section')
     label_apellido.setAttribute('for',apellido_id);
     label_apellido.textContent='Apellido';
     label_apellido.classList.add('h6');
 
 
     apellido.setAttribute('type','text');
     apellido.id=apellido_id;
     apellido.classList.add('form-control')
     apellido.setAttribute('placeholder','Tu apellido...')
     apellido.setAttribute('name',apellido_id+'_')
     apellido.setAttribute('required',"");
     apellido.setAttribute('pattern',regex)
     apellido.setAttribute('maxlength','20')
     form_group2.appendChild(label_apellido);
     form_group2.appendChild(apellido);
     form_group2.classList.add('form-group','w-50','ml-0','w-100','w-sm-100','w-md-50','ml-md-1')
 
     $FIELDSET_CONTENT.appendChild(form_group1)
     $FIELDSET_CONTENT.appendChild(form_group2)
    
     
     let muted_text=document.createElement('small');
     fieldset_body.classList.add('text-center')
 
     muted_text.innerHTML='Máximo caracteres 20 por cada casilla; <strong>solo puede contener letras y vocales acentuadas (acento grave , agudo, acento circunflejo y dieresis tanto en mayúscula como minúscula ).</strong> DEBE TENER 1 ESPACIO ENTRE CARACTERES Y NO PUEDE HABER ESPACIOS AL PRINCIPIO'
     muted_text.classList.add('text-muted')
     
     fieldset_body.appendChild(muted_text)
     
 
     fieldset.firstElementChild.appendChild(fieldset_body);
     
 
     
     return fieldset;
}
 
export function edad_nacimiento_sexo(){
     let fieldset= generar_elementos_comunes(3,'Edad y Año de nacimiento',vars.ul_ids[2])
 
     let fieldset_body= generar_body_comun('div_edad_nacimiento_sexo',fieldset.id);
    
 //ENCONTRANDO EL BOTON DEL APARTADO
     let h4 = fieldset.firstElementChild.firstElementChild.firstElementChild.firstElementChild;
     
     h4.setAttribute('data-target',`#${fieldset_body.id}`) 
     
 
 //SECTION ESPECIAL DEL ACORDEON que irá dentro del fieldset_body LLAMADO <<-- FIELDSET_CONTENT  -->>
 
     let $FIELDSET_CONTENT= fieldset_body.firstElementChild; 
 
     $FIELDSET_CONTENT.classList.add('d-flex','justify-content-center','flex-column','flex-sm-column','flex-md-column','flex-lg-row','flex-xl-row','w-100')   
 
     let calendario = document.createElement('input');
     let numero =document.createElement('input');
     
     let label_calendario = document.createElement('label');
     let label_numero = document.createElement('label');
     
     let calendario_id='calendario_input';
     let numero_id='numero_input';
 
     let formgroup1=document.createElement('section');
 
     label_calendario.setAttribute('for',calendario_id);
     label_calendario.textContent='Año de nacimiento:'
     label_calendario.classList.add('h6');
 
     calendario.setAttribute('type','date')
     calendario.style.display='block';
     calendario.classList.add('form-control')
     calendario.setAttribute('min','2000-01-01')
     calendario.setAttribute('max','2050-01-01')
     calendario.setAttribute('name',calendario_id+'_')
     calendario.setAttribute('required','')
     calendario.id=calendario_id
     
 
     formgroup1.classList.add('form-group','w-100','w-sm-100','w-md-50','ml-0','ml-md-1');
     formgroup1.appendChild(label_calendario);
     formgroup1.appendChild(calendario);
 
     let formgroup2=document.createElement('section');
     label_numero.setAttribute('for',numero_id);
     label_numero.classList.add('h6');
     label_numero.textContent='Edad:'
 
 
     numero.setAttribute('type','number')
     numero.classList.add('form-control')
     numero.id=numero_id;
     numero.setAttribute('min','1');
     numero.setAttribute('max','100');
     numero.setAttribute('name',numero_id+'_')
     numero.setAttribute('placeholder','1-100')
     numero.setAttribute('required','')
     numero.style.display='block';
    
 
     formgroup2.classList.add('form-group','w-50','ml-0','w-100','w-sm-100','w-md-50','ml-md-1');
     formgroup2.appendChild(label_numero);
     formgroup2.appendChild(numero)
 
     $FIELDSET_CONTENT.appendChild(formgroup1);
     $FIELDSET_CONTENT.appendChild(formgroup2);
     
     fieldset_body.appendChild($FIELDSET_CONTENT);
 
     fieldset.firstElementChild.appendChild(fieldset_body)
     
 
     return fieldset;
 
}
 
export function biografia(){
 
     let fieldset= generar_elementos_comunes(4,'Biografía',vars.ul_ids[3])
 
     let fieldset_body= generar_body_comun('div_biografia',fieldset.id);
 
     //MODIFICACION DEL H4 PARA DIRIGIR EL HEADER AL CONTENEDOR div_avatar_body
     let h4 = fieldset.firstElementChild.firstElementChild.firstElementChild.firstElementChild;
 
     h4.setAttribute('data-target',`#${fieldset_body.id}`) 
     
     //SECTION ESPECIAL DEL ACORDEON
 
     let $FIELDSET_CONTENT= fieldset_body.firstElementChild; 
 
     $FIELDSET_CONTENT.classList.add('d-flex','flex-column','flex-sm-column','flex-md-column','flex-lg-row','flex-xl-row','w-100')
 
 
     let formgroup1= document.createElement('section');
     let text_label= document.createElement('label');
     let text_area= document.createElement('textarea');
     let text_area_id='textarea_';
 
     text_label.setAttribute('for',text_area_id);
     text_label.textContent='Cuéntanos sobre ti:'
     text_label.className='h6'
 
     text_area.className='form-control'
     text_area.id=text_area_id;
     text_area.setAttribute('name',text_area_id+'_')
     text_area.setAttribute('placeholder','...')
     text_area.setAttribute('maxlength','500')
     text_area.style.minHeight='300px'
     text_area.style.maxHeight='300px'
     text_area.setAttribute('required','');
 
     formgroup1.className='w-100'
     formgroup1.appendChild(text_label);
     formgroup1.appendChild(text_area);
 
     
 
     $FIELDSET_CONTENT.appendChild(formgroup1);
 
     fieldset_body.appendChild($FIELDSET_CONTENT);
 
 
 
     let muted_text=document.createElement('small');
     fieldset_body.classList.add('text-center')
 
     muted_text.innerHTML='<strong>Máximo <ins>500</ins> caracteres</strong>'
     muted_text.classList.add('text-muted')
     
     fieldset_body.appendChild(muted_text)
 
 
 
     fieldset.appendChild(fieldset_body)
     fieldset.firstElementChild.appendChild(fieldset_body);
 
     return fieldset;
}

export function btn_submit(boolean){
 
    const box = document.getElementById('agregar');
    
    if(boolean && document.getElementById('btn-send') == null){

        vars.dragend.addEventListener('submit',(e)=>{
            
            e.preventDefault();
            
           
        })
  
        let btn= document.createElement('input');
        btn.value='Enviar';
        btn.classList.add('btn','btn-info','w-25','float-right')
        btn.id='btn-send';
        btn.setAttribute('type','submit')
        btn.addEventListener('click',(e)=>{
            e.preventDefault();
            checkdata();
            
        })
        
        box.appendChild(btn);
        

    }else if(!boolean){
        box.removeChild(document.getElementById('btn-send'))
    }
    
    
}
 */