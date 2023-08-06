const mongoose = require("mongoose");
//connecting to local mogodb server
mongoose.connect("mongodb://127.0.0.1/habbit-tracker");

const dbConnection = mongoose.connection;
//if any issue in connecting to database
dbConnection.on(
  "error",
  console.error.bind(console, "Issue in connecting the database")
);
//if the database connection is successful
dbConnection.once("open", function () {
  console.log("Database connected successfully");
});
