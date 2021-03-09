const express = require("express");
const User = require("./user-model");
const router = express.Router();
const restricted = require("../middleware/restricted");

//get all users
router.get("/", restricted, async (req, res, next) => {
  try {
    const rows = await User.find();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Get a user by ID
router.get("/:id", async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const rows = await User.findById(user_id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

router.use((err, req, res) => {
  res.status(500).json({
    message: " User server error!!!",
    error: err.message,
  });
});

module.exports = router;
