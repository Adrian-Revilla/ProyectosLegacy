let express= require('express');
let path = require('path');
let router = express.Router();

router.use(express.static(path.join(__dirname,'../../../distribucion_final/inicio/')))
router.get('/',(req,res)=>{

    //PREVIA COMPROBACION DE QUE ESTA AUTORIZADO A ENTRAR A LA PAG....

    console.log('he recibido una solicitud get');
    res.redirect('inicio.html');
    
})

module.exports=router;