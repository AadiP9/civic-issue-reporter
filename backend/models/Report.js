const mongoose = require('mongoose');

const reportSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    image: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['Submitted', 'In Progress', 'Resolved'],
      default: 'Submitted',
    },
  },
  {
    timestamps: true,
  }
);

reportSchema.index({ location: '2dsphere' });

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;