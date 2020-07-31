const path =require('path');
const express= require('express');
const multer = require('multer');
let router = express.Router()

let form_parser= multer();

let ruta_a_login= path.join(__dirname,'../../../distribucion_final/login/');

router.use(express.static(ruta_a_login ,{extensions:['html']}))
router.use(form_parser.none());


router.get('/',(req,res)=>{ //SE REFIERE A EL PREFIJO USADO EN EL INDEX.JS 
  
    
    res.redirect('login.html') //Por ende el /index -> / <-- se convierte en el nuevo prefijo
    //lo correcto seria send file y render se usa con templates engines
})

router.post('/ingresar',(req,res)=>{
    
    if(req.body.user=='adrian' && req.body.pass=='123'){

        res.send(JSON.stringify({
                respuesta:'<h4 class="text-center"><span class="float-left" style="font-family:sans-serif; font-weight:bolder;" >&#x2714;</span> <strong>ACCESO CONCEDIDO</strong> </h4>',
                auth:true
            }))
        
    }else{
        res.send(JSON.stringify({
            respuesta:'<h4 class="text-center"><span class="float-left">&#9888;</span><strong>ACCESO DENEGADO</strong></h4>',
            auth:false
        }))
    }
    
    
})




router.get('/*',(req,res)=>{
    res.send('error2');
  })




module.exports=router;