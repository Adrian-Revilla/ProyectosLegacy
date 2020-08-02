import {remover_fetch_respuesta} from './remover_fetch_respuesta.js';
import {respuesta_fetch} from './respuesta_fetch.js';

export let formulario =document.getElementById('formdata');

formulario.addEventListener("submit",send);
formulario.addEventListener('keypress',(e)=>{
    let key = e.charCode || e.keyCode;
    if(key==13){
        e.preventDefault();
    }
})


function send(event){
    
    event.preventDefault(); //evita el post automatico
    if(event.path){
        var submit=event.path[0].children[3]
    }else{
        var target = event.composedPath();
        var submit = target[0].children[3];
       
    }

     

    submit.classList.add('disabled');
    submit.setAttribute('disabled','');

    
    let formdata= new FormData(formulario);

     fetch('/login/ingresar',{
        method:'POST',
        body: formdata

    }).then(res =>{

       return res.json();
       
    }).then(data =>{
        
        remover_fetch_respuesta();
        
        let auth = respuesta_fetch(data);
        if(!auth){
            setTimeout(() => {
                submit.removeAttribute('disabled');
                submit.classList.remove('disabled'); 
            }, 5000);
            
        }else{
            setTimeout(() => {
                window.location.replace('/inicio');    
            }, 5000);
            
        }


    }).catch(e =>{
        console.log('%cERROR','color:red;font-size:20px',e);  
    })
    
} 