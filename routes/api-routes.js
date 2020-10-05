const db = require("../models");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then((dbWorkout) => {
      res.json(dbWorkout);
    })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then((dbWorkout) => {
      res.json(dbWorkout);
    })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then((dbWorkout) => {
      // console.log(dbWorkout);
      res.json(dbWorkout);
    });
  });

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
