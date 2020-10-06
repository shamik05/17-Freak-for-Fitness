// Import nosql model
const db = require("../models");

// Define api routes
module.exports = (app) => {
  // Get latest workout
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then((dbWorkout) => {
      res.json(dbWorkout);
    })
      .catch((err) => {
        res.json(err);
      });
  });

  // Get all workouts
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then((dbWorkout) => {
      res.json(dbWorkout);
    })
      .catch((err) => {
        res.json(err);
      });
  });

  // Insert new document with current date as objectid
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then((dbWorkout) => {
      // console.log(dbWorkout);
      res.json(dbWorkout);
    });
  });

  // Update exercise subdocument array with new exercise
  app.put("/api/workouts/:id", (req, res) => {
    // console.log(req.params, req.body);
    db.Workout.findByIdAndUpdate(req.params.id,
      { $push: { exercises: req.body } }, { runValidators: true }).then((dbWorkout) => {
      res.json(dbWorkout);
    })
      .catch((err) => {
        res.json(err);
      });
  });
};
