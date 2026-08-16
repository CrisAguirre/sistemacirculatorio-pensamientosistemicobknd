const express = require('express');
const router = express.Router();
const { getMine, save } = require('../controllers/progress.controller');
const { authenticate } = require('../middlewares/auth.middleware');

router.get('/mine', authenticate, getMine);
router.post('/', authenticate, save);

module.exports = router;
