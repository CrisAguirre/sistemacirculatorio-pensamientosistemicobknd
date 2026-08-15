const mongoose = require('mongoose');
const config = require('./index');

async function connectDB() {
  if (!config.mongodbUri) {
    console.error('❌ MONGODB_URI no está configurada en las variables de entorno');
    process.exit(1);
  }

  try {
    await mongoose.connect(config.mongodbUri);
    console.log('🟢 Conectado a MongoDB Atlas (base de datos: ps2)');
  } catch (error) {
    console.error('🔴 Error al conectar a MongoDB:', error.message);
    process.exit(1);
  }
}

module.exports = { connectDB, mongoose };
