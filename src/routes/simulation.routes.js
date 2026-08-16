const express = require('express');
const router = express.Router();
const { list, getById } = require('../controllers/simulation.controller');
const { authenticate } = require('../middlewares/auth.middleware');

router.get('/', authenticate, list);
router.get('/:id', authenticate, getById);

module.exports = router;
