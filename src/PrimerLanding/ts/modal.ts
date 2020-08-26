
import * as $ from "jquery";

let formulario = document.querySelector("#Mycontact") as HTMLFormElement;

formulario.addEventListener('submit', (e:Event) => {
  e.preventDefault();
  console.log('clickeado')
  $('#modal').modal('toggle');

  setTimeout(() => {
    $('#modal').modal('hide');
  }, 3000);
})


