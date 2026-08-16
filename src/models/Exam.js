const mongoose = require('mongoose');

const examSchema = new mongoose.Schema(
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
    simulationTitle: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
      default: 0,
    },
    total: {
      type: Number,
      required: true,
      default: 0,
    },
    answers: [
      {
        questionId: String,
        selectedIndex: Number,
        correctIndex: Number,
        isCorrect: Boolean,
      },
    ],
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

module.exports = mongoose.model('Exam', examSchema);
