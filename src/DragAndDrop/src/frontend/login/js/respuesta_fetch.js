import {vars} from './vars.js'
import $ from 'jquery';

export let respuesta_fetch = (fetch_data) =>{
    
    var info_color;
    let alert= vars.section();
    alert.innerHTML=fetch_data.respuesta;
    
    if(fetch_data.auth){
        info_color='bg-success';
    }else if(!fetch_data.auth){
        info_color='bg-danger';
    }
    
    alert.classList.add('alert',info_color,'w-50','fixed','clearfix','text-white','text-center'); 
    alert.classList.add('section-x')
    alert.setAttribute('role','alert');
    
    vars.body().insertBefore(alert,vars.main());
    
    setTimeout(() => {
       $(".section-x").fadeOut("fast",function(){
            $(".section-x").addClass('hidden');
       });
        
    }, 4000);    
   
    return fetch_data.auth;
}

