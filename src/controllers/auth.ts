import express from 'express';

export const addUser = (req: express.Request, res: express.Response): object => {
  const {name, email, password} = req.body;
  return res.status(201).json({ 
    ok: true,
    msg: 'new',
    name,
    email,
    password
  });
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