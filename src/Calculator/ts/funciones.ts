import * as $ from 'jquery';

//row de errores.
let error_column = document.querySelector('#error_column') as HTMLElement;
//div .alert
let parent = document.createElement('div'),
  //etiqueta strong
  strong = document.createElement('strong'),
  //boton de cierre
  dismiss_btn = document.createElement('button'),
  // el span dentro de boton de cierre
  dismiss_btn_text = document.createElement('span'),

  //etiqueta parrafo
  p = document.createElement('p');



let parsed1, parsed2;
let res;




export const Check = (term1: string, term2: string, operation: string) => {

  parsed1 = Number.parseFloat(term1);
  parsed2 = Number.parseFloat(term2);

  if (Number.isNaN(parsed1) || Number.isNaN(parsed2)) {
    throw new Error('· Uno o mas terminos no se han introducido correctamente ·');
  } else {
    return Operar(parsed1, parsed2, operation)
  }
}

export const Operar = (op1: number, op2: number, operacion: string): number => {

  switch (operacion) {
    case '+':
      res = op1 + op2

      break;

    case '-':
      res = op1 - op2
      break;

    case '*':
      res = op1 * op2
      break;

    case '/':
      res = op1 / op2
      break;
    default:

      res = 0;
  }
  return res;


}

export const DisplayRes = (element: HTMLInputElement, res: number) => {
  if ($('.alert').length) {
    $('.alert').alert('close');
  }
  element.value = res.toString();
}


//propiedades para el  .alert
parent.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade')

//propiedades del boton de cierre
dismiss_btn.classList.add('close');
dismiss_btn.dataset.dismiss = "alert"
dismiss_btn.appendChild(dismiss_btn_text)

dismiss_btn_text.innerHTML = '&#215;'


strong.innerText = '¡ERROR!'

parent.appendChild(strong);
parent.appendChild(p)
parent.appendChild(dismiss_btn);


export const HandleError = (mensaje: string) => {
  // <div class="alert alert-warning alert-dismissible fade" role="alert">
  //         <strong>Holy guacamole!</strong> AQUI VOY A PONER EL ERROR O LA EXPEXCION QUE ME LANZO JAVASCRIPT
  //         <button type="button" class="close" data-dismiss="alert" aria-label="Close" id="close">
  //           <span aria-hidden="true">&times;</span>
  //         </button>
  //       </div>
  (parent.children[1] as HTMLParagraphElement).innerText=mensaje
  error_column.appendChild(parent);


  $('.alert').addClass('show');
}
