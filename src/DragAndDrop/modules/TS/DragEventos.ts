import { Avatar } from './Clases'

type dataTransferValues = {
  LI_ID: string,
  LI_TextContent:string
}

const DragStart = (e: DragEvent) => {

  let target = e.target as HTMLElement;
  let obj= {LI_ID:target.id, LI_TextContent:target.textContent}

  e.dataTransfer?.setData('text/plain',JSON.stringify(obj))

  

  console.log('DRAG START')
}

const DragOver = (e: DragEvent) => e.preventDefault();

const DragDrop = (e: DragEvent) => {

  e.preventDefault();

  
  let values:dataTransferValues = JSON.parse(e.dataTransfer?.getData('text')!)
  
  // let ID = e.dataTransfer?.getData('text')


  switch (values.LI_ID) {
    case 'Avatar':
        let instancia = new Avatar(values.LI_ID,values.LI_TextContent)
      // let Instacia  = new Avatar('Avatar', ID);
      // console.log(Instacia.getElemento)
      break;
    case 'Nombre':
      // console.log('Nombre-'+ID)
      // new Nombre(values.LI_ID,values.LI_TextContent)
      break;
    case 'AnioYEdad':

      // console.log('Edad Y fecha de nacimiento'+ID)
    break;
  //   // case 'Biografia':
  //   //   console.log('Biografia!!')
  //   // break;
    
  //   // default:
  //   //   console.warn('ELEMENTO NO RECONOCIDO')
  //   //   break;
  }


}

export { DragStart, DragOver, DragDrop }