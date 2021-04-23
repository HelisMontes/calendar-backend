import express from 'express';
import Usuario from '../models/Usuarios'

export const addUser = async(req: express.Request, res: express.Response) => {
  const {email, password} = req.body;
  try {
    let user:any = await Usuario.findOne({email});
      if(user){
        return res.status(400).json({
          ok: false,
          msg: `El email ${email} esta siendo usado por otro usuario`
        });
      }
    user = new Usuario(req.body);
    await user.save()
    return res.status(201).json({ 
      ok: true,
      uid: user._id,
      name: user.name
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