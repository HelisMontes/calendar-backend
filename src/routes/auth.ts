/**
 * Rutas de Usuarios / Auth
 * hots + /api/auth
 */

import {Router} from 'express'
import {check} from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos';

import { addUser, loginUser, revalidateToken } from '../controllers/auth';
import { validarToken } from '../middlewares/validar-jwt';

const router = Router();

router.get('/renew', validarToken ,revalidateToken );

router.post(
  '/',
  [
    check('email', 'El e-mail es obligatorio').isEmail(),
    check('password', 'El password debe contener mínimo 6 caracteres').isLength({min: 6}),
    validarCampos
  ], loginUser);

router.post(
  '/new',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El e-mail es obligatorio').isEmail(),
    check('password', 'El password debe contener mínimo 6 caracteres').isLength({min: 6}),
    validarCampos
  ],
  addUser);

export default router