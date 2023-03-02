const express = require("express");
const router = express.Router();
const activities = require("../data/activities.json");

router.get("/", (req, res) => {
  try {
    res.json(activities);
  } catch (error) {
    res.status(400).json({
      error: true,
      message: "Server is unable to be reached currently. Please try again. ",
      specific: error,
    });
  }
});

module.exports = router;
