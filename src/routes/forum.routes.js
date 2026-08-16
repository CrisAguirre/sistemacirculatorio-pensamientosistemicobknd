const express = require('express');
const router = express.Router();
const { create, listBySession } = require('../controllers/forum.controller');
const { authenticate } = require('../middlewares/auth.middleware');

router.post('/', authenticate, create);
router.get('/session/:session', authenticate, listBySession);

module.exports = router;
