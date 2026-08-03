const express = require('express');
const router = express.Router();

// Ruta de prueba
router.get('/', (req, res) => {
  res.json({
    message: 'Bienvenido a la API del Sistema Circulatorio',
    version: '1.0.0',
    endpoints: {
      health: 'GET /health',
      api: 'GET /api',
    },
  });
});

module.exports = router;
