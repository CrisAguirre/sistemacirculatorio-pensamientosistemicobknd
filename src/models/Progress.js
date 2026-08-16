const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    completedSimulations: {
      type: [String],
      default: [],
    },
    completedSessions: {
      type: [Number],
      default: [],
    },
    currentSimulationId: {
      type: String,
      default: null,
    },
    scores: {
      type: Map,
      of: Number,
      default: {},
    },
    data: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    lastSavedAt: {
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

module.exports = mongoose.model('Progress', progressSchema);
