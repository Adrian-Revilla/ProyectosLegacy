
abstract class EstructuraHTML {

  /* VARIABLES DE CLASE */

  protected abstract CuerpoBootstrapCARD(): void;

  protected EstructuraBase: HTMLFieldSetElement | null = null;

  protected BootstrapCARD: HTMLDivElement | null = null;

  protected BootstrapCARD_HEADER: HTMLElement | null = null;

  /* FUNCIONES */

  protected GenerarEstructura(ID: string, TituloBootstrapCard: string) {
    return this.GenerarFieldset(ID, this.GenerarBootstrapCARD(TituloBootstrapCard))
  }

  private GenerarFieldset = (ID: string, BootstrapCARD: HTMLDivElement) => {
    let elemento = document.createElement('fieldset') as HTMLFieldSetElement
    elemento.appendChild(BootstrapCARD)
    elemento.id = `${ID}`
    return elemento
  }

  private GenerarBootstrapCARD = (TituloBootstrapCard: string) => {

    this.BootstrapCARD = document.createElement('div')

    this.BootstrapCARD.classList.add('card', 'mb-2');

    this.BootstrapCARD_HEADER = this.GenerarBootstrapCard_HEADER(TituloBootstrapCard)

    this.BootstrapCARD.appendChild(this.BootstrapCARD_HEADER)

    return this.BootstrapCARD
  }

  private GenerarBootstrapCard_HEADER(Titulo: string): HTMLElement {

    let Header = document.createElement('header')
    let h3 = document.createElement('h3')
    let X = document.createElement('button')

    Header.classList.add
      (
        'card-header', 'd-flex',
        'justify-content-between',
        'flex-row', 'align-items-center'
      );

    h3.innerText = Titulo;
    X.innerHTML = '&times;'
    X.classList.add('close')
    X.type = 'button'
    X.addEventListener('click', this.RestablecerLI)

    Header.appendChild(h3)
    Header.appendChild(X)

    return Header
  }


  protected InyectarEnDropZone(Elemento: HTMLFieldSetElement) {

    let ListaDraggable = document.querySelector(`#ListaDraggable`)!
    let LI = document.querySelector(`#${Elemento.id}`)!
    

    /* antes de inyectar al dom, se elimina. de list data*/
    ListaDraggable.removeChild(LI!)
    // agrega Elemento a el dom
    document.querySelector('#FormularioDraggable')!.appendChild(Elemento)
  }

  private RestablecerLI = (e: Event) => {

    let ListaDraggable = document.querySelector(`#ListaDraggable`)!
    let FormularioDragable = document.querySelector('#FormularioDraggable')!;
    let li = document.createElement('li')
    
    // restaurar LI
    
    li.classList.add('list-group-item', 'list-group-item-action')
    li.id = this.EstructuraBase!.id
    li.textContent = this.BootstrapCARD_HEADER!.firstElementChild!.textContent
    li.draggable = true
    FormularioDragable!.removeChild(this.EstructuraBase!)
    ListaDraggable.appendChild(li)
  }
}

export class Avatar extends EstructuraHTML {

  constructor(Avatar_ID: string, textContent: string) {

    super();

    this.EstructuraBase = this.GenerarEstructura(Avatar_ID, textContent)
    console.log('se esta inyectando. antes de estos deberia ejecutar cuerpo de bootstrap card')
    this.InyectarEnDropZone(this.EstructuraBase);
  }

  protected CuerpoBootstrapCARD() {
    console.log('IMPLEMENTANDO CONTENIDO PERSONALIZADO DE AVATAR DENTRO DE BOOTSTRAP DIV')
  }

  get getElemento() {
    return this.EstructuraBase?.ATTRIBUTE_NODE;
  }

}


export class Nombre extends EstructuraHTML {

  constructor(Nombre_ID: string, textContent: string) {

    super();

    this.EstructuraBase = this.GenerarEstructura(Nombre_ID, textContent)

    console.log('se esta inyectando. antes de estos deberia ejecutar cuerpo de bootstrap card')
    this.InyectarEnDropZone(this.EstructuraBase);
  }

  protected CuerpoBootstrapCARD() {
    console.log('IMPLEMENTANDO CONTENIDO PERSONALIZADO DE AVATAR DENTRO DE BOOTSTRAP DIV')
  }

  get getElemento() {
    return this.EstructuraBase?.ATTRIBUTE_NODE;
  }


}

export class AnioYEdad extends EstructuraHTML {

  constructor(AnioYEdad_ID: string, textContent: string) {

    super();

    this.EstructuraBase = this.GenerarEstructura(AnioYEdad_ID, textContent)

    console.log('se esta inyectando. antes de estos deberia ejecutar cuerpo de bootstrap card')
    this.InyectarEnDropZone(this.EstructuraBase);
  }

  protected CuerpoBootstrapCARD() {
    console.log('IMPLEMENTANDO CONTENIDO PERSONALIZADO DE AVATAR DENTRO DE BOOTSTRAP DIV')
  }

  get getElemento() {
    return this.EstructuraBase?.ATTRIBUTE_NODE;
  }


}

export class Biografia extends EstructuraHTML {

  constructor(Biografia_ID: string, textContent: string) {

    super();

    this.EstructuraBase = this.GenerarEstructura(Biografia_ID, textContent)

    console.log('se esta inyectando. antes de estos deberia ejecutar cuerpo de bootstrap card')
    this.InyectarEnDropZone(this.EstructuraBase);
  }

  protected CuerpoBootstrapCARD() {
    console.log('IMPLEMENTANDO CONTENIDO PERSONALIZADO DE AVATAR DENTRO DE BOOTSTRAP DIV')
  }

  get getElemento() {
    return this.EstructuraBase?.ATTRIBUTE_NODE;
  }


}

