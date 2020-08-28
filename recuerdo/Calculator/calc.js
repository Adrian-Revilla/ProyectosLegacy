/* TAREA : SI ES MOZILLA EL NAVEGADOR EVITAR QUE SE META LETRAS EN INPUT NUMBER */
import {parsear_numeros,realizarOperacionYrenderizar,verificar_input} from './funciones.js';

let number_1 = document.getElementById('number_1'),
    number_2 = document.getElementById('number_2'),
    opt = document.getElementById('opt'),
    bnt_op = document.getElementById('btn_op'),
    result_input = document.getElementById('result_input');
    
number_1.addEventListener('keypress',(e)=>verificar_input(e))
number_2.addEventListener('keypress',(e)=>verificar_input(e))

bnt_op.addEventListener('click',()=>{
    let numeros = parsear_numeros(number_1,number_2,result_input);
    if(numeros){
        let signo = opt.value;
       realizarOperacionYrenderizar(numeros,signo,result_input);
    
    }
})