const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');

const apiRoutes = require('./routes/api.routes');

const app = express();

// Middlewares
app.use(cors({ origin: config.corsOrigin }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', apiRoutes);

// Ruta de salud
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Sistema Circulatorio API está funcionando correctamente',
    timestamp: new Date().toISOString(),
  });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
    path: req.originalUrl,
  });
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({
    error: config.nodeEnv === 'development' ? err.message : 'Error interno del servidor',
  });
});

module.exports = app;
