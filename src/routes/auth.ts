/**
 * Rutas de Usuarios / Auth
 * hots + /api/auth
 */

import {Router} from 'express'
import {check} from 'express-validator';

import { addUser, loginUser, revalidateToken } from '../controllers/auth';

const router = Router();

router.get('/renew', revalidateToken );

router.post(
  '/',
  [
    check('email', 'El e-mail es obligatorio').isEmail(),
    check('password', 'El password debe contener mínimo 6 caracteres').isLength({min: 6})
  ], loginUser);

router.post(
  '/new',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El e-mail es obligatorio').isEmail(),
    check('password', 'El password debe contener mínimo 6 caracteres').isLength({min: 6})
  ],
  addUser );

module.exports = router