import jwt from 'jsonwebtoken';

const generarJWT = (uid: string, name: string) => {
  return new Promise((resolve, reject) => {
    const payload = {uid, name}
    jwt.sign(payload, process.env.KEY_JWT,{
      expiresIn: '2h'
    }, (err, token) => {
      if(err){
        console.log(err)
        reject('No se pudo generar el token');
      }
      resolve(token);
    });
  });
}
export {generarJWT}