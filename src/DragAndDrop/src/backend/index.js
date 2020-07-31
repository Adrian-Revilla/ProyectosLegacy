//INICIALIZACION DE MODULOS
const PORT = 8000;
const express = require('express');

let app= express();


app.get('/',(req,res)=>{
  res.redirect('/login');
})

app.use('/login',require('./routes/login.js'));

app.use('/inicio', require('./routes/inicio.js'));

app.use('/get_stats',require('./routes/login_stats.js'))

app.use('/data', require('./routes/data.js'))


app.get('/*',(req,res)=>{
  res.send('ERROR');
})

app.listen(PORT,()=> console.log('ESTOY ABIERTO EN',PORT));