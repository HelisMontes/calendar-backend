import express from 'express'
import { validationResult } from 'express-validator';

export const addUser = (req: express.Request, res: express.Response): object => {
  const {name, email, password} = req.body;

  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(401).json({
      ok: false,
      msg: errors.mapped()
    });
  }
  return res.json({ 
    ok: true,
    msg: 'new',
    name,
    email,
    password
  });
}
export const loginUser = (req: express.Request, res: express.Response) :object => {
  const {email, password } = req.body;
  // Manejo de errores
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(401).json({
      ok: false,
      msg: errors.mapped()
    });
  }
  return res.json({
    ok: true,
    msg: 'login',
    email,
    password
  });
} 

export const revalidateToken = (req: express.Request, res: express.Response) :object => {
  return res.json({
    ok: true,
    msg: 'reNew'
  });
} 

module.exports = {
  addUser,
  loginUser,
  revalidateToken
}