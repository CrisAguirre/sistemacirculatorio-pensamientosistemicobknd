const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');
const simulationRoutes = require('./simulation.routes');
const examRoutes = require('./exam.routes');
const progressRoutes = require('./progress.routes');
const userRoutes = require('./user.routes');
const sessionRoutes = require('./session.routes');
const forumRoutes = require('./forum.routes');
const evidenciaRoutes = require('./evidencia.routes');
const analisisRoutes = require('./analisis.routes');
const logRoutes = require('./log.routes');

// Ruta de prueba
router.get('/', (req, res) => {
  res.json({
    message: 'Bienvenido a la API del Sistema Circulatorio',
    version: '1.0.0',
    endpoints: {
      health: 'GET /health',
      register: 'POST /api/auth/register',
      login: 'POST /api/auth/login',
      profile: 'GET /api/auth/profile',
      simulations: 'GET /api/simulations',
      sessions: 'GET /api/sessions',
      exam: 'GET /api/exams/:id',
      examSubmit: 'POST /api/exams/:id/submit',
      progress: 'GET /api/progress/mine',
      forum: 'POST /api/forum',
      evidencias: 'GET /api/evidencias/mine',
      analisis: 'POST /api/analisis',
      logs: 'POST /api/logs',
      users: 'GET /api/users',
    },
  });
});

// Autenticación
router.use('/auth', authRoutes);
router.use('/simulations', simulationRoutes);
router.use('/exams', examRoutes);
router.use('/progress', progressRoutes);
router.use('/users', userRoutes);
router.use('/sessions', sessionRoutes);
router.use('/forum', forumRoutes);
router.use('/evidencias', evidenciaRoutes);
router.use('/analisis', analisisRoutes);
router.use('/logs', logRoutes);

module.exports = router;
