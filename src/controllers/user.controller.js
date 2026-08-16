const User = require('../models/User');

async function list(req, res) {
  try {
    const { role } = req.query;
    const query = {};

    if (role) {
      query.role = role;
    } else if (req.user.role === 'teacher') {
      query.role = 'student';
    }

    const users = await User.find(query).sort({ created_at: -1 });
    res.json(users);
  } catch (error) {
    console.error('Error al listar usuarios:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function getById(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error al obtener usuario:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = { list, getById };
