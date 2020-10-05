const path = require("path");
// const db = require("../models");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/exercise?", (req, res) => {
    // console.log(req.query);
    // db.Workout.findOne({
    //   _id: req.query.id,
    // }).then((dbWorkout) => {
    //   console.log(dbWorkout);
      res.sendFile(path.join(__dirname, "../public/exercise.html"));
    // }).catch((err) => {
    //   res.json(err);
    // });
  });

  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
