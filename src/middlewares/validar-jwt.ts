import express from 'express';
import jwt from 'jsonwebtoken';

const validarToken = (req: express.Request, res: express.Response, next: any) => {
  // Headers x-token
  const token:any = req.header('x-token');
  if(!token){
    res.status(401).json({
      ok: false,
      msg: 'No hay token en la petición'    
    });
  }
  try {
    const payload:any = jwt.verify(token, process.env.KEY_JWT);
    req.body.user_id = payload.uid
    req.body.name = payload.name
  } catch (error) {
    res.status(401).json({
      ok: false,
      msg: 'Token no valido'
    });
  }



  next();
}
export {validarToken}