/**
 * Rutas de Usuarios / Auth
 * hots + /api/auth
 */
import {Router} from 'express'
const router = Router();

router.get('/', (req, res) => { 
  console.log('Se requiere /');
  res.json({ ok: true })
});

module.exports = router