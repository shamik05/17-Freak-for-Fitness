// Import dependencies
// require("dotenv").config();
const compression = require("compression");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
// const path = require("path");
// const db = require("./models");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(compression());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
