import { Avatar } from './Clases'

const DragStart = (e: DragEvent) => {

  let target = e.target as HTMLElement;
  e.dataTransfer?.setData('text/plain', target.id)
  console.log('DRAG START')
}

const DragOver = (e: DragEvent) => e.preventDefault();

const DragDrop = (e: DragEvent) => {

  e.preventDefault();

  let target = e.dataTransfer?.getData('text')

  switch (target) {
    case 'Avatar':
      console.log('AVATAR!!')
      let myAvata = new Avatar('Avatar')

      console.log(myAvata.verInstancia)

      break;
    case 'Nombre':
      console.log('Nombre!!')
      break;
    case 'FechaYEdad':
      console.log('FechaYEdad!!')
    break;
    case 'Biografia':
      console.log('Biografia!!')
    break;
    
    default:
      console.warn('ELEMENTO NO RECONOCIDO')
      break;
  }


}

export { DragStart, DragOver, DragDrop }