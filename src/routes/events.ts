/**
 * Rutas de Eventos
 * hots + /api/events
 */

import { Router } from 'express';

import { getEvents, createEvent, updateEvent, deleteEvent  } from '../controllers/events'
import { validarToken } from '../middlewares/validar-jwt';

const events: Router = Router();

//Todas las rutas tienen que pasar por la validación del JWT
events.use(validarToken)

events.get('/', getEvents);
events.post('/', createEvent);
events.put('/:id', updateEvent);
events.delete('/:id', deleteEvent);

module.exports = events