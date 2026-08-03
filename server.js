const app = require('./src/app');
const config = require('./src/config');

app.listen(config.port, () => {
  console.log(`\n🫀 Sistema Circulatorio API`);
  console.log(`   Servidor corriendo en: http://localhost:${config.port}`);
  console.log(`   Entorno: ${config.nodeEnv}`);
  console.log(`   CORS habilitado para: ${config.corsOrigin}\n`);
});
