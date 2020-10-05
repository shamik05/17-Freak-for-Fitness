const mongoose = require("mongoose");

const { Schema } = mongoose;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: true,
    // enum: ["cardio", "resistance"],
  },
  name: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
  },
  duration: {
    type: Number,
    trim: true,
    required: true,
  },
  distance: {
    type: Number,
    trim: true,
  },
  // weight: {
  //   type: Number,
  //   trim: true,
  // },
  // reps: {
  //   type: Number,
  //   trim: true,
  // },
  // sets: {
  //   type: Number,
  //   trim: true,
  // },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
