const mongoose = require("mongoose");
//connecting to local mogodb server
mongoose.connect(process.env.MONGODB_CONNECT_URI);

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
