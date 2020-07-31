export let remover_fetch_respuesta = () =>{
    let firstChild = document.body.firstElementChild;
    
    if(firstChild.classList.contains('section-x')){
        document.body.removeChild(firstChild)
    }
}









