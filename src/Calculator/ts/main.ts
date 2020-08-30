import {Check, DisplayRes, HandleError} from './funciones'

const term1 = document.querySelector('#first_term') as HTMLInputElement;
const operacion = document.querySelector('#_operacion') as HTMLSelectElement;
const term2 = document.querySelector('#second_term') as HTMLInputElement;
const btn = document.querySelector('#do_operation') as HTMLButtonElement;
const resultado = document.querySelector('#result') as HTMLInputElement;



let res_final:number;

// EVENTO PARA CALCULAR  OPERACION
btn.addEventListener('click', (e: Event) => {
  try {
    res_final = Check(term1.value, term2.value, operacion.value)    
    DisplayRes(resultado,res_final)
  } catch (e) {
    HandleError(e.message)
  }

});

