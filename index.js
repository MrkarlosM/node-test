//Llamando a express
const express = require('express');
//llamamos el servicio de gdrive

const Service = require('./src/controllers/drive-api.js')


//usando express
const app = express();

//Llamando data de json
const data = require('./MOCK_DATA.json')

//Definiendo puerto para el servidor
const PORT = '3500'

//¿Qué hará express cuando reciba una petición?
/*
Cuando alguien entre a la ruta, ejecutará un controladorget('ruta',(req,res)=>{}))
req => petición
res => respuesta a la petición
*/
app.get('/',async (req,res)=>{
    res.json({message: "Hola",body: await Service.greet()})//Respondemos con un json
})

//Usando listen para que app escuche
app.listen(PORT,()=>{
    console.log(`Listo! escuchando en http://localhost:${PORT}`)
})

console.log("Logueo" + Service.greet())