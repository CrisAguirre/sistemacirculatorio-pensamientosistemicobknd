const express = require('express');
const router = express.Router();
const { getBySimulation, submit, getMine } = require('../controllers/exam.controller');
const { authenticate } = require('../middlewares/auth.middleware');

router.get('/mine', authenticate, getMine);
router.get('/:id', authenticate, getBySimulation);
router.post('/:id/submit', authenticate, submit);

module.exports = router;
