const app = require('./src/app');
const config = require('./src/config');
const { connectDB } = require('./src/config/database');

async function start() {
  await connectDB();

  app.listen(config.port, () => {
    console.log(`\n🫀 Sistema Circulatorio API`);
    console.log(`   Servidor corriendo en: http://localhost:${config.port}`);
    console.log(`   Entorno: ${config.nodeEnv}`);
    console.log(`   CORS habilitado para: ${config.corsOrigins.join(', ')}\n`);
  });
}

start();
