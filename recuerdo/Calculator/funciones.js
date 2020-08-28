export const parsear_numeros = (number_1,number_2,result)=>{
    let parsed_1,parsed_2;
    try{
        if(number_1.value.includes('.')){
            parsed_1 = Number.parseFloat(number_1.value)
            parsed_2 = Number.parseFloat(number_2.value)
        }else{
            parsed_1 =Number.parseInt(number_1.value)
            parsed_2 =Number.parseInt(number_2.value)
        }
        
        if(isNaN(parsed_1) || isNaN(parsed_2)){
            throw "ERROR: NUMERO NO VALIDO";
        }else{
            return [parsed_1,parsed_2];
        }
    }catch(e){

        result.value=e;
        return false;
    }
}

export const realizarOperacionYrenderizar = (numeros,signo,result_input)=>{
    let res,final;
    switch(signo){
        case '+':
        res= numeros[0] + numeros[1]
        break;
        case '-':
            res= numeros[0] - numeros[1]
        break;
        case '*':
            res= numeros[0] * numeros[1]
        break;
        case '/':
            res= numeros[0] / numeros[1]
        break;
    }
    
    if(Number.isInteger(res)==false){
        final = res.toFixed(2);
    }else{final = res}

    result_input.value=final;
    
}


export const verificar_input = (e)=>{
    let regex=/^[(\+\d)||(\d\-)||(\d\.)]{1,}$/i;
    if(e.key == "e" || e.key == '`' || e.key == '´' || !regex.test(e.key)){
        e.preventDefault();
        return false; 
     }
}
