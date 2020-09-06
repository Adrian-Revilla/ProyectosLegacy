const DragStart = (e: DragEvent) => {
  console.log('DRAG START')
}

const DragOver = (e: DragEvent) => e.preventDefault();

const DragDrop = (e: DragEvent) => {
  e.preventDefault();
  console.log('ENTRO EN DROPZONE')
}

export {DragStart, DragOver, DragDrop }