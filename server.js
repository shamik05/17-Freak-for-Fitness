// Import dependencies
// require("dotenv").config();
const compression = require("compression");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const db = require("./models");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(compression());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// const databaseUrl = "";
// const collections = [];

// const db = mongojs(databaseUrl, collections);

// db.on("error", error => {
//   console.log("Database Error:", error);
// });

app.get("/api/workouts", (req, res) => {
  db.Workout.find({}).then((dbWorkout) => {
    res.json(dbWorkout);
  })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/exercise?", (req, res) => {
  // console.log(req.query);
  db.Workout.findOne({
    _id: req.query.id,
  }).then((dbWorkout) => {
    console.log(dbWorkout);
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
  }).catch((err) => {
    res.json(err);
  });
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/stats.html"));
});

app.get("/api/workouts/range", (req, res) => {
  db.Workout.find({}).then((dbWorkout) => {
    res.json(dbWorkout);
  })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
