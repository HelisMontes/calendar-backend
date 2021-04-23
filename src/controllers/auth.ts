import express from 'express';
import Usuario from '../models/Usuarios'

export const addUser = async(req: express.Request, res: express.Response) => {
  //const {name, email, password} = req.body;
  try {
    const user = new Usuario(req.body);
    await user.save()
    return res.status(201).json({ 
      ok: true,
      msg: 'new',
    });
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Por favor comunicarse con el administrador'
    })
  }
}
export const loginUser = (req: express.Request, res: express.Response) :object => {
  const {email, password } = req.body;
  return res.status(201).json({
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