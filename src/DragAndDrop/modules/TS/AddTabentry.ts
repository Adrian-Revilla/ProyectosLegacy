/* VARIABLES:: */
import {DragStart,DragOver,DragDrop,DragEnd} from './DragEventos'


const _ListaData = document.querySelector('.ListaData') as HTMLUListElement;
const _FormData = document.querySelector('.FormData') as HTMLFormElement;

_ListaData.addEventListener('dragstart', DragStart)

_FormData.addEventListener('dragover', DragOver)

_FormData.addEventListener('drop', DragDrop)
_ListaData.addEventListener('dragend', DragEnd)