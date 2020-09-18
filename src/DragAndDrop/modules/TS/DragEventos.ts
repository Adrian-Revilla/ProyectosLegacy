import { Avatar, Nombre, AnioYEdad, Biografia } from './Clases'


type dataTransferValues = {
  LI_ID: string,
  LI_TextContent:string
}



const DragStart = (e: DragEvent) => {

  let target = e.target as HTMLElement;
  target.style.opacity='1' 
  let obj= {LI_ID:target.id, LI_TextContent:target.textContent}

  e.dataTransfer?.setData('text/plain',JSON.stringify(obj))
  
  console.log('DRAG START')
}

const DragOver = (e: DragEvent) => e.preventDefault();


const DragEnd = (e: DragEvent) => {
  let target = e.target as HTMLElement;
  target.style.opacity='1'
}

const DragDrop = (e: DragEvent) => {
  
  e.preventDefault();

  
  
  let values:dataTransferValues = JSON.parse(e.dataTransfer?.getData('text')!)
  
  switch (values.LI_ID) {
    case 'Avatar':   
      new Avatar(values.LI_ID, values.LI_TextContent)
    
      break;
    case 'Nombre':
      new Nombre(values.LI_ID,values.LI_TextContent)
    
      break;
    case 'AnioYEdad':
      new AnioYEdad(values.LI_ID,values.LI_TextContent)
    
    break;
    case 'Biografia':
      new Biografia(values.LI_ID,values.LI_TextContent)
    break;
    
    default:
      console.warn('ELEMENTO NO RECONOCIDO')
    break;
  }


}

export { DragStart, DragOver, DragDrop,DragEnd }