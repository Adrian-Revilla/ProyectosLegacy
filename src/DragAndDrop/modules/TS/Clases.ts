abstract class Estructura {

  abstract ContenidoCARD_DIV(): void;


  protected GenerarEstructura(Name: string): HTMLFieldSetElement {
    /* fieldset externo, carta div */

    let FIELDSET, CARD_DIV, CARD_HEADER;

    FIELDSET = document.createElement('fieldset')

    CARD_DIV = document.createElement('div')
    CARD_DIV.classList.add('card', 'mb-2')

    CARD_HEADER = this.GenerarCARD_HEADER(CARD_DIV, Name)

    CARD_DIV.appendChild(CARD_HEADER)

    FIELDSET.appendChild(CARD_DIV)

    FIELDSET.id = `${Name}_`


    return FIELDSET
  }

  private GenerarCARD_HEADER(CARD_DIV: HTMLDivElement, Name: string): HTMLHeadElement {

    let Header = document.createElement('header')
    let h3 = document.createElement('h3')
    let X = document.createElement('button')

    Header.classList.add('card-header', 'd-flex', 'justify-content-between', 'flex-row', 'align-items-center')

    h3.innerText = Name;
    X.innerHTML = '&times;'
    X.classList.add('close')
    X.type = 'button'
    X.addEventListener('click', this.AutoDestruirse)

    Header.appendChild(h3)
    Header.appendChild(X)

    return Header

  }



  private AutoDestruirse = (e: Event) => {

    let target = e.target as HTMLButtonElement;
    let fieldset = target.parentElement?.parentElement?.parentElement as HTMLFieldSetElement;

    console.log('bip bop, ¡me auto destruyo! ')
    document.querySelector('.FormData')?.removeChild(fieldset)
    
    
    this.RestaurarLI(fieldset.id)

  }


  private RestaurarLI = (id:string) => {
    
    
    let LI = document.createElement('LI');
    LI.classList.add('list-group-item', 'list-group-item-action')
  

    switch (id) {
      case 'Avatar_':
        LI.id = 'Avatar';
        LI.innerText = 'Avatar'
        LI.draggable=true
      break;
      
      
    }
    document.querySelector('.ListaData')?.appendChild(LI)

  }

  EliminarDeListData(Elemento: string) {
    console.log(Elemento)
    let e = document.querySelector(`#${Elemento}`) as HTMLLIElement
    document.querySelector('.ListaData')?.removeChild(e);
  }


  InyectarAlDom(e: HTMLElement) {
    console.log('SOLO HACER ESTO CUANDO YA SE HAYA AÑADIDO EL CONTENIDO ESPECIAL DE CADA CLASE')
    document.querySelector('.FormData')?.appendChild(e)

  }
}

export class Avatar extends Estructura {

  private Element: HTMLElement

  constructor(private idName: string) {

    super();

    this.Element = super.GenerarEstructura(idName)
    super.InyectarAlDom(this.Element)
    super.EliminarDeListData(idName)
  }

  ContenidoCARD_DIV() {
    console.log('IMPLEMENTANDO CONTENIDO PERSONALIZADO DE AVATAR DENTRO DE CARD_DIV')
  }

  get verInstancia(): HTMLElement {
    return this.Element
  }


}
