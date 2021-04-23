/**
 * Rutas de Eventos
 * hots + /api/events
 */

import { Router } from 'express';
import { check } from 'express-validator';

import { getEvents, createEvent, updateEvent, deleteEvent  } from '../controllers/events';
import { validarToken } from '../middlewares/validar-jwt';
import { validarCampos } from '../middlewares/validar-campos';
import { isDate, isDateEnd } from '../helpers/validate-date';

const events: Router = Router();

//Todas las rutas tienen que pasar por la validación del JWT
events.use(validarToken)

events.get('/', getEvents);
events.post(
  '/', 
  [
    check('title', 'El titulo es requerido').not().isEmpty(),
    check('start', 'La fecha inicial es requerida').custom(isDate),
    check('end', 'La fecha final es requerida').custom(isDateEnd),
    validarCampos
  ],
  createEvent);
events.put('/:id', updateEvent);
events.delete('/:id', deleteEvent);

module.exports = events 