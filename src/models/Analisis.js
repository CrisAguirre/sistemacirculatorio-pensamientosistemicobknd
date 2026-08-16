const mongoose = require('mongoose');

const analisisSchema = new mongoose.Schema(
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
    tipoAnalisis: {
      type: String,
      enum: ['Cualitativo', 'Cuantitativo'],
      default: 'Cualitativo',
    },
    descripcion: {
      type: String,
      required: true,
    },
    metricas: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    fechaAnalisis: {
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

module.exports = mongoose.model('Analisis', analisisSchema);
