const express = require("express");
const app = express();
const db = require("./config/mongoose");
const expressLayouts = require("express-ejs-layouts");
const port = 8000;
const router = require("./routes/index");

//to parse the request body
app.use(express.urlencoded());

//to store all the css, js files
app.use(express.static("./assets"));

//used to enable the usage of ejs layouts
app.use(expressLayouts);
app.use("/", router);

//for setting the view engine as ejs
app.set("view engine", "ejs");
app.set("views", "./views");

//creating the express server to listen on the required port.
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in creating express server`);
    return;
  }
  console.log(`Server is up and running on port ${port}`);
});
