/**
 * Rutas de Usuarios / Auth
 * hots + /api/auth
 */

const { Router } = require('express')

const { addUser, loginUser, revalidateToken } = require('../controllers/auth');

const router = Router();

router.get('/renew', revalidateToken );

router.post('/', loginUser);

router.post('/new', addUser);

module.exports = router