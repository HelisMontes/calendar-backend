import express from 'express'

require('dotenv').config();
//Crear el servidor
const app = express(); 

// console.log(process.env)

//Directorio publico
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${process.env.PORT}`)
});