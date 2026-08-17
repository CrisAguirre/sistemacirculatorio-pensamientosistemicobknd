const express = require('express');
const router = express.Router();
const { register, login, profile } = require('../controllers/auth.controller');
const { authenticate, requireRole } = require('../middlewares/auth.middleware');

router.post('/register', authenticate, requireRole('admin'), register);
router.post('/login', login);
router.get('/profile', authenticate, profile);

module.exports = router;
