const mongoose = require("mongoose");

const { Schema } = mongoose;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: true,
    default: () => Date.now(),
  },
  exercises: [
    {
      // type: Schema.Types.ObjectId,
      // ref: "Exercise",
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
      weight: {
        type: Number,
        trim: true,
      },
      reps: {
        type: Number,
        trim: true,
      },
      sets: {
        type: Number,
        trim: true,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
