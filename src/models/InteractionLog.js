const mongoose = require('mongoose');

const interactionLogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    simulationId: {
      type: String,
      required: true,
    },
    session: {
      type: Number,
      default: null,
    },
    variable: {
      type: String,
      required: true,
    },
    value: {
      type: mongoose.Schema.Types.Mixed,
    },
    createdAt: {
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

module.exports = mongoose.model('InteractionLog', interactionLogSchema);
