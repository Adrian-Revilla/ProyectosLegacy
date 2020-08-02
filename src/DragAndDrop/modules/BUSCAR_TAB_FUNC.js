/* import {vars} from './vars.js';

export function limpiar(){
    if(vars.busqueda_.childElementCount>1){
        vars.busqueda_.removeChild(vars.busqueda_.lastElementChild);
    }
}

export function buscar(string){
    let i,
        ul_data = document.getElementById('section_list'),
        li_innerhtml,
        boolean=false;
        console.log(string);
        for(i=0;i<ul_data.children[0].childElementCount;i++){
            
          li_innerhtml = ul_data.children[0].children[i].innerHTML.toLowerCase();
    
            boolean=li_innerhtml.includes(string.toLowerCase());
            
            if(boolean){
                ul_data.children[0].children[i].style.display='block';
            }else{
                ul_data.children[0].children[i].style.display='none';
            }
        }

}

export function reiniciar_searchbox(){

        vars.input.setAttribute('disabled','');
        vars.input.setAttribute('placeholder','Ingresa aqui tus datos');
        vars.input.value='';
    
}

export function fetch_search(param){
    

    let obj= JSON.stringify({uno:`${param}`})
    let final_data;
    fetch(`/data`,
    {
        method:'POST',
        body: obj,
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(res=>res.json())
    .then((data) => {
        
        final_data=Object.values(data);
        return generar_html(final_data)

    })
} 

function generar_html(array){
 
    let busqueda_ = document.getElementById('busqueda_');
    document.getElementById('section_list') ? busqueda_.removeChild(busqueda_.lastElementChild):false
    let section= document.createElement('section');
    let lista= document.createElement('ul');
    lista.classList.add('list-group','list-group-flush','mt-2','hide_ul');
    let i;   
    for(i=0;i<array.length;i++){
       let li = document.createElement('li');
       li.classList.add('list-group-item','text-dark','h5');
       li.innerHTML=array[i];
       lista.appendChild(li)
    }
    section.id='section_list';
    section.appendChild(lista);
    document.getElementById('busqueda_').appendChild(section);
   
       //LUEGO DE GENERAR TODO EL HTML, SE HABILITA LA CASILLA
           console.log(array)
           vars.input.removeAttribute('disabled')
           vars.titulo.innerHTML='Utiliza el campo de texto'
   
           
   }
   
    */