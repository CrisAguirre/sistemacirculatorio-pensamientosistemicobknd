const Evidencia = require('../models/Evidencia');

async function create(req, res) {
  try {
    const { titulo, tipoArchivo, contenido, archivoUrl, session } = req.body;
    if (!titulo) {
      return res.status(400).json({ error: 'El título es obligatorio' });
    }

    const evidencia = await Evidencia.create({
      user: req.user.id,
      session: session || null,
      titulo,
      tipoArchivo: tipoArchivo || 'texto',
      contenido: contenido || '',
      archivoUrl: archivoUrl || '',
    });

    res.status(201).json(evidencia);
  } catch (error) {
    console.error('Error al guardar evidencia:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function listMine(req, res) {
  try {
    const evidencias = await Evidencia.find({ user: req.user.id }).sort({ created_at: -1 });
    res.json(evidencias);
  } catch (error) {
    console.error('Error al listar evidencias:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = { create, listMine };
