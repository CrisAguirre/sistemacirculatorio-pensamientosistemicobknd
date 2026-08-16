const express = require('express');
const router = express.Router();
const { list } = require('../controllers/session.controller');
const { authenticate } = require('../middlewares/auth.middleware');

router.get('/', authenticate, list);

module.exports = router;
