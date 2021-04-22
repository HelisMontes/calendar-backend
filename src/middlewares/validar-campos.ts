import express from 'express'
import { validationResult } from 'express-validator';

const validarCampos = (req: express.Request, res: express.Response, next) => {
  // Manejo de errores
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({
      ok: false,
      msg: errors.mapped()
    });
  }
  next();
}

export {validarCampos}