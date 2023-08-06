const mongoose = require("mongoose");
//creating the habit schema for storing in the database
const habitSchema = new mongoose.Schema(
  {
    habit: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    dates: [
      {
        date: String,
        status: String,
      },
    ],
    time: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const habits = mongoose.model("habits", habitSchema);
module.exports = habits;
