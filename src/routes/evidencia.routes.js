const express = require('express');
const router = express.Router();
const { create, listMine } = require('../controllers/evidencia.controller');
const { authenticate } = require('../middlewares/auth.middleware');

router.post('/', authenticate, create);
router.get('/mine', authenticate, listMine);

module.exports = router;
