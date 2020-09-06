import {vars} from './vars.js'
import {fetch_search,limpiar,buscar,reiniciar_searchbox} from './BUSCAR_TAB_FUNC.js'

vars.buscar.addEventListener('click',()=>{

  if(vars.buscar.classList.contains('active') == false){
    reiniciar_searchbox();
  }
  for(let i=0;i<2;i++){
    if(document.getElementById('opciones_busqueda').children[i].classList.contains('active'))
    document.getElementById('opciones_busqueda').children[i].classList.remove('active')
  }
    limpiar(); 
})
      

vars.options.addEventListener('click',(e)=>{
    
    reiniciar_searchbox();
    if(e.target.id == "nombre"){
      
       fetch_search("name");

    }else if (e.target.id == "user"){
       
       fetch_search("users");  
     
    }
  });
  
  vars.input.addEventListener('input',(e)=>{
    buscar(e.target.value);
  });