//Llamando a express
const express = require('express');
//usando express
const app = express();

//Llamando data de json
const data = require('./MOCK_DATA.json')

//Definiendo puerto para el servidor
const PORT = '3000'

//¿Qué hará express cuando reciba una petición?
/*
Cuando alguien entre a la ruta, ejecutará un controladorget('ruta',(req,res)=>{}))
req => petición
res => respuesta a la petición
*/
app.get('/',(req,res)=>{
    res.json({data, "xd": "xd?"})//Respondemos con un json
})

//Usando listen para que app escuche
app.listen(PORT,()=>{
    console.log(`Listo! escuchando en http://localhost:${PORT}`)
})