import mongoose from 'mongoose';

const dbConnection = async () =>{ 
  try {
    mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('DB Online');
  } catch (error) {
    console.log(error);
    throw new Error('Error al inicializar la DB')
  }
}

export {dbConnection}