const Forum = require('../models/Forum');

async function create(req, res) {
  try {
    const { session, text, parent } = req.body;
    if (!session || !text) {
      return res.status(400).json({ error: 'La sesión y el mensaje son obligatorios' });
    }

    const post = await Forum.create({
      session,
      text,
      parent: parent || null,
      user: req.user.id,
    });

    res.status(201).json(post);
  } catch (error) {
    console.error('Error al publicar en el foro:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function listBySession(req, res) {
  try {
    const posts = await Forum.find({ session: req.params.session })
      .populate('user', 'full_name role')
      .sort({ created_at: 1 });
    res.json(posts);
  } catch (error) {
    console.error('Error al listar foro:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = { create, listBySession };
