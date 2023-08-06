const Habit = require("../models/habits");

//this will render the habit form to create the habit
module.exports.home = async function (req, res) {
  res.render("home", {
    title: "Add Habit",
    url: req.url,
  });
};
