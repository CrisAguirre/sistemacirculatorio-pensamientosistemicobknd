const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');

// Ruta de prueba
router.get('/', (req, res) => {
  res.json({
    message: 'Bienvenido a la API del Sistema Circulatorio',
    version: '1.0.0',
    endpoints: {
      health: 'GET /health',
      api: 'GET /api',
      register: 'POST /api/auth/register',
      login: 'POST /api/auth/login',
      profile: 'GET /api/auth/profile',
    },
  });
});

// Autenticación
router.use('/auth', authRoutes);

module.exports = router;
