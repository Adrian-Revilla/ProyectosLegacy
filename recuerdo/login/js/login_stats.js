(function(){
    let url;
    let i;
    let numbers=[];

     url= new URL(`/get_stats`,'http://192.168.0.105:8000') //ESTO DEBE CAMBIAR PARA LA PROXIMA APERTURA 
        fetch(url,{
        })
        .then(res => res.text()) //cambiar respuesta
        .then(data =>{
            console.log(data)
            //GUARDAR EL NUMBERO AQUI
        })
    
    //NUMBERS PARA COLOCARLO LUEGO EN EL DOM
    

})();