const Habit = require("../models/habits");

//for creating the new habit
module.exports.create = async function (req, res) {
  try {
    const days = [];

    //getting 6 days prior to current day
    for (let i = 0; i < 7; i++) {
      const today = new Date();
      today.setDate(today.getDate() - i);
      const newDate = today.toDateString();
      //setting default status to pending, everytime the new habit adds
      days.unshift({ date: newDate, status: "pending" });
    }
    let habit = await Habit.create({
      habit: req.body.habit.toUpperCase(),
      category: req.body.category,
      dates: days,
      time: req.body.time,
    });
    res.redirect("back");
  } catch (err) {
    console.log("Error in creating new habit", err);
    res.redirect("back");
  }
};

//getting all the habits and status for current day
module.exports.allHabits = async function (req, res) {
  try {
    let habits = await Habit.find({});

    //this will restore the prior days if the user opens the application in next days
    for (let i = 0; i < habits.length; i++) {
      let dates = habits[i].dates;
      let today = new Date();
      today.setDate(today.getDate());
      let lastDate = new Date(dates[6].date);

      //count the number of days between current day and last added day in the weekly status
      let differenceInTime = today.getTime() - lastDate.getTime();
      let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

      if (differenceInDays > 0) {
        dates.splice(0, differenceInDays);
        for (let j = differenceInDays - 1; j >= 0; j--) {
          const date = new Date();
          date.setDate(date.getDate() - j);
          const newDate = date.toDateString();
          dates.push({ date: newDate, status: "pending" });
        }
      }

      habits[i].dates = dates;
      habits[i].save();
    }

    res.render("habits", {
      habits: habits,
      title: "Habits",
      url: req.url,
    });
  } catch (err) {
    console.log("Error in getting all habits ", err);
    res.redirect("back");
  }
};

//getting weekly status for all the habits
module.exports.weeklyStatus = async function (req, res) {
  try {
    let habits = await Habit.find({});
    res.render("weekly_status", {
      habits: habits,
      title: "Weekly Status",
      url: req.url,
    });
  } catch (err) {
    console.log("Error in fetching all the habits ", err);
    res.redirect("back");
  }
};

//for updating the habit status for the entire week
module.exports.updateStatus = async function (req, res) {
  let dateId = req.params.date_id;
  let habitId = req.params.habit_id;

  let habit = await Habit.findById(habitId);

  for (let i = 0; i < habit.dates.length; i++) {
    //toggling the status to whatever required
    if (habit.dates[i].id === dateId) {
      if (habit.dates[i].status === "pending") {
        habit.dates[i].status = "done";
      } else if (habit.dates[i].status === "done") {
        habit.dates[i].status = "not done";
      } else {
        habit.dates[i].status = "pending";
      }
    }
  }
  habit.save();
  res.redirect("back");
};
//for updating the habit status for the present day
module.exports.updateOne = async function (req, res) {
  let habitId = req.params.habit_id;
  let habit = await Habit.findById(habitId);

  habit.dates[6].status = req.body.status;
  habit.save();
  res.redirect("back");
};
