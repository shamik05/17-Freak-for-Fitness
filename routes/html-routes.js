// Import dependency
const path = require("path");

// Handle html requests
module.exports = (app) => {
  // Route page
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Add exercise to a workout page
  app.get("/exercise?", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // Stats page
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
