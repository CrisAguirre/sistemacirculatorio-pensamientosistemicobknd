const mongoose = require('mongoose');

const evidenciaSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    session: {
      type: Number,
      default: null,
    },
    titulo: {
      type: String,
      required: true,
    },
    tipoArchivo: {
      type: String,
      enum: ['texto', 'pdf', 'image', 'word'],
      default: 'texto',
    },
    contenido: {
      type: String,
      default: '',
    },
    archivoUrl: {
      type: String,
      default: '',
    },
    fechaSubida: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

module.exports = mongoose.model('Evidencia', evidenciaSchema);
