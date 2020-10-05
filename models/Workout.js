/* eslint-disable func-names */
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
        enum: ["cardio", "resistance"],
      },
      name: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
      },
      duration: {
        type: Number,
        min: 1,
        required: true,
      },
      distance: {
        type: Number,
        min: 1,

      },
      weight: {
        type: Number,
        min: 1,

      },
      reps: {
        type: Number,
        min: 1,

      },
      sets: {
        type: Number,
        min: 1,

      },
    },
  ],
},
{
  toJSON: {
    virtuals: true,
  },
});

WorkoutSchema.virtual("totalDuration").get(function () {
  const reducer = (accumulator, currentValue) => accumulator + currentValue.duration;

  return this.exercises.reduce(reducer, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
