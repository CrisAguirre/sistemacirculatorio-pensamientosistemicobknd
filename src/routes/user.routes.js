const express = require('express');
const router = express.Router();
const { list, getById } = require('../controllers/user.controller');
const { authenticate, requireRole } = require('../middlewares/auth.middleware');

router.get('/', authenticate, requireRole('admin', 'teacher'), list);
router.get('/:id', authenticate, requireRole('admin', 'teacher'), getById);

module.exports = router;
