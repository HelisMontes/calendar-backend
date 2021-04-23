import express from 'express';
import bcrypt from 'bcrypt'
import Usuario from '../models/Usuarios';
import {generarJWT} from '../helpers/jwt'

export const addUser = async(req: express.Request, res: express.Response) => {
  const {email, password} = req.body;
  try {
    let user: user | any = await Usuario.findOne({email});
      if(user){
        return res.status(400).json({
          ok: false,
          msg: `El email ${email} esta siendo usado por otro usuario`
        });
      }
    user = new Usuario(req.body);
    //Encriptar password
    const salt:string = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);
    
    await user.save();
    
    //Generar JWT
    const token = await generarJWT(user._id, user.name);
    
    return res.status(201).json({ 
      ok: true,
      uid: user._id,
      name: user.name,
      token
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'Por favor comunicarse con el administrador'
    })
  }
}
export const loginUser = async(req: express.Request, res: express.Response) => {
  const {email, password } = req.body;
  try {
    const user: user | any = await Usuario.findOne ({email});
      if(!user){
        return res.status(400).json({
          ok: false,
          msg: `Este usuario no existe`
        });
      }
    //Confirmar los password
    const validatePassword:boolean = bcrypt.compareSync(password, user.password)
    if (!validatePassword) {
      return res.status(400).json({
        ok: false,
        msg: `El password es incorrecto`
      });
    }
    //Generar JWT
    const token = await generarJWT(user._id, user.name);

    return res.json({
      ok: true,
      uid: user._id,
      name: user.name,
      token
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'Por favor comunicarse con el administrador'
    })
  }
} 

export const revalidateToken = (req: express.Request, res: express.Response) :object => {
  return res.json({
    ok: true,
    msg: 'reNew'
  });
} 
interface user{
  name: string,
  email: string,
  password: string,
  _id: string
}

module.exports = {
  addUser,
  loginUser,
  revalidateToken
}