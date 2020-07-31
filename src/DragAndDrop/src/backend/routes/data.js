let express= require('express');
let router = express.Router();
let body_parser= require('body-parser')
let path= require('path');
router.use(body_parser.json())
router.post('/', (req,res)=>{
    if(req.body.uno=='name'){
        res.sendFile('data/name.json',{root:path.join(__dirname,'../')})
    }else if(req.body.uno=='users'){
        res.sendFile('data/users.json',{root:path.join(__dirname,'../')})
    }
})

module.exports = router;