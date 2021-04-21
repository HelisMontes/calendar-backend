import express from 'express'
require('dotenv').config();
//Crear el servidor
const app = express(); 

// console.log(process.env)

//Directorio publivo
app.use( express.static('public') );

// //Rutas
// app.get('/', (req, res) => { 
//   console.log('Se requiere /');
//   res.json({ ok: true })
// });

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${process.env.PORT}`)
});