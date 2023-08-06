const express = require("express");
const router = express.Router();
const habitController = require("../controllers/habit_controller");

//for creating new habit
router.post("/create", habitController.create);
//for getting list of all habits
router.get("/list", habitController.allHabits);
//for getting list of all habits with weekly status
router.get("/list/weekly", habitController.weeklyStatus);
//for updaing any day's status from the past 6 days and current day
router.post("/:habit_id/dates/:date_id", habitController.updateStatus);
//for updating the status for current day
router.post("/:habit_id", habitController.updateOne);

module.exports = router;
