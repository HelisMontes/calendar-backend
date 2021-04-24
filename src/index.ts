import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import {dbConnection} from './database/config';
import auth from './routes/auth'
import events from './routes/events'

dotenv.config();
// Crear el servidor
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// console.log(process.env)

// Directorio publico
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', auth);
app.use('/api/events', events);

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${process.env.PORT}`)
});