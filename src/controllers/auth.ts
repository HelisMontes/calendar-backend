const {response} = require('express')

export const addUser = (req, res = response) => {
  const {name, email, password} = req.body;
  if(name.length < 5){
    return res.json({
      ok: false,
      msg: 'El nombre debe ser mayor a 5 caracteres'
    })
  }
  res.json({ 
    ok: true,
    msg: 'new',
    name,
    email,
    password
  });
}
export const loginUser = (req, res = response)=>{
  const {email, password } = req.body;
  res.json({
    ok: true,
    msg: 'login',
    email,
    password
  });
} 

export const revalidateToken = (req, res = response)=>{
  res.json({
    ok: true,
    msg: 'reNew'
  });
} 

module.exports = {
  addUser,
  loginUser,
  revalidateToken
}